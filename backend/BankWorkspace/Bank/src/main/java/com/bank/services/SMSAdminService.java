package com.bank.services;

import java.util.List;

import com.bank.model.SMSAdmin;

public interface SMSAdminService {

	public List<SMSAdmin> getSMSAdmin();
	
	public SMSAdmin addSMSAdmin(SMSAdmin smsAdmin);
}
