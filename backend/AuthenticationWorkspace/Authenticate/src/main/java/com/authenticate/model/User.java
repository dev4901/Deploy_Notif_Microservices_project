package com.authenticate.model;

public class User {
	
	private String emailId;
	private String password;
	private String fName;
	private String lName;
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(String emailId, String password, String fName, String lName) {
		super();
		this.emailId = emailId;
		this.password = password;
		this.fName = fName;
		this.lName = lName;
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
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	@Override
	public String toString() {
		return "User [emailId=" + emailId + ", password=" + password + ", fName=" + fName + ", lName=" + lName + "]";
	}
	
	

}
