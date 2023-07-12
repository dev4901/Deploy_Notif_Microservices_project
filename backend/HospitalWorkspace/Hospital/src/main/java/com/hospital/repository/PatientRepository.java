package com.hospital.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospital.model.Patient;

@Repository
public interface PatientRepository extends MongoRepository<Patient, Long> {

	Patient findByContactNo(String contactNo);
}
