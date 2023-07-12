package com.emailservice.service;


import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.emailservice.Repository.ConfigMailRepository;
import com.emailservice.model.ConfigMail;

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {
	
//	@Value("${mail.host}")
//	private String host;
//	
//	@Value("${mail.port}")
//	private String port;
//	
//	@Value("${mail.smtpSslEnable}")
//	private String smtpSslEnable;
//	
//	@Value("${mail.smtpSocketFactoryPort}")
//	private String smtpSocketFactoryPort;
//	
//	@Value("${mail.smtpAuth}")
//	private String smtpAuth;
//	
//	@Value("${mail.smtpStarttlsEnable}")
//	private String smtpStarttlsEnable;
	
	@Autowired
	ConfigMailRepository configMailRepo;
	
	public void sendmail(String to, String subject, String body, String from, String password)
			throws Exception {
		
//		System.out.println(host+port+smtpSslEnable+smtpSocketFactoryPort+smtpAuth+smtpStarttlsEnable);
		
		ConfigMail cm =configMailRepo.findAll().get(0);
		
		Properties properties = System.getProperties();
		properties.put("mail.smtp.host",cm.getHost());
		properties.put("mail.smtp.ssl.enable",cm.getSmtpSslEnable());
		properties.put("mail.smtp.auth", cm.getSmtpAuth());
		properties.put("mail.smtp.port", cm.getPort());
		properties.put("mail.smtp.starttls.enable", cm.getSmtpStarttlsEnable());
		properties.put("mail.smtp.socketFactory.port",cm.getSmtpSocketFactoryPort());

		Session session = Session.getInstance(properties,new Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				System.out.println(password);
				return new PasswordAuthentication(from, password);
			}
		});

		session.setDebug(true);

		MimeMessage m = new MimeMessage(session);
//		SimpleMailMessage m= new SimpleMailMessage();
		m.setFrom(from);
		m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
//		m.setTo(to);
		m.setSubject(subject);
		m.setText(body);
		Transport.send(m);
//		jmSender.send(m);
		System.out.println("Sent.....");
	}
	
	public ConfigMail addConfig(ConfigMail cm)
	{
		return configMailRepo.save(cm);
	}

}
