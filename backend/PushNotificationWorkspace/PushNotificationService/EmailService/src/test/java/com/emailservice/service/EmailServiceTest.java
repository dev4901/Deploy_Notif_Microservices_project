package com.emailservice.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.emailservice.Repository.ConfigMailRepository;
import com.emailservice.model.ConfigMail;

class EmailServiceTest {
	@Autowired
	EmailService emailService;
	
	@MockBean
	ConfigMailRepository configMailRepository;
	
	ConfigMail configMail;

	@BeforeEach
	void setUp() throws Exception {
		configMail= new ConfigMail("smtp.gmail.com", "465", "true", "465", "true", "true");
	}

	@AfterEach
	void tearDown() throws Exception {
	}
	
	
//	@Test
//	void testSendMail() {
//		ConfigMailRepository configMailRepository1=mock(ConfigMailRepository.class);
//		configMailRepository1.save(configMail);
//		when(configMailRepository1.findAll().get(0)).thenReturn(configMail);
//		
//	}

}
