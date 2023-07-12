package com.authenticate.model;

public class Authrequest {

	private String emailId;
	private String password;
	public Authrequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Authrequest(String emailId, String password) {
		super();
		this.emailId = emailId;
		this.password = password;
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
	@Override
	public String toString() {
		return "Authrequest [emailId=" + emailId + ", password=" + password + "]";
	}
	
}
