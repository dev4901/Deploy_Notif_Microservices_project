package com.hospital.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.model.PNAdmin;
import com.hospital.repository.PNAdminRepository;
@Service
public class PNAdminServiceImpl implements PNAdminService{

	@Autowired
	PNAdminRepository pnAdminRepository;
	
	@Override
	public PNAdmin addPNAdmin(PNAdmin pnAdmin) {
		// TODO Auto-generated method stub
		return pnAdminRepository.save(pnAdmin);
	}

	@Override
	public List<PNAdmin> getPNAdmins() {
		// TODO Auto-generated method stub
		return pnAdminRepository.findAll();
	}

}
