package com.hospital.services;

import java.util.List;

import com.hospital.model.Template;

public interface TemplateService {

	public Template addTemplate(Template template);

	public List<Template> getTemplates();
}
