package com.hospital.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("CallCountSms")
public class CallCountSms {

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
		return "CallCountSms [success=" + success + ", failure=" + failure + "]";
	}
	public CallCountSms(long success, long failure) {
		super();
		this.success = success;
		this.failure = failure;
	}
	public CallCountSms() {
		super();
	}
	
	
}
