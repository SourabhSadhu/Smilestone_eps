package com.my.portal.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.my.portal.ValidationException;
import com.my.portal.entities.AgeGroup;
import com.my.portal.entities.ClinicalFinding;
import com.my.portal.entities.ToothQuadrent;
import com.my.portal.model.ClinicalFindingView;
import com.my.portal.model.ErrorCode;
import com.my.portal.model.ToothQuadrentView;
import com.my.portal.repositories.ClinicalFindingRepository;
import com.my.portal.service.AgeGroupService;
import com.my.portal.service.ClinicalFindingService;
import com.my.portal.service.ToothQuadrentService;

@Service
public class ClinicalFindingServiceImpl implements ClinicalFindingService {

	private final Logger log = LoggerFactory.getLogger(getClass());
	@Autowired ClinicalFindingRepository repo;
	@Autowired AgeGroupService ageGrpService;
	@Autowired ToothQuadrentService toothService;
	
	private List<ClinicalFindingView> cfvList = new ArrayList<>();
	
	@PostConstruct
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	private void test(){
		mapAllFinding();
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public ClinicalFindingView findByNameToothAgeGrp(String name, long toothIndex, String ageGrpIndex) {
		return map(repo.findByNameToothAgeGrp(name, toothIndex, ageGrpIndex));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public ClinicalFindingView addClinicalFinding(ClinicalFindingView view) {
		return map(repo.saveAndFlush(map(view)));
	}
	
	
	@Override
	public List<ClinicalFindingView> findAll() {
		return mapAllFinding();
	}

	private ClinicalFindingView map(ClinicalFinding f) {
		ClinicalFindingView v = new ClinicalFindingView();
		if(null != f) {
			v.setAgeGroupIndex(f.getAgeGroupBean().getGroupId());
			v.setFee(f.getFee());
			v.setFindingDesc(f.getFDesc());
			v.setFindingId(f.getFId());
			v.setToothQuadrentIndex(f.getToothQuadrent().getToothIndex());
		}
		return v;
	}
	
	private ClinicalFinding map(ClinicalFindingView v) {
		ClinicalFinding f = new ClinicalFinding();
		if(null != v) {
			if(StringUtils.hasText(v.getAgeGroupIndex()) && ageGrpService.checkAgeGrpIndex(v.getAgeGroupIndex())) {
				if(v.getToothQuadrentIndex() != 0 || toothService.isToothQuadrentAvailable(v.getToothQuadrentIndex())) {
					AgeGroup a = ageGrpService.findById(v.getAgeGroupIndex());
					ToothQuadrent t = toothService.findById(v.getToothQuadrentIndex());
					f.setAgeGroupBean(a);
					f.setFDesc(v.getFindingDesc());
					f.setFee(v.getFee());
					f.setFName(v.getFindingName());
					f.setToothQuadrent(t);
				}else {
					throw new ValidationException(ErrorCode.INVALID_TOOTH_QUADRENT);
				}
			}else {
				throw new ValidationException(ErrorCode.INVALID_AGE_GROUP_INDEX);
			}
		}
		return f;
	}
	
	private List<ClinicalFindingView> mapAllFinding() {
		if(null == cfvList) {
			cfvList = new ArrayList<>();
		}
		if(repo.findAll().size() != cfvList.size()) {
			for(ClinicalFinding f : repo.findAll()) {
				cfvList.add(map(f));
			}
		}
		return cfvList;
	}

}
