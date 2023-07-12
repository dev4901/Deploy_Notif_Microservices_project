package com.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.model.PNAdmin;
import com.student.repository.PNAdminRepository;
@Service
public class PNAdminServiceImpl implements PNAdminservice{

	@Autowired
	PNAdminRepository pnrepo;
	
	@Override
	public PNAdmin addpn(PNAdmin pnAdmin) {
		// TODO Auto-generated method stub
		return pnrepo.save(pnAdmin);
	}

	@Override
	public List<PNAdmin> getAll() {
		// TODO Auto-generated method stub
		return pnrepo.findAll();
	}

}
