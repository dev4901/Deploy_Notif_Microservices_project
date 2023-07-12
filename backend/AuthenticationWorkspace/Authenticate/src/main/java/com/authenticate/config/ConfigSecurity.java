package com.authenticate.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.client.RestTemplate;

import com.authenticate.filter.JwtFilter;

@Configuration
@EnableWebSecurity
public class ConfigSecurity {
	
	@Autowired
	JwtFilter jwtFilter;
	
	@Bean
	public RestTemplate restTemplate()
	{
		return new RestTemplate();
	}
		
	@Bean 
	public SecurityFilterChain  securityFilterChain(HttpSecurity http) throws Exception
	{
		return http.csrf().disable().authorizeHttpRequests().requestMatchers("/auth/**")
//				requestMatchers("/signup","/authenticate","/findByEmail","/sendmailbyid","/home").
				.permitAll()
//				.and().authorizeHttpRequests().requestMatchers("/addtemplate","/getemailadmin","/gettemplate","/try").authenticated().and().formLogin()
				.and().build();
//				.sessionManagement()
//				.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//				.and()
//				.addFilterBefore(jwtFilter,BasicAuthenticationFilter.class).build();	
	}
	
}
