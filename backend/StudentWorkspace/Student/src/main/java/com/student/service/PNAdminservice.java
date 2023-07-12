package com.student.service;

import java.util.List;

import com.student.model.PNAdmin;

public interface PNAdminservice {

	public PNAdmin addpn(PNAdmin pnAdmin);
	
	public List<PNAdmin> getAll();
}
