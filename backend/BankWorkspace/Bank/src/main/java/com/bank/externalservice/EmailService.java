package com.bank.externalservice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.bank.model.Customer;
import com.bank.model.EmailAdmin;
import com.bank.model.Template;
import com.bank.services.CustomerService;
import com.bank.services.EmailAdminService;
import com.bank.services.TemplateService;

@Service
public class EmailService {

	@Autowired
	RestTemplate restTemplet;

	@Autowired
	CustomerService customerService;

	@Autowired
	EmailAdminService emailAdminService;

	@Autowired
	TemplateService templateService;

	@SuppressWarnings("null")
	public String callEmailService() {
		Map<String, Object> emailData = new HashMap<>();

		List<Template> t_list = templateService.getTemplate();
		Template select_template = null;
		for(Template temp:t_list)
		{
			if(temp.getName().equals("Email Template"))
			{
				select_template=temp;
			}
		}
		List<Customer> customersList = customerService.getAllCustomer();
		EmailAdmin ea = emailAdminService.getEmailAdmin().get(0);

		String[] bd = select_template.getBody().split("\\$");

		String url = "http://localhost:8888/emailmicroservice/email/sendmail";

		for (Customer c : customersList) {
			String name = c.getCustomerName();
			String expairyDate = c.getExpairyDate();
			String bankName = c.getBankName();
			String accountNo = c.getCardNo();
			String email = c.getEmail();
			String subject = select_template.getSubject();
			String body = bd[0] + name + bd[1] +"Rs." + expairyDate +  bd[2] + bankName + bd[3] + accountNo + bd[4];
			String from = ea.getMailFrom();
			String password = ea.getPassword();
			emailData.put("to", email);
			emailData.put("subject", subject);
			emailData.put("body", body);
			emailData.put("from", from);
			emailData.put("password", password);
			restTemplet.postForEntity(url, emailData, String.class);
		}

		return "SENT...";

	}
}
