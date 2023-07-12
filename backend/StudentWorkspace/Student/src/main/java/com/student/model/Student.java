package com.student.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("student")
public class Student {
	@Id
	private long studentId;
	private String studentName;
	private int studentMark;
	private String studentEmail;
	private String studentContact;
	private String studentMentorName;
	private String studentUniversity;

	public Student() {
		super();
	}

	public Student(long studentId, String studentName, int studentMark, String studentEmail, String studentContact,
			String studentMentorName, String studentUniversity) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentMark = studentMark;
		this.studentEmail = studentEmail;
		this.studentContact = studentContact;
		this.studentMentorName = studentMentorName;
		this.studentUniversity = studentUniversity;
	}


	public Student(long studentId, String studentName, int studentMark, String studentEmail, String studentMentorName,
			String studentUniversity) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentMark = studentMark;
		this.studentEmail = studentEmail;
		this.studentMentorName = studentMentorName;
		this.studentUniversity = studentUniversity;
	}

	public long getStudentId() {
		return studentId;
	}

	public void setStudentId(long studentId) {
		this.studentId = studentId;
	}

	public String getStudentMentorName() {
		return studentMentorName;
	}

	public void setStudentMentorName(String studentMentorName) {
		this.studentMentorName = studentMentorName;
	}

	public String getStudentUniversity() {
		return studentUniversity;
	}

	public void setStudentUniversity(String studentUniversity) {
		this.studentUniversity = studentUniversity;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public int getStudentMark() {
		return studentMark;
	}

	public void setStudentMark(int studentMark) {
		this.studentMark = studentMark;
	}

	public String getStudentEmail() {
		return studentEmail;
	}

	public void setStudentEmail(String studentEmail) {
		this.studentEmail = studentEmail;
	}

	public String getStudentContact() {
		return studentContact;
	}

	public void setStudentContact(String studentContact) {
		this.studentContact = studentContact;
	}

	@Override
	public String toString() {
		return "Student [studentId=" + studentId + ", studentName=" + studentName + ", studentMark=" + studentMark
				+ ", studentEmail=" + studentEmail + ", studentContact=" + studentContact + ", studentMentorName="
				+ studentMentorName + ", studentUniversity=" + studentUniversity + "]";
	}

	

}
