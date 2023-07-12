package com.hospital.externalservices;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hospital.model.EmailAdmin;
import com.hospital.model.Patient;
import com.hospital.model.Template;
import com.hospital.services.EmailAdminService;
import com.hospital.services.PatientService;
import com.hospital.services.TemplateService;

@Service
public class EmailService {


	@Autowired
	RestTemplate restTemplet;

	@Autowired
	PatientService patientService;

	@Autowired
	EmailAdminService emailAdminService;

	@Autowired
	TemplateService templateService;

	@SuppressWarnings("null")
	public String callEmailService() {
		Map<String, Object> emailData = new HashMap<>();

		List<Template> t_list = templateService.getTemplates();
		Template select_template = null;
		for(Template temp:t_list)
		{
			if(temp.getName().equals("Email Template"))
			{
				select_template=temp;
			}
		}
		List<Patient> patientList = patientService.getAllPatients();
		EmailAdmin ea = emailAdminService.getEmailAdmins().get(0);

		String[] bd = select_template.getBody().split("\\$");

		String url = "http://localhost:8888/emailmicroservice/email/sendmail";

		for (Patient p : patientList) {
			String name = p.getPatientName();
			String doctorName = p.getDoctorName();
			String appointmentTime = p.getAppointmentTime();
			String hospitalName = p.getHospitalName();
			String email = p.getEmail();
			String subject = select_template.getSubject();
			String body = bd[0] + name + bd[1] + doctorName + "%" + bd[2] + appointmentTime + bd[3] + hospitalName + bd[4];
			String from = ea.getMailFrom();
			String password = ea.getPassword();
			emailData.put("to", email);
			emailData.put("subject", subject);
			emailData.put("body", body);
			emailData.put("from", from);
			emailData.put("password", password);
			restTemplet.postForEntity(url, emailData, String.class);
		}

		return "SENT...";

	}
}
