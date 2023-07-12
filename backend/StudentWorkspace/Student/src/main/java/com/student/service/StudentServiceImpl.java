package com.student.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.model.Student;
import com.student.repository.StudentRepository;
@Service
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	StudentRepository studentRepo;
	
	@Override
	public List<Student> getStudents() {
		// TODO Auto-generated method stub
		return studentRepo.findAll();
	}
	@Override
	public Student addStudent(Student student) {
		// TODO Auto-generated method stub
		return studentRepo.save(student);
	}
	@Override
	public Student getStudentById(long studentId) {
		// TODO Auto-generated method stub
		 System.out.println("ot"+studentRepo.findById(studentId));
		 return studentRepo.findById(studentId).get();
	}
	@Override
	public Student updateStudent(Student student) {
		// TODO Auto-generated method stub
		return studentRepo.save(student);
	}
	@Override
	public long deleteStudentById(long studentId) {
		// TODO Auto-generated method stub
		studentRepo.deleteById(studentId);
		return studentId;
	}
	@Override
	public Student findStudentByEmail(String studentEmail) {
		// TODO Auto-generated method stub
		return studentRepo.findByStudentEmail(studentEmail);
	}
}
