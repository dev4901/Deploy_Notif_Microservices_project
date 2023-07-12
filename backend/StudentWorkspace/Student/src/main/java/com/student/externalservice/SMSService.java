package com.student.externalservice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.student.model.SMSAdmin;
import com.student.model.Student;
import com.student.model.Template;
import com.student.service.SMSAdminservice;
import com.student.service.StudentService;
import com.student.service.TemplateService;

@Service
public class SMSService {

	@Autowired
	RestTemplate restTemplet;

	@Autowired
	StudentService studentService;
	
	@Autowired
	SMSAdminservice smsService;

	@Autowired
	TemplateService templateService;

	
	@SuppressWarnings("null")
	public String callSMSService() {
		Map<String, Object> smsData = new HashMap();
		System.out.println("method entry...");
		List<Template> t_list = templateService.getAll();
		Template select_template = null;
		for(Template temp:t_list)
		{
			if(temp.getName().equals("SMS Template"))
			{
				select_template=temp;
			}
		}
		List<Student> studentList = studentService.getStudents();
		SMSAdmin sa = smsService.getAll().get(0);
		
		String[] bd = select_template.getBody().split("\\$");

		String url = "http://localhost:8888/smsmicroservice/sms/sendsms";

		for (Student s : studentList) {
			String name = s.getStudentName();
			int percentage = s.getStudentMark();
			String mentor = s.getStudentMentorName();
			String universityname = s.getStudentUniversity();
			String contactNo = s.getStudentContact();
			String subject = select_template.getSubject();
			String body = bd[0] + name + bd[1] + percentage + "%" + bd[2] + mentor + bd[3] + universityname + bd[4];
			String account_sid = sa.getAccount_sid();
			String auth_token = sa.getAuth_token();
			String smsfrom=sa.getPhoneNo();
			smsData.put("smsto", contactNo);
			smsData.put("subject", subject);
			smsData.put("body", body);
			smsData.put("account_sid", account_sid);
			smsData.put("auth_token", auth_token);
			smsData.put("smsfrom", smsfrom);
			System.out.println(smsData);
			restTemplet.postForEntity(url, smsData, String.class);
		}

		return "SENT...";

	}
}
