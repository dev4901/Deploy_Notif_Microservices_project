package com.bank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.model.Template;
import com.bank.repository.TemplateRepository;

@Service
public class TemplateServiceImpl implements TemplateService{

	@Autowired
	TemplateRepository templateRepository;
	
	@Override
	public List<Template> getTemplate() {
		// TODO Auto-generated method stub
		return templateRepository.findAll();
	}

	@Override
	public Template addTemplate(Template template) {
		// TODO Auto-generated method stub
		return templateRepository.save(template);
	}

}
