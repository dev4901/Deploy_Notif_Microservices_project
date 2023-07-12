package com.bank.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("CallCountPn")
public class CallCountPn {

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
		return "CallCountPn [success=" + success + ", failure=" + failure + "]";
	}
	public CallCountPn(long success, long failure) {
		super();
		this.success = success;
		this.failure = failure;
	}
	public CallCountPn() {
		super();
	}
	
	
}
