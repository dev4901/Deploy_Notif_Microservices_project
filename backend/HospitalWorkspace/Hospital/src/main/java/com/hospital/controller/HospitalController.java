package com.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.externalservices.EmailService;
import com.hospital.externalservices.PNService;
import com.hospital.externalservices.SMSService;
import com.hospital.model.CallCountSms;
import com.hospital.model.EmailAdmin;
import com.hospital.model.PNAdmin;
import com.hospital.model.Patient;
import com.hospital.model.SMSAdmin;
import com.hospital.model.Template;
import com.hospital.services.CallCountSmsService;
import com.hospital.services.EmailAdminService;
import com.hospital.services.PNAdminService;
import com.hospital.services.PatientService;
import com.hospital.services.SMSAdminService;
import com.hospital.services.TemplateService;
import com.hospital.utils.JwtUtil;

@RestController
@RequestMapping("/hospital")
@CrossOrigin("http://localhost:3000/")
public class HospitalController {

	@Autowired
	PatientService patientService;
	
	@Autowired
	EmailAdminService emailAdminService;
	
	@Autowired
	SMSAdminService smsAdminService;
	
	@Autowired
	PNAdminService pnAdminService;
	
	@Autowired
	TemplateService templateService;
	
	@Autowired
	EmailService emailService;
	
	@Autowired
	SMSService smsService;
	
	@Autowired
	PNService pnService;
	
	@Autowired
	CallCountSmsService callCountSmsService;
	
	@Autowired
	JwtUtil jwtUtil;

	@GetMapping("/getpatients")
	public List<Patient> getPatients(@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return patientService.getAllPatients();
	}

	@PostMapping("/addpatient")
	public Patient addPatient(@RequestBody Patient patient,@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return patientService.addPatient(patient);
	}
	
	@GetMapping("/getPatientById/{patientId}")
	public Patient getPatientById(@PathVariable Long patientId,@RequestHeader("jwttoken") String token)
	{
		System.out.println(patientId);
		jwtUtil.validateToken(token);
		return patientService.findPatientById(patientId);
	}
	
	@PutMapping("/updatePatientData")
	public Patient updatePatientData(@RequestBody Patient patient,@RequestHeader("jwttoken") String token)
	{
		System.out.println(patient);
		jwtUtil.validateToken(token);
		return patientService.updatePatient(patient);
	}
	
	@DeleteMapping("/deletePatientById/{patientId}")
	public Long deletePatientById(@PathVariable Long patientId,@RequestHeader("jwttoken") String token)
	{
		System.out.println(patientId);
		jwtUtil.validateToken(token);
		return patientService.deletePatientById(patientId);
	}

	@GetMapping("/getSmsServiceCallCount")
	public CallCountSms getCallCountPnService(@RequestHeader("jwttoken") String token)
	{
		jwtUtil.validateToken(token);
		return callCountSmsService.getCallCount();
	}
	
	@PostMapping("/setInitalCallCountSmsService")
	public CallCountSms setInitalCallCountSmsService(@RequestHeader("jwttoken") String token)
	{
		jwtUtil.validateToken(token);
		return callCountSmsService.SetInitialValue();
	}

	@PostMapping("/sendmail")
	public String callEmailService(@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return emailService.callEmailService();
	}

	@PostMapping("/sendsms")
	public List<ResponseEntity<String>> callSMSService(@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return smsService.callSMSService(token);
	}
	
	@PostMapping("/sendsmsbycontactno")
	public ResponseEntity<String> callSMSServiceByContact(@RequestBody String contactNo,@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return smsService.callSMSServiceById(contactNo,token);
	}

	@PostMapping("/sendpn")
	public String callPNService(@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return pnService.callPNService();
	}

	@PostMapping("/addemailadmin")
	public EmailAdmin addemaildata(@RequestBody EmailAdmin emailAdmin,@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return emailAdminService.addEmailAdmin(emailAdmin);
	}

	@PostMapping("/addsmsadmin")
	public SMSAdmin addsmsdata(@RequestBody SMSAdmin smsAdmin,@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return smsAdminService.addSMSAdmin(smsAdmin);
	}

	@PostMapping("/addpnadmin")
	public PNAdmin addpndata(@RequestBody PNAdmin pnAdmin,@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return pnAdminService.addPNAdmin(pnAdmin);
	}

	@PostMapping("/addtemplate")
	public Template addtemplatedata(@RequestBody Template template,@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return templateService.addTemplate(template);
	}
	
	@GetMapping("/getemailadmin")
	public List<EmailAdmin> getemaildata(@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return emailAdminService.getEmailAdmins();
	}

	@GetMapping("/getsmsadmin")
	public List<SMSAdmin> getsmsdata(@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return smsAdminService.getSMSAdmins();
	}

	@GetMapping("/getpnadmin")
	public List<PNAdmin> getpndata(@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return pnAdminService.getPNAdmins();
	}

	@GetMapping("/gettemplate")
	public List<Template> gettemplatedata(@RequestHeader("jwttoken") String token) {
		jwtUtil.validateToken(token);
		return templateService.getTemplates();
	}

}
