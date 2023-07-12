package com.hospital.externalservices;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hospital.model.PNAdmin;
import com.hospital.model.Patient;
import com.hospital.model.Template;
import com.hospital.services.PNAdminService;
import com.hospital.services.PatientService;
import com.hospital.services.TemplateService;

@Service
public class PNService {

	@Autowired
	RestTemplate restTemplet;

	@Autowired
	PatientService patientService;
	
	@Autowired
	PNAdminService pnAdminService;

	@Autowired
	TemplateService templateService;
	
	public String callPNService()
	{
		Map<String, Object> pnData = new HashMap<>();
		System.out.println("method entry...");
		List<Template> t_list = templateService.getTemplates();
		Template select_template = null;
		for(Template temp:t_list)
		{
			if(temp.getName().equals("Push Notification Templete"))
			{
				select_template=temp;
			}
		}
		List<Patient> patientList = patientService.getAllPatients();
		PNAdmin pa = pnAdminService.getPNAdmins().get(0);
		
		String[] bd = select_template.getBody().split("\\$");

		String url = "http://localhost:8888/pushnotificationmicrosevice/pushnotification/sendnotification";

		for (Patient p : patientList) {
			String name = p.getPatientName();
			String doctorName = p.getDoctorName();
			String appointmentTime = p.getAppointmentTime();
			String hospitalName = p.getHospitalName();
			String subject = select_template.getSubject();
			String body = bd[0] + name + bd[1] + doctorName + "%" + bd[2];
			String fcm_api = pa.getFcm_api();
			String server_key = pa.getServer_key();
			String app_token=pa.getApp_token();
			pnData.put("title", subject);
			pnData.put("body", body);
			pnData.put("fcm_api", fcm_api);
			pnData.put("server_key", server_key);
			pnData.put("app_token", app_token);
			System.out.println(pnData);
			restTemplet.postForEntity(url, pnData, String.class);
		}

		
		return "SENT...";
	}

}
