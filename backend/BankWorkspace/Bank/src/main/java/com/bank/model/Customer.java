package com.bank.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Customer")
public class Customer {
	@Id
	private long customerId;
	private String customerName;
	private String cardNo;
	private String expairyDate;
	private String email;
	private String contactNo;
	private String bankName;
	private String appToken;
	
	public Customer() {
		super();
	}

	
	public String getAppToken() {
		return appToken;
	}


	public void setAppToken(String appToken) {
		this.appToken = appToken;
	}


	public long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCardNo() {
		return cardNo;
	}

	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}

	public String getExpairyDate() {
		return expairyDate;
	}

	public void setExpairyDate(String expairyDate) {
		this.expairyDate = expairyDate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}


	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", customerName=" + customerName + ", cardNo=" + cardNo
				+ ", expairyDate=" + expairyDate + ", email=" + email + ", contactNo=" + contactNo + ", bankName="
				+ bankName + ", appToken=" + appToken + "]";
	}


	public Customer(long customerId, String customerName, String cardNo, String expairyDate, String email,
			String contactNo, String bankName, String appToken) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.cardNo = cardNo;
		this.expairyDate = expairyDate;
		this.email = email;
		this.contactNo = contactNo;
		this.bankName = bankName;
		this.appToken = appToken;
	}


	public Customer(long customerId, String customerName, String cardNo, String expairyDate, String bankName,
			String appToken) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.cardNo = cardNo;
		this.expairyDate = expairyDate;
		this.bankName = bankName;
		this.appToken = appToken;
	}
	

	
	
		
	
}
