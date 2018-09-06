package com.my.portal.service;

import java.util.List;

import com.my.portal.entities.FeeConfig;
import com.my.portal.model.FeeConfigView;

public interface FeeConfigService {

	List<FeeConfigView> getFeeConfig(String ageGrp, Long trtmntPlanId, Long toothQuadrentId);
	FeeConfigView addFeeConfig(FeeConfigView v);
	FeeConfigView map(FeeConfig e);
}
