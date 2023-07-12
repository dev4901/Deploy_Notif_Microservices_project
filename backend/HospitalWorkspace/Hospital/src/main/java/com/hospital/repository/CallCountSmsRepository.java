package com.hospital.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospital.model.CallCountSms;

@Repository
public interface CallCountSmsRepository extends MongoRepository<CallCountSms, Long>{

}
