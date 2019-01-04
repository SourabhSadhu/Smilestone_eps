package com.my.portal.model;

public enum TreatmentPlanStatus {
	COMPLETED("Completed"),PENDING("Pending");
	 
	private String desc;
	
	private TreatmentPlanStatus(String desc) {
		this.desc = desc;
	}
	
	public TreatmentPlanStatus getFromDesc(String desc){
		for(TreatmentPlanStatus tps : TreatmentPlanStatus.values()){
			if(tps.desc.equals(desc)){
				return tps;
			}
		}
		return null;
	}
	
	public String getDesc(){
		return this.desc;
	}
}
