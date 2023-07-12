package com.student.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.student.model.Student;

@Repository
public interface StudentRepository extends MongoRepository<Student, Long>{

	Student findByStudentId(long studentId);
	void deleteByStudentId(long studentId);
	Student findByStudentEmail(String studentEmail);
}
