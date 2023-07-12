package com.bank.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bank.model.CallCountPn;

@Repository
public interface CallCountPnRepository extends MongoRepository<CallCountPn,Long>{

}
