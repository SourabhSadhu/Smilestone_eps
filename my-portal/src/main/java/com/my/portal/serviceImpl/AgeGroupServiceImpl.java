package com.my.portal.serviceImpl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.ValidationException;
import com.my.portal.entities.AgeGroup;
import com.my.portal.model.AgeGroupView;
import com.my.portal.model.ErrorCode;
import com.my.portal.repositories.AgeGroupRepository;
import com.my.portal.service.AgeGroupService;

@Service
public class AgeGroupServiceImpl implements AgeGroupService {

	@Autowired AgeGroupRepository repo;
	private final Logger log = LoggerFactory.getLogger(getClass());
	private List<AgeGroupView> ageList = new ArrayList<>();
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly=true)
	public AgeGroupView getFromAgeToAge(BigDecimal age) {

		for(AgeGroupView a : ageList){
			if(a.getFromAge().compareTo(age) <= 0 && a.getToAge().compareTo(age) == 1){
				return a;
			}
		}			
		throw new ValidationException(ErrorCode.NOT_FOUND);
		
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly=true)
	public boolean checkByAge(BigDecimal fromAge, BigDecimal toAge) {
		List<AgeGroup> ageGrpList = repo.checkByAge(fromAge, toAge);
		if(null != ageGrpList && !ageGrpList.isEmpty()) {
			return true;
		}
		return false;
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public AgeGroupView addAgeGrp(AgeGroupView ageGrp) {
		AgeGroup ageGroup = map(ageGrp);
		if(null != ageGroup.getFromAge() && null != ageGroup.getToAge()) {
			if(checkByAge(ageGroup.getFromAge(), ageGroup.getToAge())) {
				throw new ValidationException(ErrorCode.DUPLICATE_AGE_GRP);
			}
			if(ageGroup.getToAge().compareTo(ageGroup.getFromAge()) <= 0) {
				throw new ValidationException(ErrorCode.TO_AGE_SMALLER_THAN_FROM_AGE);
			}
			ageGroup.setGroupId(new StringBuilder()
					.append(String.valueOf(ageGroup.getFromAge()))
					.append("to")
					.append(String.valueOf(ageGroup.getToAge()))
					.toString());
			return map(repo.saveAndFlush(ageGroup));
			
		}else {
			throw new ValidationException(ErrorCode.INVALID_INPUT);
		}
	}
	
	@Override
	public AgeGroup findById(String id) {
		return repo.findOne(id);
	}

	@PostConstruct
	private void cacheData(){
		mapAgeGrp();
	}

	
	@Override
	public boolean checkAgeGrpIndex(String index) {
		return repo.exists(index);
	}

	private AgeGroupView map(AgeGroup a){
		AgeGroupView b = new AgeGroupView();
		if(null != a){
			b.setGroupId(a.getGroupId());
			b.setFromAge(a.getFromAge());
			b.setToAge(a.getToAge());
		}
		return b;
	}
	
	private AgeGroup map(AgeGroupView a){
		AgeGroup b = new AgeGroup();
		if(null != a && !repo.exists(a.getGroupId())){
			b.setGroupId(a.getGroupId());
			b.setFromAge(a.getFromAge());
			b.setToAge(a.getToAge());
		}else {
			throw new ValidationException(ErrorCode.INVALID_AGE_GROUP_INDEX);
		}
		return b;
	}
	
	private List<AgeGroupView> mapAgeGrp() {
		if(null == ageList || ageList.isEmpty()) {
			ageList = new ArrayList<>();
		}
		if(repo.findAll().size() != ageList.size()) {
			ageList.clear();
			for(AgeGroup a : repo.findAll()){
				ageList.add(map(a));
			}
		}
		return ageList;
	}
}
