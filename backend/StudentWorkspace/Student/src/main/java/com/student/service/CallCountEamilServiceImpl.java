package com.student.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.model.CallCountEmail;
import com.student.repository.CallCountEmailRepository;
@Service
public class CallCountEamilServiceImpl implements CallCountEmailService{

	@Autowired
	CallCountEmailRepository callCountEmailRepository;
	
	@Override
	public CallCountEmail updateSuccessCount() {
		// TODO Auto-generated method stub
		CallCountEmail cce =callCountEmailRepository.findAll().get(0);
		callCountEmailRepository.deleteAll();
		cce.setSuccess(cce.getSuccess()+1);
		return callCountEmailRepository.save(cce);
	}

	@Override
	public CallCountEmail updateFailureCount() {
		// TODO Auto-generated method stub
		CallCountEmail cce =callCountEmailRepository.findAll().get(0);
		callCountEmailRepository.deleteAll();
		cce.setFailure(cce.getFailure()+1);
		return callCountEmailRepository.save(cce);
	
	}

	@Override
	public CallCountEmail getCallCount() {
		// TODO Auto-generated method stub
		return callCountEmailRepository.findAll().get(0);
	}

	@Override
	public CallCountEmail SetInitialValue() {
		// TODO Auto-generated method stub
		CallCountEmail cce=new CallCountEmail(0,0);
		return callCountEmailRepository.save(cce);
	}

}
