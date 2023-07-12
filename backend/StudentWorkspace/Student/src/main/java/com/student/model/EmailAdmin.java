package com.student.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("EmailAdmin")
public class EmailAdmin {
	private String mailFrom;
	private String password;

	public String getMailFrom() {
		return mailFrom;
	}

	public void setMailFrom(String mailFrom) {
		this.mailFrom = mailFrom;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public EmailAdmin(String mailFrom, String password) {
		super();
		this.mailFrom = mailFrom;
		this.password = password;
	}

	public EmailAdmin() {
		super();
	}

	@Override
	public String toString() {
		return "EmailAdmin [mailFrom=" + mailFrom + ", password=" + password + "]";
	}

}
