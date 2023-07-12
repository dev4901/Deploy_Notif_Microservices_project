package com.hospital.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospital.model.PNAdmin;

@Repository
public interface PNAdminRepository extends MongoRepository<PNAdmin, String>{

}
