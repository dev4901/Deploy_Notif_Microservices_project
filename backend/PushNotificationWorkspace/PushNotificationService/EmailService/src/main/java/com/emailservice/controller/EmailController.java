package com.emailservice.controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emailservice.Utils.JwtUtils;
import com.emailservice.model.ConfigMail;
import com.emailservice.service.EmailService;

@RestController
@RequestMapping("/email")
@CrossOrigin("http://localhost:3000/")
public class EmailController implements ErrorController{

	
	@Autowired
	EmailService service;
	
	@Autowired
	JwtUtils jwtUtils;
	
	@GetMapping("/home")
	public String getHome(@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		System.out.println("welcome");	
		return "Welcome to email service";
	}
	
	@PostMapping("/addconfig")
	public ConfigMail addconfig(@RequestBody ConfigMail cm,@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		return service.addConfig(cm);
	}
	
	
	@PostMapping("/sendmail")
	public ResponseEntity<String> sendMail(@RequestBody Map<String, Object> emailData,@RequestHeader("jwttoken") String token) {
		jwtUtils.validateToken(token);
		String to = (String) emailData.get("to");
		String subject = (String) emailData.get("subject");
		String body = (String) emailData.get("body");
		String from = (String) emailData.get("from");
		String password = (String) emailData.get("password");
		
		try {
			service.sendmail(to, subject, body,from,password);
			return ResponseEntity.status(HttpStatus.OK).body("Email sent "+to+" successfully...");
		}
		catch(Exception exc)
		{
			exc.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Failed to sent "+to+"... Due to "+exc.getMessage());
		}
		
		
	}
	
	@RequestMapping("/error")
	public String showMSg() {
		return "<center><h1 style=\"color:red;\">Unauthorized Access!</h1></center>";
	}
	
}


