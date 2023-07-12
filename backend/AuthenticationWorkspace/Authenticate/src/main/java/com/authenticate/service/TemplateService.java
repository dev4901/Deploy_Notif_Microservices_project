package com.authenticate.service;

import java.util.List;

import com.authenticate.model.Template;

public interface TemplateService {

	public Template addtemplate(Template template);
	
	public List<Template> getAll();
}
