package com.hospital.services;

import java.util.List;

import com.hospital.model.Patient;

public interface PatientService {

	public List<Patient> getAllPatients();
	
	public Patient addPatient(Patient patient);
	
	public Patient getPatientByContactNo(String contactNo);
	
	public Patient updatePatient(Patient patient);
	
	public long deletePatientById(long patientId);

	public Patient findPatientById(long patientId);
}
