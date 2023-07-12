package com.authenticate.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.authenticate.model.Template;
import com.authenticate.repository.TemplateRepository;

@Service
public class TemplateServiceImpl implements TemplateService{

	@Autowired
	TemplateRepository templateRepository;

	@Override
	public Template addtemplate(Template template) {
		// TODO Auto-generated method stub
		return templateRepository.save(template);
	}

	@Override
	public List<Template> getAll() {
		// TODO Auto-generated method stub
		return templateRepository.findAll();
	}
}
