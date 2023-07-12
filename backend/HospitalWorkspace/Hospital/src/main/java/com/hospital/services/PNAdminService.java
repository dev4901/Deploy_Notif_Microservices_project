package com.hospital.services;

import java.util.List;

import com.hospital.model.PNAdmin;

public interface PNAdminService {

	public PNAdmin addPNAdmin(PNAdmin pnAdmin);

	public List<PNAdmin> getPNAdmins();
}
