package com.bank.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bank.model.Template;
@Repository
public interface TemplateRepository extends MongoRepository<Template, String>{

}
