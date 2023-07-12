package com.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.model.Template;
import com.student.repository.TemplateRepo;
@Service
public class TemplateServiceImpl implements TemplateService{

	@Autowired
	TemplateRepo temprepo;
	
	@Override
	public Template addtemplate(Template template) {
		// TODO Auto-generated method stub
		return temprepo.save(template);
	}

	@Override
	public List<Template> getAll() {
		// TODO Auto-generated method stub
		return temprepo.findAll();
	}

}
