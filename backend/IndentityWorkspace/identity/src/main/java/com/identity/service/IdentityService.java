package com.identity.service;

import com.identity.model.Identity;

public interface IdentityService {

	public Boolean addUser(Identity identity);
	
	public Boolean checkEmailIdPassword(String emailId,String password);
	
	public Boolean findByEmail(String emailId);
	
	public Identity findById(String emailId);
	
	public Boolean changePassword(String emailId,String password);
}
