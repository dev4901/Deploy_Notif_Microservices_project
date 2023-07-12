package com.bank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.model.EmailAdmin;
import com.bank.repository.EmailAdminRepository;

@Service
public class EmailAdminServiceImpl implements EmailAdminService{

	@Autowired
	EmailAdminRepository emailAdminRepository;
	
	@Override
	public List<EmailAdmin> getEmailAdmin() {
		// TODO Auto-generated method stub
		return emailAdminRepository.findAll();
	}

	@Override
	public EmailAdmin addEmailAdmin(EmailAdmin emailAdmin) {
		// TODO Auto-generated method stub
		return emailAdminRepository.save(emailAdmin);
	}

}
