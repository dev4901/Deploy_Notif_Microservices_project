package com.hospital.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.CallCountSms;
import com.hospital.repository.CallCountSmsRepository;
@Service
public class CallCountSmsServiceImpl implements CallCountSmsService{

	@Autowired
	CallCountSmsRepository callCountSmsRepository;
	
	@Override
	public CallCountSms updateSuccessCount() {
		// TODO Auto-generated method stub
		CallCountSms ccs =callCountSmsRepository.findAll().get(0);
		callCountSmsRepository.deleteAll();
		ccs.setSuccess(ccs.getSuccess()+1);
		return callCountSmsRepository.save(ccs);
	}

	@Override
	public CallCountSms updateFailureCount() {
		// TODO Auto-generated method stub
		CallCountSms ccs =callCountSmsRepository.findAll().get(0);
		callCountSmsRepository.deleteAll();
		ccs.setFailure(ccs.getFailure()+1);
		return callCountSmsRepository.save(ccs);
	}

	@Override
	public CallCountSms getCallCount() {
		// TODO Auto-generated method stub
		return callCountSmsRepository.findAll().get(0);
	}

	@Override
	public CallCountSms SetInitialValue() {
		// TODO Auto-generated method stub
		CallCountSms ccs=new CallCountSms(0,0);
		return callCountSmsRepository.save(ccs);
	}

}
