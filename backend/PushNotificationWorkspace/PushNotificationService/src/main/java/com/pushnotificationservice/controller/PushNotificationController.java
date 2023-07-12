package com.pushnotificationservice.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pushnotificationservice.Utils.JwtUtil;
import com.pushnotificationservice.service.PushNotificationService;

@RestController
@RequestMapping("/pushnotification")
public class PushNotificationController implements ErrorController{

	@Autowired
	PushNotificationService pushnotificationservice;
	
	@Autowired
	JwtUtil jwtUtil;

	@GetMapping("/home")
	public String getHome(@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		System.out.println("welcome");
		return "Welcome to push notification service....";
	}
	
	@PostMapping("/sendnotification")
	public ResponseEntity<String> sendNotification(@RequestBody Map<String, Object> pnData,@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		String title = (String) pnData.get("title");
		String body = (String) pnData.get("body");
		String fcm_api = (String) pnData.get("fcm_api");
		String server_key = (String) pnData.get("server_key");
		String app_token = (String) pnData.get("app_token");

		try {

			pushnotificationservice.sendPushNotification(title, body, fcm_api, server_key, app_token);
			return ResponseEntity.status(HttpStatus.OK).body("Success ! Notification sent...");

		} catch (Exception e) {

			// TODO Auto-generated catch block

			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(" Error ! Failed to sent Due to "+e.getMessage());

		}

	}
	
	@RequestMapping("/error")
	public String showMSg() {
		return "<center><h1 style=\"color:red;\">Unauthorized Access!</h1></center>";
	}

}
