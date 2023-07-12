package com.authenticate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.authenticate.externalService.EmailService;
import com.authenticate.model.Authrequest;
import com.authenticate.model.EmailAdmin;
import com.authenticate.model.Template;
import com.authenticate.model.User;
import com.authenticate.service.EmailAdminService;
import com.authenticate.service.TemplateService;
import com.authenticate.util.JwtUtil;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="http://localhost:3000/")
public class AuthenticateController {

	
	@Autowired
	TemplateService templateService;
	
	@Autowired
	EmailAdminService emailAdminService;
	
	@Autowired
	EmailService externalEmailService;
	
	@Autowired
	RestTemplate restTemplate;
	
	@Autowired
	JwtUtil jwtUtil;
	
	@GetMapping("/home")
	public String gethome()
	{
		return "welcome to user authentication....";
	}
	
	@GetMapping("/try")
	public String get()
	{
		return "welcome to try user authentication....";
	}
	
	@PostMapping("/signup")
	public ResponseEntity<Boolean> SignUpUser(@RequestBody User user)
	{
		
		return restTemplate.postForEntity("http://172.19.0.4:8888/identity/signup",user,Boolean.class); 
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<String> checkData(@RequestBody Authrequest authrequest) throws Exception
	{
		System.out.println(authrequest);
		return restTemplate.postForEntity("http://172.19.0.4:8888/identity/authenticate", authrequest,String.class);
	}
	
	@GetMapping("/findByEmail/{emailId}")
	public ResponseEntity<Boolean> findbyEmail(@PathVariable String emailId)
	{
		return restTemplate.getForEntity("http://172.19.0.4:8888/identity/findByEmail/"+emailId, Boolean.class);
	}
	
	@PostMapping("/sendmailbyid")
	public ResponseEntity<String> callEmailServiceforid(@RequestBody String email)
	{
		System.out.println(email+"send");
		return externalEmailService.callEmailServiceForId(email);
	}
	
	@PostMapping("/addemailadmin")
	public EmailAdmin addemaildata(@RequestBody EmailAdmin emailAdmin)
	{
		return emailAdminService.addemail(emailAdmin);
	}
	
	@PostMapping("/addtemplate")
	public Template addtemplatedata(@RequestBody Template template)
	{
		return templateService.addtemplate(template);
	}
	
	@GetMapping("/getemailadmin")
	public List<EmailAdmin> getemaildata()
	{
		return emailAdminService.getAll();
	}
	
	@GetMapping("/gettemplate")
	public List<Template> gettemplatedata()
	{
		return templateService.getAll();
	}
}
