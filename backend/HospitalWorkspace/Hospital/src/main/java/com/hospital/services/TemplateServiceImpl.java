package com.hospital.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.Template;
import com.hospital.repository.TemplateRepository;
@Service
public class TemplateServiceImpl implements TemplateService{

	@Autowired
	TemplateRepository templateRepository;
	
	@Override
	public Template addTemplate(Template template) {
		// TODO Auto-generated method stub
		return templateRepository.save(template);
	}

	@Override
	public List<Template> getTemplates() {
		// TODO Auto-generated method stub
		return templateRepository.findAll();
	}

}
