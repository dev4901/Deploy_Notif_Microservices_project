package com.student.externalservice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.student.model.PNAdmin;
import com.student.model.Student;
import com.student.model.Template;
import com.student.service.PNAdminservice;
import com.student.service.StudentService;
import com.student.service.TemplateService;

@Service
public class PNService {

	@Autowired
	RestTemplate restTemplet;

	@Autowired
	StudentService studentService;
	
	@Autowired
	PNAdminservice pnService;

	@Autowired
	TemplateService templateService;
	
	public String callPNService()
	{
		Map<String, Object> pnData = new HashMap();
		System.out.println("method entry...");
		List<Template> t_list = templateService.getAll();
		Template select_template = null;
		for(Template temp:t_list)
		{
			if(temp.getName().equals("Push Notification Templete"))
			{
				select_template=temp;
			}
		}
		List<Student> studentList = studentService.getStudents();
		PNAdmin pa = pnService.getAll().get(0);
		
		String[] bd = select_template.getBody().split("\\$");

		String url = "http://localhost:8888/pushnotificationmicrosevice/pushnotification/sendnotification";

		for (Student s : studentList) {
			String name = s.getStudentName();
			int percentage = s.getStudentMark();
			String mentor = s.getStudentMentorName();
			String universityname = s.getStudentUniversity();
			String subject = select_template.getSubject();
			String body = bd[0] + name + bd[1] + percentage + "%" + bd[2];
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
