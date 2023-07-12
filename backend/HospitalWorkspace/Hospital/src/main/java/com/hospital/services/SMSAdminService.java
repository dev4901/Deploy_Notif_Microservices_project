package com.hospital.services;

import java.util.List;

import com.hospital.model.SMSAdmin;

public interface SMSAdminService {

	public SMSAdmin addSMSAdmin(SMSAdmin smsAdmin);
	
	public List<SMSAdmin> getSMSAdmins();
}
