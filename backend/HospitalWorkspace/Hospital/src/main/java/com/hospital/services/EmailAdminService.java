package com.hospital.services;

import java.util.List;

import com.hospital.model.EmailAdmin;

public interface EmailAdminService {

	public EmailAdmin addEmailAdmin(EmailAdmin emailAdmin);

	public List<EmailAdmin> getEmailAdmins();
}
