package com.my.portal.model;

import java.util.HashMap;
import java.util.Map;

import org.springframework.util.StringUtils;

public enum TreatmentPlanStatus {
	COMPLETED("COM"),PENDING("PEN");
	
	private String desc;
	private Map<String, TreatmentPlanStatus> map;
	
	TreatmentPlanStatus(String desc) {
		this.desc = desc;
		if(StringUtils.hasText(desc)){
			map = new HashMap<>();
			for(TreatmentPlanStatus tps : TreatmentPlanStatus.values()){
				map.put(tps.desc, tps);
			}
		}
	}
	
	public TreatmentPlanStatus getFromDesc(String desc){
		return map.get(desc);
	}
	
	public String getDesc(){
		return this.desc;
	}
}
