package com.student.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("CallCountEmail")
public class CallCountEmail {
	private long success;
	private long failure;
	public long getSuccess() {
		return success;
	}
	public void setSuccess(long success) {
		this.success = success;
	}
	public long getFailure() {
		return failure;
	}
	public void setFailure(long failure) {
		this.failure = failure;
	}
	@Override
	public String toString() {
		return "CallCountEmail [success=" + success + ", failure=" + failure + "]";
	}
	
	public CallCountEmail() {
		super();
	}
	public CallCountEmail(long success, long failure) {
		super();
		this.success = success;
		this.failure = failure;
	}
	

}
