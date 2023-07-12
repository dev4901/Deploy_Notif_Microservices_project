package com.authenticate.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.authenticate.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String>{
  User findByEmailIdAndPassword(String emailid,String password); 
}
