package com.bank.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.model.CallCountPn;
import com.bank.repository.CallCountPnRepository;

@Service
public class CallCountPnServiceImpl implements CallCountPnService{

	@Autowired
	CallCountPnRepository callCountPnRepository;

	@Override
	public CallCountPn updateSuccessCount() {
		// TODO Auto-generated method stub
		CallCountPn ccp =callCountPnRepository.findAll().get(0);
		callCountPnRepository.deleteAll();
		ccp.setSuccess(ccp.getSuccess()+1);
		return callCountPnRepository.save(ccp);
	}

	@Override
	public CallCountPn updateFailureCount() {
		// TODO Auto-generated method stub
		CallCountPn ccp =callCountPnRepository.findAll().get(0);
		callCountPnRepository.deleteAll();
		ccp.setFailure(ccp.getFailure()+1);
		return callCountPnRepository.save(ccp);
	}

	@Override
	public CallCountPn getCallCount() {
		// TODO Auto-generated method stub
		return callCountPnRepository.findAll().get(0);
	}

	@Override
	public CallCountPn SetInitialValue() {
		// TODO Auto-generated method stub
		CallCountPn ccp=new CallCountPn(0,0);
		return callCountPnRepository.save(ccp);
	}
}
