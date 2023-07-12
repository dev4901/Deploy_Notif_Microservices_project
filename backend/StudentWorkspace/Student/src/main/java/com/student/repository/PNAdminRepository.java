package com.student.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.student.model.PNAdmin;

public interface PNAdminRepository extends MongoRepository<PNAdmin, String>{

}
