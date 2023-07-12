package com.hospital.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospital.model.EmailAdmin;

@Repository
public interface EmailAdminRepository extends MongoRepository<EmailAdmin, String>{

}
