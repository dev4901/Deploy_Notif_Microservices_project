package com.student.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.student.model.SMSAdmin;

@Repository
public interface SMSAdminRepository extends MongoRepository<SMSAdmin, String>{

}
