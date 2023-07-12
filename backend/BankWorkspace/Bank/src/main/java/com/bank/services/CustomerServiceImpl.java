package com.bank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.model.Customer;
import com.bank.repository.CustomerRepository;


@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	CustomerRepository customerRepository;
	
	@Override
	public List<Customer> getAllCustomer() {
		// TODO Auto-generated method stub
		return customerRepository.findAll();
	}

	@Override
	public Customer addCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return customerRepository.save(customer);
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return customerRepository.save(customer);
	}

	@Override
	public long deleteCustomerById(long customerId) {
		// TODO Auto-generated method stub
		customerRepository.deleteById(customerId);
		return customerId;
	}

	@Override
	public Customer findCustomerById(long customerId) {
		// TODO Auto-generated method stub
		return customerRepository.findById(customerId).get();
	}

	@Override
	public Customer getCustomerByToken(String token) {
		// TODO Auto-generated method stub
		return customerRepository.findByAppToken(token);
	}


	
	
}
