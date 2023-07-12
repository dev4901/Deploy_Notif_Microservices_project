package com.bank.services;

import java.util.List;

import com.bank.model.EmailAdmin;

public interface EmailAdminService {

	public List<EmailAdmin> getEmailAdmin();
	
	public EmailAdmin addEmailAdmin(EmailAdmin emailAdmin);
}
