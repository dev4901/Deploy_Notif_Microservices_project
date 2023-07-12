package com.bank.services;

import com.bank.model.CallCountPn;

public interface CallCountPnService {

	public CallCountPn updateSuccessCount();
	public CallCountPn updateFailureCount();
	public CallCountPn getCallCount();
	public CallCountPn SetInitialValue();
}
