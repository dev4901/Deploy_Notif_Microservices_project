package com.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.model.SMSAdmin;
import com.student.repository.SMSAdminRepository;
@Service
public class SMSAdminServiceImpl implements SMSAdminservice{

	@Autowired
	SMSAdminRepository smsrepo;
	
	@Override
	public SMSAdmin addsms(SMSAdmin smsAdmin) {
		// TODO Auto-generated method stub
		return smsrepo.save(smsAdmin);
	}

	@Override
	public List<SMSAdmin> getAll() {
		// TODO Auto-generated method stub
		return smsrepo.findAll();
	}

}
