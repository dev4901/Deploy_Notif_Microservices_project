package com.bank.services;

import java.util.List;

import com.bank.model.Template;

public interface TemplateService {

	public List<Template> getTemplate();
	
	public Template addTemplate(Template template);
}
