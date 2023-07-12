package com.student;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@CrossOrigin("http://localhost:3000/")
public class StudentApplication {
	
	@Bean
	public RestTemplate restTemplate()
	{
		return new RestTemplate();
	}

	public static void main(String[] args) {
		SpringApplication.run(StudentApplication.class, args);
	}
	

}
