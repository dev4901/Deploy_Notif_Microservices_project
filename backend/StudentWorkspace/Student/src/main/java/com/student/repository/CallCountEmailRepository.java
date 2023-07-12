package com.student.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.student.model.CallCountEmail;

@Repository
public interface CallCountEmailRepository extends MongoRepository<CallCountEmail, Long>{

}
