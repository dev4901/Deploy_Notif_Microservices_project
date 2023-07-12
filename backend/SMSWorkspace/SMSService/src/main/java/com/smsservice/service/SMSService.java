package com.smsservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;

@Service
public class SMSService {
	
	
	
	public ResponseEntity<String> sendSMS(String smsto, String subject, String body,String account_sid,String auth_token,String smsfrom) {
		
		Twilio.init(account_sid, auth_token);
		Message message = Message.creator(
				new com.twilio.type.PhoneNumber(smsto), 
				new com.twilio.type.PhoneNumber(smsfrom),
				(subject+",\n"+body)).create();
		System.out.println(message.getBody());
		return new ResponseEntity<String>("Message sent successfully", HttpStatus.OK);
	}
}
