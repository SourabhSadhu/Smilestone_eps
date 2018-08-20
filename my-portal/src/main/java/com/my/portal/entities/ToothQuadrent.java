package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;


/**
 * The persistent class for the tooth_quadrent database table.
 * 
 */
@Entity
@Table(name="tooth_quadrent")
@NamedQuery(name="ToothQuadrent.findAll", query="SELECT t FROM ToothQuadrent t")
public class ToothQuadrent implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="tooth_index")
	private long toothIndex;

	@Column(name="tooth_number")
	private BigDecimal toothNumber;

	@Column(name="tooth_qdr")
	private BigDecimal toothQdr;

	//bi-directional many-to-one association to ClinicalFinding
	@OneToMany(mappedBy="toothQuadrent")
	private List<ClinicalFinding> clinicalFindings;

	public ToothQuadrent() {
	}

	public long getToothIndex() {
		return this.toothIndex;
	}

	public void setToothIndex(long toothIndex) {
		this.toothIndex = toothIndex;
	}

	public BigDecimal getToothNumber() {
		return this.toothNumber;
	}

	public void setToothNumber(BigDecimal toothNumber) {
		this.toothNumber = toothNumber;
	}

	public BigDecimal getToothQdr() {
		return this.toothQdr;
	}

	public void setToothQdr(BigDecimal toothQdr) {
		this.toothQdr = toothQdr;
	}

	public List<ClinicalFinding> getClinicalFindings() {
		return this.clinicalFindings;
	}

	public void setClinicalFindings(List<ClinicalFinding> clinicalFindings) {
		this.clinicalFindings = clinicalFindings;
	}

	public ClinicalFinding addClinicalFinding(ClinicalFinding clinicalFinding) {
		getClinicalFindings().add(clinicalFinding);
		clinicalFinding.setToothQuadrent(this);

		return clinicalFinding;
	}

	public ClinicalFinding removeClinicalFinding(ClinicalFinding clinicalFinding) {
		getClinicalFindings().remove(clinicalFinding);
		clinicalFinding.setToothQuadrent(null);

		return clinicalFinding;
	}

}