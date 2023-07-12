package com.hospital.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.Patient;
import com.hospital.repository.PatientRepository;
@Service
public class PatientServiceImpl implements PatientService{

	@Autowired
	PatientRepository patientRepository;
	
	@Override
	public List<Patient> getAllPatients() {
		// TODO Auto-generated method stub
		return patientRepository.findAll();
	}

	@Override
	public Patient addPatient(Patient patient) {
		// TODO Auto-generated method stub
		return patientRepository.save(patient);
	}

	@Override
	public Patient findPatientById(long patientId) {
		// TODO Auto-generated method stub
		return patientRepository.findById(patientId).get();
	}

	@Override
	public Patient getPatientByContactNo(String contactNo) {
		// TODO Auto-generated method stub
		return patientRepository.findByContactNo(contactNo);
	}

	@Override
	public Patient updatePatient(Patient patient) {
		// TODO Auto-generated method stub
		return patientRepository.save(patient);
	}

	@Override
	public long deletePatientById(long patientId) {
		// TODO Auto-generated method stub
		patientRepository.deleteById(patientId);
		return patientId;
	}

}
