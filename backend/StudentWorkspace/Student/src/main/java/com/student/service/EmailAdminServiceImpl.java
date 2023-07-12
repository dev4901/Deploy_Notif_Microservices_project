package com.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.model.EmailAdmin;
import com.student.repository.EmailAdminRepository;

@Service
public class EmailAdminServiceImpl implements EmailAdminservice{

	@Autowired
	EmailAdminRepository emailrepo;
	
	@Override
	public EmailAdmin addemail(EmailAdmin emailAdmin) {
		// TODO Auto-generated method stub
		return emailrepo.save(emailAdmin);
	}

	@Override
	public List<EmailAdmin> getAll() {
		// TODO Auto-generated method stub
		return emailrepo.findAll();
	}

}
