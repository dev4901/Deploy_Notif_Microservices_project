package com.student.service;

import com.student.model.CallCountEmail;

public interface CallCountEmailService {

	public CallCountEmail updateSuccessCount();
	public CallCountEmail updateFailureCount();
	public CallCountEmail getCallCount();
	public CallCountEmail SetInitialValue();
}
