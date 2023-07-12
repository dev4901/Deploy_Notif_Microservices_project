package com.student.service;

import java.util.List;

import com.student.model.SMSAdmin;

public interface SMSAdminservice {

	public SMSAdmin addsms(SMSAdmin smsAdmin);
	
	public List<SMSAdmin> getAll();
}
