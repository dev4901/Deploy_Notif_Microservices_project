package com.hospital.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.SMSAdmin;
import com.hospital.repository.SMSAdminRepository;
@Service
public class SMSAdminServiceImpl implements SMSAdminService{

	@Autowired
	SMSAdminRepository smsAdminRepository;
	
	@Override
	public SMSAdmin addSMSAdmin(SMSAdmin smsAdmin) {
		// TODO Auto-generated method stub
		return smsAdminRepository.save(smsAdmin);
	}

	@Override
	public List<SMSAdmin> getSMSAdmins() {
		// TODO Auto-generated method stub
		return smsAdminRepository.findAll();
	}

}
