package com.bank.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bank.model.SMSAdmin;
@Repository
public interface SMSAdminRepository extends MongoRepository<SMSAdmin, String>{

}
