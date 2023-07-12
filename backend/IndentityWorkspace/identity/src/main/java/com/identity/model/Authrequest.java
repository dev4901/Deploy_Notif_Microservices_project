package com.identity.model;

public class Authrequest {
	private String emailId;
	private String password;
	public Authrequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Authrequest(String emailId, String password) {
		super();
		this.emailId = emailId;
		this.password = password;
	}
	@Override
	public String toString() {
		return "AuthRequest [emailId=" + emailId + ", password=" + password + "]";
	}
	
}
