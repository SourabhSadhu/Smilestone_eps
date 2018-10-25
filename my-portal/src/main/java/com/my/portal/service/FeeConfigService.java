package com.my.portal.service;

import com.my.portal.entities.FeeConfig;
import com.my.portal.model.FeeConfigView;

public interface FeeConfigService {

	FeeConfigView getFeeConfig(Long age, Long trtmntPlanId, Long toothQuadrentId);
	FeeConfigView addFeeConfig(FeeConfigView v);
	FeeConfigView map(FeeConfig e);
}
