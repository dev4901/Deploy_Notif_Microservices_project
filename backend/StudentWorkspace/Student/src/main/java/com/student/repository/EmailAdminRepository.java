package com.student.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.student.model.EmailAdmin;
@Repository
public interface EmailAdminRepository extends MongoRepository<EmailAdmin, String>{

}
