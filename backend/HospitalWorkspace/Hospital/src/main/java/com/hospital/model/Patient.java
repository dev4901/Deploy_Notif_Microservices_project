package com.hospital.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Patient")
public class Patient {
	@Id
	private long patientId;
	private String patientName;
	private String doctorName;
	private String appointmentTime;
	private String appointmentDate;
	private String hospitalName;
	private String email;
	private String contactNo;

	public Patient() {
		super();
	}


	public Patient(long patientId, String patientName, String doctorName, String appointmentTime,
			String appointmentDate, String hospitalName, String contactNo) {
		super();
		this.patientId = patientId;
		this.patientName = patientName;
		this.doctorName = doctorName;
		this.appointmentTime = appointmentTime;
		this.appointmentDate = appointmentDate;
		this.hospitalName = hospitalName;
		this.contactNo = contactNo;
	}


	public String getAppointmentDate() {
		return appointmentDate;
	}


	public void setAppointmentDate(String appointmentDate) {
		this.appointmentDate = appointmentDate;
	}


	public long getPatientId() {
		return patientId;
	}

	public void setPatientId(long patientId) {
		this.patientId = patientId;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getAppointmentTime() {
		return appointmentTime;
	}

	public void setAppointmentTime(String appointmentTime) {
		this.appointmentTime = appointmentTime;
	}

	public String getHospitalName() {
		return hospitalName;
	}

	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", patientName=" + patientName + ", doctorName=" + doctorName
				+ ", appointmentTime=" + appointmentTime + ", hospitalName=" + hospitalName + ", email=" + email
				+ ", contactNo=" + contactNo + "]";
	}

}
