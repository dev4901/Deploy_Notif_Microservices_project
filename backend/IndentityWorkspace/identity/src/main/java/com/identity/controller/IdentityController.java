package com.identity.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.identity.model.Authrequest;
import com.identity.model.Identity;
import com.identity.service.IdentityService;
import com.identity.utils.JwtUtil;

@RestController
@RequestMapping("/identity")
public class IdentityController {
	
	@Autowired
	IdentityService identityService;
	
	
	@Autowired
	JwtUtil jwtUtil;
	
	@GetMapping("/home")
	public String getHome()
	{
		return "Welcome to identity service....";
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<String> checkData(@RequestBody Authrequest authrequest) throws Exception
	{
		System.out.println(authrequest);
		
//			Authentication authentication= authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmailId(), authRequest.getPassword()));
			boolean result=identityService.checkEmailIdPassword(authrequest.getEmailId(), authrequest.getPassword());
			System.out.println(result);
			if(!result)
			{
				return new ResponseEntity<String>("Invaild EmailID or Password....", HttpStatus.BAD_REQUEST);
				
			}
		else
		{
			return new ResponseEntity<String>(jwtUtil.generateToken(authrequest.getEmailId()), HttpStatus.OK);
		}
	}
	
	@PostMapping("/signup")
	public Boolean SignUpUser(@RequestBody Identity identity)
	{
		
		return identityService.addUser(identity); 
	}
	
	@GetMapping("/findByEmail/{emailId}")
	public ResponseEntity<Boolean> findbyEmail(@PathVariable String emailId)
	{
		boolean result= identityService.findByEmail(emailId);
		if(result)
		{
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<Boolean>(false,HttpStatus.OK);
		}
	}
	
	@PostMapping("/changepassword")
	public ResponseEntity<Boolean> changePassword(@RequestBody Map<String,String> userData)
	{
		Identity identity=identityService.findById(userData.get("emailId"));
		identity.setPassword(userData.get("password"));
		boolean result=identityService.addUser(identity); 
		if(result)
		{
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<Boolean>(false,HttpStatus.OK);
		}
	}

}
