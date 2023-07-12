package com.authenticate.service;

import java.util.List;

import com.authenticate.model.EmailAdmin;

public interface EmailAdminService {

	public EmailAdmin addemail(EmailAdmin emailAdmin);
	
	public List<EmailAdmin> getAll();
}
