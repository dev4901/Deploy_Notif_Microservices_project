package com.pushnotificationservice.service;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

@Service
public class PushNotificationService {

	public ResponseEntity<String> sendPushNotification(String title, String body,String fcm_api,String server_key,String app_token) throws Exception {


		HttpClient client = HttpClientBuilder.create().build();
		HttpPost post = new HttpPost(fcm_api);

		post.setHeader(HttpHeaders.CONTENT_TYPE, "application/json");
		post.setHeader(HttpHeaders.AUTHORIZATION, "key=" + server_key);

		String payload = "{" + 
				"\"to\":\"" + app_token + "\",\r\n" + 
				"  \"notification\":{\r\n" + 
				"    \"title\":\"" + title + "\",\r\n" + 
				"    \"body\":\"" + body + "\"\r\n" + 
				"  }\r\n" + 
				"}";

		HttpEntity entity = new StringEntity(payload, ContentType.APPLICATION_JSON);
		post.setEntity(entity);
		HttpResponse response = client.execute(post);

		System.out.println(EntityUtils.toString(response.getEntity()));
		return new ResponseEntity<String>("Notification sent successfully", HttpStatus.OK);
	}
}
