package com.student.service;

import java.util.List;

import com.student.model.EmailAdmin;

public interface EmailAdminservice {

	public EmailAdmin addemail(EmailAdmin emailAdmin);
	
	public List<EmailAdmin> getAll();
}
