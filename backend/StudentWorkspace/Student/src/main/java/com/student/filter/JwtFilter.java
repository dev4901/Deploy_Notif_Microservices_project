package com.student.filter;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.student.utils.JwtUtils;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter{

	@Autowired
	JwtUtils jwtUtil;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException,IOException {
		// TODO Auto-generated method stub
		
		String header=request.getHeader("Authorization");
		String token=null;
		String username=null;
		if(header!=null && header.startsWith("Bearer "))
		{
			token=header.substring(7);
			jwtUtil.validateToken(token);
		}
		filterChain.doFilter(request, response);
		
	}

}
