package com.bank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.model.SMSAdmin;
import com.bank.repository.SMSAdminRepository;

@Service
public class SMSAdminServiceImpl implements SMSAdminService{

	@Autowired
	SMSAdminRepository smsAdminRepository;
	
	@Override
	public List<SMSAdmin> getSMSAdmin() {
		// TODO Auto-generated method stub
		return smsAdminRepository.findAll();
	}

	@Override
	public SMSAdmin addSMSAdmin(SMSAdmin smsAdmin) {
		// TODO Auto-generated method stub
		return smsAdminRepository.save(smsAdmin);
	}

}
