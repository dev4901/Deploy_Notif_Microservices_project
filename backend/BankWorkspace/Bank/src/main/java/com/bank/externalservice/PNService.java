package com.bank.externalservice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bank.model.Customer;
import com.bank.model.PNAdmin;
import com.bank.model.Template;
import com.bank.services.CallCountPnService;
import com.bank.services.CustomerService;
import com.bank.services.PNAdminService;
import com.bank.services.TemplateService;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class PNService {

	@Autowired
	RestTemplate restTemplet;

	@Autowired
	CustomerService customerService;
	
	@Autowired
	PNAdminService pnAdminService;

	@Autowired
	TemplateService templateService;
	
	@Autowired
	CallCountPnService callCountPnService;
	
	public List<ResponseEntity<String>> callPNService(String token)
	{
		List<ResponseEntity<String>> resArray = new ArrayList<>();
		Map<String, Object> pnData = new HashMap<>();
		System.out.println("method entry...");
		List<Template> t_list = templateService.getTemplate();
		Template select_template = null;
		for(Template temp:t_list)
		{
			if(temp.getName().equals("Push Notification Template"))
			{
				select_template=temp;
				System.out.println(select_template);
			}
		}
		System.out.println(select_template);
		List<Customer> customersList = customerService.getAllCustomer();
		PNAdmin pa = pnAdminService.getPNAdmin().get(0);
		
		String[] bd = select_template.getBody().split("\\$");

		String[] sd = select_template.getSubject().split("\\$");

		String url = "http://localhost:8888/pushnotification/sendnotification";

		for (Customer c : customersList) {
			String name = c.getCustomerName();
			String expairyDate = c.getExpairyDate();
			String bankName = c.getBankName();
			String cardNo = c.getCardNo();	
			String subject = sd[0]+bankName;
			String body = bd[0] + name + bd[1] + cardNo.substring(8,12)+bd[2] +expairyDate +  bd[3];
			String fcm_api = pa.getFcm_api();
			String server_key = pa.getServer_key();
			String app_token=c.getAppToken();
			pnData.put("title", subject);
			pnData.put("body", body);
			pnData.put("fcm_api", fcm_api);
			pnData.put("server_key", server_key);
			pnData.put("app_token", app_token);
			System.out.println(pnData);
			
			try {
				HttpHeaders header = new HttpHeaders();
				header.set("Authorization","Bearer "+token);
				header.setContentType(MediaType.APPLICATION_JSON);
				String reqBodyData = new ObjectMapper().writeValueAsString(pnData);

				HttpEntity<String> requestEnty = new HttpEntity<>(reqBodyData, header);
				ResponseEntity<String>  rs =restTemplet.exchange(url, HttpMethod.POST,requestEnty,String.class);
//				ResponseEntity<String>  rs=restTemplet.postForEntity(url, pnData, String.class);
				resArray.add(rs);
				System.out.println(callCountPnService.updateSuccessCount());
			} catch (Exception e) {
				e.printStackTrace();
				System.out.println(callCountPnService.updateFailureCount());
				resArray.add(ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage().replace("\"", "")));
			}
		}

		return resArray;		
	}

	public ResponseEntity<String> callPNServiceById(String appToken,String token) {
		// TODO Auto-generated method stub
		Map<String, Object> pnData = new HashMap<>();
		System.out.println("method entry...");
		List<Template> t_list = templateService.getTemplate();
		System.out.println(t_list);
		Template select_template = null;
		for(Template temp:t_list)
		{
			if(temp.getName().equals("Push Notification Template"))
			{
				select_template=temp;
				System.out.println(select_template);
			}
		}
		System.out.println(select_template);
		System.out.println(appToken);
		Customer c = customerService.getCustomerByToken(appToken.replace("\"", ""));
		PNAdmin pa = pnAdminService.getPNAdmin().get(0);
		
		System.out.println(pnAdminService.getPNAdmin());

		String[] bd = select_template.getBody().split("\\$");
		String[] sd = select_template.getSubject().split("\\$");

		String url = "http://localhost:8888/pushnotification/sendnotification";

		String name = c.getCustomerName();
		String expairyDate = c.getExpairyDate();
		String bankName = c.getBankName();
		String cardNo = c.getCardNo();
		String subject = sd[0]+bankName;
		String body = bd[0] + name + bd[1] + cardNo.substring(8,12)+bd[2] +expairyDate +  bd[3];
		String fcm_api = pa.getFcm_api();
		String server_key = pa.getServer_key();
		// String fcm_api = "https://fcm.googleapis.com/fcm/send";
		// String server_key = "AAAA8l7Hy9Q:APA91bFkB8t-RSn_XLwLx0q4zeJNQEntAbGoXdaGRfNZjfQcBP8PTa4pqjgRJlst0kOtGPM5JhD52LuQZYF_U2wG9pDzQfzjN44p_Vb4pQjLbTILZaebD6vRcCuN1ahheA9BEQFUSLj9";
		String app_token=c.getAppToken();
		pnData.put("title", subject);
		pnData.put("body", body);
		pnData.put("fcm_api", fcm_api);
		pnData.put("server_key", server_key);
		pnData.put("app_token", app_token);
		System.out.println(pnData);
		
		try {
			HttpHeaders header = new HttpHeaders();
			header.set("Authorization","Bearer "+token);
			header.setContentType(MediaType.APPLICATION_JSON);
			String reqBodyData = new ObjectMapper().writeValueAsString(pnData);

			HttpEntity<String> requestEnty = new HttpEntity<>(reqBodyData, header);
			ResponseEntity<String>  rs =restTemplet.exchange(url, HttpMethod.POST,requestEnty,String.class);
//			ResponseEntity<String>  rs= restTemplet.postForEntity(url, pnData, String.class);
			System.out.println(callCountPnService.updateSuccessCount());
			return rs;
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(callCountPnService.updateFailureCount());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage().replace("\"", ""));
		}
	}
}
