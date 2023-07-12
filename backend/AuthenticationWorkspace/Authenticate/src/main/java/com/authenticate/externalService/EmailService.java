package com.authenticate.externalService;

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

import com.authenticate.model.Authrequest;
import com.authenticate.model.EmailAdmin;
import com.authenticate.model.Template;
import com.authenticate.service.EmailAdminService;
import com.authenticate.service.TemplateService;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class EmailService {
	@Autowired
	RestTemplate restTemplet;
	
	@Autowired
	EmailAdminService emailAdminService;
	
	@Autowired
	TemplateService templateService;

	public ResponseEntity<String> callEmailServiceForId(String email) {
		// TODO Auto-generated method stub
		Map<String, Object> emailData = new HashMap<>();
		System.out.println(email.replace("\"",""));
		EmailAdmin ea = emailAdminService.getAll().get(0);

		String url = "http://localhost:8888/email/sendmail";
		List<Template> t_list = templateService.getAll();
		Template select_template = null;
			for (Template temp : t_list) {
				if (temp.getName().equals("Email Template For Forget Password")) {
					select_template = temp;
				}
			}
			
		String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+ "0123456789"+ "abcdefghijklmnopqrstuvxyz";
		StringBuilder sb = new StringBuilder(10);
		 
		  for (int i = 0; i < 10; i++) {
		 
		   // generate a random number between
		   // 0 to AlphaNumericString variable length
		   int index
		    = (int)(AlphaNumericString.length()
		      * Math.random());
		 
		   // add Character one by one in end of sb
		   sb.append(AlphaNumericString
		      .charAt(index));
		  }
		  try {
		Map<String, Object> userData = new HashMap<>();
		userData.put("emailId",email.replace("\"",""));
		userData.put("password", sb.toString());
		Authrequest testUser=new Authrequest("variyad81@gmail.com","Jayshree81@");
		System.out.println("get token is called");
		ResponseEntity<String> token=restTemplet.postForEntity("http://localhost:8888/identity/authenticate", testUser, String.class);
		System.out.println(token.getBody());
		System.out.println("change password is called");
		ResponseEntity<Boolean> result=restTemplet.postForEntity("http://localhost:8888/identity/changepassword", userData,Boolean.class);
		System.out.println("email data is build....");
		String[] bd = select_template.getBody().split("\\$");
		String subject = select_template.getSubject();
		String body = bd[0] + email.replace("\"","") + bd[1]+sb.toString() +bd[2];
		String from = ea.getMailFrom();
		String password = ea.getPassword();
		emailData.put("to", email.replace("\"",""));
		emailData.put("subject", subject);
		emailData.put("body", body);
		emailData.put("from", from);
		emailData.put("password", password);

		HttpHeaders header = new HttpHeaders();
		header.set("Authorization","Bearer "+token.getBody());
		header.setContentType(MediaType.APPLICATION_JSON);
		String reqBodyData = new ObjectMapper().writeValueAsString(emailData);

		HttpEntity<String> requestEnty = new HttpEntity<>(reqBodyData, header);
		ResponseEntity<String>  rs =restTemplet.exchange(url, HttpMethod.POST,requestEnty,String.class);
		
//			 ResponseEntity<String>  rs =restTemplet.postForEntity(url, emailData, String.class);
			 return rs;
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage().replace("\"", ""));
		}
	}
}
