package com.bank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.model.PNAdmin;
import com.bank.repository.PNAdminRepository;

@Service
public class PNAdminServiceImpl implements PNAdminService{

	@Autowired
	PNAdminRepository pnAdminRepository;
	
	@Override
	public List<PNAdmin> getPNAdmin() {
		// TODO Auto-generated method stub
		System.out.println(pnAdminRepository.findAll());
		return pnAdminRepository.findAll();
	}

	@Override
	public PNAdmin addPNAdmin(PNAdmin pnadmin) {
		// TODO Auto-generated method stub
		return pnAdminRepository.save(pnadmin);
	}

}
