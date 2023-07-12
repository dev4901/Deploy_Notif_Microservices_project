package com.identity.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Identities")
public class Identity {
	
	@Id
	private String emailId;
	private String password;
	private String fName;
	private String lName;
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
	public Identity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Identity(String emailId, String password, String fName, String lName) {
		super();
		this.emailId = emailId;
		this.password = password;
		this.fName = fName;
		this.lName = lName;
	}
	@Override
	public String toString() {
		return "Identity [emailId=" + emailId + ", password=" + password + ", fName=" + fName + ", lName=" + lName
				+ "]";
	}
	public Identity(String emailId, String password) {
		super();
		this.emailId = emailId;
		this.password = password;
	}
	
}
