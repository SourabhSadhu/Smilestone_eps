package com.my.portal.serviceImpl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.my.portal.ErrorCode;
import com.my.portal.ValidationException;
import com.my.portal.entities.FeeConfig;
import com.my.portal.model.AgeGroupView;
import com.my.portal.model.FeeConfigView;
import com.my.portal.repositories.FeeConfigRepository;
import com.my.portal.service.AgeGroupService;
import com.my.portal.service.FeeConfigService;
import com.my.portal.service.ToothQuadrentService;
import com.my.portal.service.TreatmentPlanService;

@Service
public class FeeConfigServiceImpl implements FeeConfigService {

	@Autowired AgeGroupService agService;
	@Autowired ToothQuadrentService tqService;
	@Autowired TreatmentPlanService tpService;
	
	@Autowired FeeConfigRepository repo;
	
	@Override
	public FeeConfigView getFeeConfig(Long age, Long trtmntPlanId, Long toothQuadrentId) {
		
		AgeGroupView ageGrpView = agService.getFromAgeToAge(BigDecimal.valueOf(age));
		if(null != ageGrpView && StringUtils.hasText(ageGrpView.getGroupId())){
			return map(repo.findFeeConfig(ageGrpView.getGroupId(), toothQuadrentId, trtmntPlanId));
		}
		return null;
	}

	@Override
	public FeeConfigView addFeeConfig(FeeConfigView v) {
		if(StringUtils.isEmpty(v.getAgeGroupId()) || !agService.checkAgeGrpIndex(v.getAgeGroupId())){
			throw new ValidationException(ErrorCode.INVALID_AGE_GROUP_INDEX);
		}
		if(null == v.getTreatmentPlanId() || 0 >= v.getTreatmentPlanId().longValue() || null == tpService.findById(v.getTreatmentPlanId(), true)){
			throw new ValidationException(ErrorCode.INVAID_TREATMENT_PLAN_ID);
		}
		if(null == v.getToothGroupId() || 0 >= v.getToothGroupId().longValue() || !tqService.isToothGrpIdAvailable(v.getToothGroupId())){
			throw new ValidationException(ErrorCode.INVALID_TOOTH_GROUP_ID);
		}
		FeeConfig e = new FeeConfig();
		e.setAgeGroupId(v.getAgeGroupId());
		e.setAgeGroupPercent(null == v.getAgeGroupPercent() ? new Long(0) : v.getAgeGroupPercent());
		e.setBaseFee(null == v.getBaseFee() ? new Long(0) : v.getBaseFee());
		e.setToothGroupId(v.getToothGroupId());
		e.setToothGroupPercent(null == v.getToothGroupPercent() ? new Long(0) : v.getToothGroupPercent());
		e.setTreatmentPlanId(v.getTreatmentPlanId());
		return map(repo.saveAndFlush(e));
	}

	@Override
	public FeeConfigView map(FeeConfig e) {
		FeeConfigView v = new FeeConfigView();
		if(null != e){
			v.setAgeGroupId(e.getAgeGroupId());
			v.setAgeGroupPercent(e.getAgeGroupPercent());
			v.setBaseFee(e.getBaseFee());
			v.setFeeConfigId(e.getFeeConfigId());
			v.setToothGroupId(e.getToothGroupId());
			v.setToothGroupPercent(e.getToothGroupPercent());
			v.setTreatmentPlanId(e.getTreatmentPlanId());
			v.setTotalFee(calculateFee(e));
		}
		return v;
	}

	private List<FeeConfigView> map(List<FeeConfig> el) {
		List<FeeConfigView> vl = new ArrayList<>();
		for(FeeConfig e : el){
			vl.add(map(e));
		}
		return vl;
	}
	
	private long calculateFee(FeeConfig e){
		long baseFee = e.getBaseFee().longValue();
		long toothPerct = e.getToothGroupPercent().longValue();
		long ageGrpPerct = e.getAgeGroupPercent().longValue();
		long totalFee = 0l;
		if(baseFee != 0){
			totalFee = baseFee + ((baseFee*toothPerct)/100) + ((baseFee*ageGrpPerct)/100); 
		}
		return totalFee;
	}
}
