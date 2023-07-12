package com.hospital.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.hospital.filter.JwtFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	
	@Autowired
	JwtFilter jwtFilter;
		
	@Bean 
	public SecurityFilterChain  securityFilterChain(HttpSecurity http) throws Exception
	{
		return http.csrf().disable().authorizeHttpRequests().requestMatchers("/hospital/**").permitAll().and()
//				.formLogin().and().build();
//				.sessionManagement()
//				.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//				.and()
				.addFilterBefore(jwtFilter,BasicAuthenticationFilter.class).build();	
	}

}
