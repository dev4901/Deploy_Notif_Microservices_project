package com.identity.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.identity.model.Identity;
import com.identity.repository.IdentityRepository;

@Service
public class IdentityServiceImpl implements IdentityService{
	
	@Autowired
	IdentityRepository identityRepository;
	
	@Override
	public Boolean addUser(Identity identity) {
		// TODO Auto-generated method stub
		Identity i=identityRepository.save(identity);
		if(i.equals(null))
		{
			return false;
		}
		else
		{
			return true;
		}
	}

	@Override
	public Boolean checkEmailIdPassword(String emailId, String password) {
		// TODO Auto-generated method stub
		System.out.println(emailId+password);
		Identity i=identityRepository.findById(emailId).get();
		System.out.println(i);
		if(i.getPassword().equals(password))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	@Override
	public Boolean findByEmail(String emailId) {
		// TODO Auto-generated method stub
		Optional<Identity> i= identityRepository.findById(emailId);
		if(i.isEmpty())
		{
			return false;
		}
		else
		{
			return true;
		}
	}

	@Override
	public Boolean changePassword(String emailId, String password) {
		// TODO Auto-generated method stub
		Optional<Identity> i=identityRepository.findById(emailId);
		if(i.isEmpty())
		{
			return false;
		}
		else
		{
			i.get().setPassword(password);
			identityRepository.save(i.get());
			return true;
		}
	}

	@Override
	public Identity findById(String emailId) {
		// TODO Auto-generated method stub
		return identityRepository.findById(emailId).get();
	}

}
