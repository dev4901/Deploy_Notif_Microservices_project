package com.bank.services;

import java.util.List;
import com.bank.model.Customer;

public interface CustomerService {

	public List<Customer> getAllCustomer();
	
	public Customer addCustomer(Customer customer);
	
	public Customer getCustomerByToken(String token);
	
	public Customer updateCustomer(Customer customer);
	
	public long deleteCustomerById(long customerId);

	public Customer findCustomerById(long customerId);
	
}
