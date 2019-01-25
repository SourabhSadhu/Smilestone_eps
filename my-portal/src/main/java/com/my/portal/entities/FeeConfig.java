package com.my.portal.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


/**
 * The persistent class for the fee_config database table.
 * findFeeConfig(@Param("age_grp") String ageGrp, @Param("tooth_grp_idx") Long toothGrpIdx, @Param("trtmntId") Long trtmntId);
 * 
 */
@Entity
@SequenceGenerator(name="FEE_CONFIG_FEECONFIGID_GENERATOR", sequenceName="fee_config_id_seq", allocationSize = 1, schema = "eps")
@Table(name="fee_config")
@NamedQuery(name="FeeConfig.findFeeConfig", 
	query="SELECT f FROM FeeConfig f WHERE f.ageGroupId = :age_grp AND f.toothGroupId = :tooth_grp_idx "
			+ "AND f.treatmentPlanId = :trtmntId")
public class FeeConfig implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="FEE_CONFIG_FEECONFIGID_GENERATOR")
	@Column(name="fee_config_id")
	private Long feeConfigId;

	@Column(name="age_group_id")
	private String ageGroupId;

	@Column(name="age_group_percent")
	private Long ageGroupPercent;

	@Column(name="base_fee")
	private Long baseFee;

	@Column(name="tooth_group_id")
	private Long toothGroupId;

	@Column(name="tooth_group_percent")
	private Long toothGroupPercent;

	@Column(name="treatment_plan_id")
	private Long treatmentPlanId;

	public FeeConfig() {
	}

	public Long getFeeConfigId() {
		return this.feeConfigId;
	}

	public void setFeeConfigId(Long feeConfigId) {
		this.feeConfigId = feeConfigId;
	}

	public String getAgeGroupId() {
		return this.ageGroupId;
	}

	public void setAgeGroupId(String ageGroupId) {
		this.ageGroupId = ageGroupId;
	}

	public Long getAgeGroupPercent() {
		return this.ageGroupPercent;
	}

	public void setAgeGroupPercent(Long ageGroupPercent) {
		this.ageGroupPercent = ageGroupPercent;
	}

	public Long getBaseFee() {
		return this.baseFee;
	}

	public void setBaseFee(Long baseFee) {
		this.baseFee = baseFee;
	}

	public Long getToothGroupId() {
		return this.toothGroupId;
	}

	public void setToothGroupId(Long toothGroupId) {
		this.toothGroupId = toothGroupId;
	}

	public Long getToothGroupPercent() {
		return this.toothGroupPercent;
	}

	public void setToothGroupPercent(Long toothGroupPercent) {
		this.toothGroupPercent = toothGroupPercent;
	}

	public Long getTreatmentPlanId() {
		return this.treatmentPlanId;
	}

	public void setTreatmentPlanId(Long treatmentPlanId) {
		this.treatmentPlanId = treatmentPlanId;
	}

}