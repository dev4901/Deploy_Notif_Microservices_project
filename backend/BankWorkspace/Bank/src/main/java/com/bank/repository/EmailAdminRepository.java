package com.bank.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bank.model.EmailAdmin;
@Repository
public interface EmailAdminRepository extends MongoRepository<EmailAdmin, String>{

}
