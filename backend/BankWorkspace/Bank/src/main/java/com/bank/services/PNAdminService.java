package com.bank.services;

import java.util.List;

import com.bank.model.PNAdmin;

public interface PNAdminService {

	public List<PNAdmin> getPNAdmin();
	
	public PNAdmin addPNAdmin(PNAdmin pnadmin);
	
}
