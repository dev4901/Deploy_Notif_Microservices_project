package com.authenticate.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.authenticate.model.EmailAdmin;
import com.authenticate.repository.EmailAdminRepository;

@Service
public class EmailAdminServiceImpl implements EmailAdminService{

	@Autowired
	EmailAdminRepository emailAdminRepository;

	@Override
	public EmailAdmin addemail(EmailAdmin emailAdmin) {
		// TODO Auto-generated method stub
		return emailAdminRepository.save(emailAdmin);
	}

	@Override
	public List<EmailAdmin> getAll() {
		// TODO Auto-generated method stub
		return emailAdminRepository.findAll();
	}
}
