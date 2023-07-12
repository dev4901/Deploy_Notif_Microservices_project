package com.identity.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.identity.model.Identity;
import com.identity.repository.IdentityRepository;
@Component
public class CustomeUserDetails implements UserDetailsService {

	@Autowired
	IdentityRepository identityRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Optional<Identity> i = identityRepository.findById(username);
		System.out.println(i);
		if(i.isPresent()) {
			return new CustomeUserDetailsInfo(i.get());
		}
		else {
			throw new UsernameNotFoundException("User Not Found....");
		}
	}

}
