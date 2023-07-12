package com.bank.externalservice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bank.model.Customer;
import com.bank.model.SMSAdmin;
import com.bank.model.Template;
import com.bank.services.CustomerService;
import com.bank.services.SMSAdminService;
import com.bank.services.TemplateService;

@Service
public class SMSService {

	@Autowired
	RestTemplate restTemplet;

	@Autowired
	CustomerService customerService;
	
	@Autowired
	SMSAdminService smsAdminService;

	@Autowired
	TemplateService templateService;

	
	@SuppressWarnings("null")
	public String callSMSService() {
		Map<String, Object> smsData = new HashMap<>();
		System.out.println("method entry...");
		List<Template> t_list = templateService.getTemplate();
		Template select_template = null;
		for(Template temp:t_list)
		{
			if(temp.getName().equals("SMS Template"))
			{
				select_template=temp;
			}
		}
		List<Customer> customersList = customerService.getAllCustomer();
		SMSAdmin sa = smsAdminService.getSMSAdmin().get(0);
		
		String[] bd = select_template.getBody().split("\\$");

		String url = "http://localhost:8888/smsmicroservice/sms/sendsms";

		for (Customer c : customersList) {
			String name = c.getCustomerName();
			String expairyDate = c.getExpairyDate();
			String bankName = c.getBankName();
			String accountNo = c.getCardNo();
			String contactNo = c.getContactNo();
			String subject = select_template.getSubject();
			String body = bd[0] + name + bd[1]  + "Rs."+ expairyDate + bd[2] + bankName + bd[3] + accountNo + bd[4];
			String account_sid = sa.getAccount_sid();
			String auth_token = sa.getAuth_token();
			String smsfrom=sa.getPhoneNo();
			smsData.put("smsto", contactNo);
			smsData.put("subject", subject);
			smsData.put("body", body);
			smsData.put("account_sid", account_sid);
			smsData.put("auth_token", auth_token);
			smsData.put("smsfrom", smsfrom);
			System.out.println(smsData);
			restTemplet.postForEntity(url, smsData, String.class);
		}

		return "SENT...";

	}
}
