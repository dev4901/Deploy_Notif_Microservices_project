package com.emailservice.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.emailservice.model.ConfigMail;

public interface ConfigMailRepository extends MongoRepository<ConfigMail, String>{

}
