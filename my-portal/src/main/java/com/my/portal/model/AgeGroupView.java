package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;


public class AgeGroupView implements Serializable {

	private static final long serialVersionUID = 9097313734105969381L;
	private String groupId;
	private BigDecimal fromAge;
	private BigDecimal toAge;
	private List<MedicineMasterView> medicineMasters;
	public AgeGroupView() {
	}

	public String getGroupId() {
		return this.groupId;
	}

	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}

	public BigDecimal getFromAge() {
		return this.fromAge;
	}

	public void setFromAge(BigDecimal fromAge) {
		this.fromAge = fromAge;
	}

	public BigDecimal getToAge() {
		return this.toAge;
	}

	public void setToAge(BigDecimal toAge) {
		this.toAge = toAge;
	}

	public List<MedicineMasterView> getMedicineMasters() {
		return this.medicineMasters;
	}

	public void setMedicineMasters(List<MedicineMasterView> medicineMasters) {
		this.medicineMasters = medicineMasters;
	}

	public MedicineMasterView addMedicineMaster(MedicineMasterView medicineMaster) {
		getMedicineMasters().add(medicineMaster);
		medicineMaster.setAgeGroupBean(this);

		return medicineMaster;
	}

	public MedicineMasterView removeMedicineMaster(MedicineMasterView medicineMaster) {
		getMedicineMasters().remove(medicineMaster);
		medicineMaster.setAgeGroupBean(null);

		return medicineMaster;
	}

}