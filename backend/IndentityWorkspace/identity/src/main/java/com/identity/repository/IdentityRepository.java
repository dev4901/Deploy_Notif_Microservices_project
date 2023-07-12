package com.identity.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.identity.model.Identity;

@Repository
public interface IdentityRepository extends MongoRepository<Identity, String>{

}
