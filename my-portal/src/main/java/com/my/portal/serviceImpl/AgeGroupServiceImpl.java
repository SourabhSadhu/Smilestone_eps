package com.my.portal.serviceImpl;

import java.math.BigDecimal;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.ValidationException;
import com.my.portal.entities.AgeGroup;
import com.my.portal.model.ErrorCode;
import com.my.portal.repositories.AgeGroupRepository;
import com.my.portal.service.AgeGroupService;

@Service
public class AgeGroupServiceImpl implements AgeGroupService {

	@Autowired AgeGroupRepository repo;
	private final Logger log = LoggerFactory.getLogger(getClass());
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly=true)
	public AgeGroup getFromAgeToAge(BigDecimal age) {
		List<AgeGroup> ageGrpList = repo.findByFromAgeToAge(age);
		if(null != ageGrpList && !ageGrpList.isEmpty()) {
			return ageGrpList.get(0);
		}else {
			throw new ValidationException(ErrorCode.NOT_FOUND);
		}
		
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly=true)
	public boolean checkByAge(BigDecimal fromAge, BigDecimal toAge) {
		List<AgeGroup> ageGrpList = repo.checkByAge(fromAge, toAge);
		if(null != ageGrpList && !ageGrpList.isEmpty()) {
			return false;
		}
		return true;
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public AgeGroup addAgeGrp(AgeGroup ageGroup) {
		if(null != ageGroup.getFromAge() && null != ageGroup.getToAge()) {
			if(checkByAge(ageGroup.getFromAge(), ageGroup.getToAge())) {
				ageGroup.setGroupId(new StringBuilder()
						.append(String.valueOf(ageGroup.getFromAge()))
						.append("to")
						.append(String.valueOf(ageGroup.getToAge()))
						.toString());
				return repo.saveAndFlush(ageGroup);
			}else {
				throw new ValidationException(ErrorCode.DUPLICATE_AGE_GRP);
			}
		}else {
			throw new ValidationException(ErrorCode.INVALID_INPUT);
		}
	}
	

}
