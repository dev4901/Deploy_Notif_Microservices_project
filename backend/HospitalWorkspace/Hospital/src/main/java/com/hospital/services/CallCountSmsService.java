package com.hospital.services;

import com.hospital.model.CallCountSms;

public interface CallCountSmsService {

	public CallCountSms updateSuccessCount();
	public CallCountSms updateFailureCount();
	public CallCountSms getCallCount();
	public CallCountSms SetInitialValue();
}
