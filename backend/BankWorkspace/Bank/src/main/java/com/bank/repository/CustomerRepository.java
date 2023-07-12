package com.bank.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bank.model.Customer;

@Repository
public interface CustomerRepository extends MongoRepository<Customer,Long>{
  Customer findByAppToken(String appToken);
}
