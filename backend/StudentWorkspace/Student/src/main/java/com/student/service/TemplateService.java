package com.student.service;

import java.util.List;

import com.student.model.Template;

public interface TemplateService {

	public Template addtemplate(Template template);
	
	public List<Template> getAll();
}
