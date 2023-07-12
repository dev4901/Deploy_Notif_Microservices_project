package com.student.service;

import java.util.List;

import com.student.model.Student;

public interface StudentService {
	
	//to get all students 
	public List<Student> getStudents();
	
	//to add student
	public Student addStudent(Student student);
	
	public Student getStudentById(long studentId);
	
	public Student updateStudent(Student student);
	
	public long deleteStudentById(long studentId);
	
	public Student findStudentByEmail(String studentEmail);
	
}
