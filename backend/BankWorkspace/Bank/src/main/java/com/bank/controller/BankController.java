package com.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.externalservice.EmailService;
import com.bank.externalservice.PNService;
import com.bank.externalservice.SMSService;
import com.bank.model.CallCountPn;
import com.bank.model.Customer;
import com.bank.model.EmailAdmin;
import com.bank.model.PNAdmin;
import com.bank.model.SMSAdmin;
import com.bank.model.Template;
import com.bank.services.CallCountPnService;
import com.bank.services.CustomerService;
import com.bank.services.EmailAdminService;
import com.bank.services.PNAdminService;
import com.bank.services.SMSAdminService;
import com.bank.services.TemplateService;
import com.bank.utils.JwtUtils;

@RestController
@RequestMapping("/bank")
@CrossOrigin("http://localhost:3000/")
public class BankController {

	@Autowired
	CustomerService customerService;

	@Autowired
	TemplateService templateService;

	@Autowired
	EmailAdminService emailAdminService;

	@Autowired
	SMSAdminService smsAdminService;

	@Autowired
	PNAdminService pnAdminService;

	@Autowired
	EmailService emailService;

	@Autowired
	SMSService smsService;

	@Autowired
	PNService pnService;

	@Autowired
	CallCountPnService callCountPnService;
	
	@Autowired
	JwtUtils jwtUtils;

	@GetMapping("/getCustomer")
	public List<Customer> getCustomer(@RequestHeader("jwttoken") String token) {
		System.out.println("helo");
		jwtUtils.validateToken(token);
		return customerService.getAllCustomer();
	}

	@PostMapping("/addCustomer")
	public Customer addCustomer(@RequestBody Customer customer,@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return customerService.addCustomer(customer);
	}
	
	@GetMapping("/getCustomerById/{customerId}")
	public Customer getCustomerById(@PathVariable Long customerId,@RequestHeader("jwttoken") String token)
	{
		System.out.println(customerId);
		jwtUtils.validateToken(token);
		return customerService.findCustomerById(customerId);
	}
	
	@PutMapping("/updateCustomerData")
	public Customer updateCustomerData(@RequestBody Customer customer,@RequestHeader("jwttoken") String token)
	{
		System.out.println(customer);
		jwtUtils.validateToken(token);
		return customerService.updateCustomer(customer);
	}
	
	@DeleteMapping("/deleteCustomerById/{customerId}")
	public Long deleteCustomerById(@PathVariable Long customerId,@RequestHeader("jwttoken") String token)
	{
		System.out.println(customerId);
		jwtUtils.validateToken(token);
		return customerService.deleteCustomerById(customerId);
	}

	@GetMapping("/getPnServiceCallCount")
	public CallCountPn getCallCountPnService(@RequestHeader("jwttoken") String token)
	{
		jwtUtils.validateToken(token);
		return callCountPnService.getCallCount();
	}
	
	@PostMapping("/setInitalCallCountPnService")
	public CallCountPn setInitalCallCountPnService(@RequestHeader("jwttoken") String token)
	{
		jwtUtils.validateToken(token);
		return callCountPnService.SetInitialValue();
	}


	@PostMapping("/sendmail")
	public String callEmailService(@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return emailService.callEmailService();
	}

	@PostMapping("/sendsms")
	public String callSMSService(@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return smsService.callSMSService();
	}

	@PostMapping("/sendpn")
	public List<ResponseEntity<String>> callPNService(@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return pnService.callPNService(token);
	}
	
	@PostMapping("/sendpnbyid")
	public ResponseEntity<String> callPNServiceForId(@RequestBody String appToken,@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return pnService.callPNServiceById(appToken,token);
	}

	@PostMapping("/addemailadmin")
	public EmailAdmin addemaildata(@RequestBody EmailAdmin emailAdmin,@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return emailAdminService.addEmailAdmin(emailAdmin);
	}

	@PostMapping("/addsmsadmin")
	public SMSAdmin addsmsdata(@RequestBody SMSAdmin smsAdmin,@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return smsAdminService.addSMSAdmin(smsAdmin);
	}

	@PostMapping("/addpnadmin")
	public PNAdmin addpndata(@RequestBody PNAdmin pnAdmin,@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return pnAdminService.addPNAdmin(pnAdmin);
	}

	@PostMapping("/addtemplate")
	public Template addtemplatedata(@RequestBody Template template,@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return templateService.addTemplate(template);
	}
	
	@GetMapping("/getemailadmin")
	public List<EmailAdmin> getemaildata(@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return emailAdminService.getEmailAdmin();
	}

	@GetMapping("/getsmsadmin")
	public List<SMSAdmin> getsmsdata(@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return smsAdminService.getSMSAdmin();
	}

	@GetMapping("/getpnadmin")
	public List<PNAdmin> getpndata(@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return pnAdminService.getPNAdmin();
	}

	@GetMapping("/gettemplate")
	public List<Template> gettemplatedata(@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return templateService.getTemplate();
	}

}
