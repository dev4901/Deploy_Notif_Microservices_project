package com.hospital.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.EmailAdmin;
import com.hospital.repository.EmailAdminRepository;
@Service
public class EmailAdminServiceImpl implements EmailAdminService{

	@Autowired
	EmailAdminRepository emailAdminRepository;
	
	@Override
	public EmailAdmin addEmailAdmin(EmailAdmin emailAdmin) {
		// TODO Auto-generated method stub
		return emailAdminRepository.save(emailAdmin);
	}

	@Override
	public List<EmailAdmin> getEmailAdmins() {
		// TODO Auto-generated method stub
		return emailAdminRepository.findAll();
	}

}
