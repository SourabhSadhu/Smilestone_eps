package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;


/**
 * The persistent class for the tooth_quadrent database table.
 * 
 */
@Entity
@Table(name="tooth_quadrent")
@NamedQuery(name="ToothQuadrent.isToothGrpIdAvailable", query="SELECT t FROM ToothQuadrent t WHERE t.toothGroup = :tooth_grp_id")
public class ToothQuadrent implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
//	@SequenceGenerator(name="TOOTH_QUADRENT_TOOTHINDEX_GENERATOR", sequenceName="REPLACE_SEQ_NAME")
//	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="TOOTH_QUADRENT_TOOTHINDEX_GENERATOR")
	@Column(name="tooth_index")
	private long toothIndex;

	@Column(name="tooth_group")
	private BigDecimal toothGroup;

	@Column(name="tooth_number")
	private BigDecimal toothNumber;

	@Column(name="tooth_qdr")
	private BigDecimal toothQdr;

	public ToothQuadrent() {
	}

	public long getToothIndex() {
		return this.toothIndex;
	}

	public void setToothIndex(long toothIndex) {
		this.toothIndex = toothIndex;
	}

	public BigDecimal getToothGroup() {
		return this.toothGroup;
	}

	public void setToothGroup(BigDecimal toothGroup) {
		this.toothGroup = toothGroup;
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

}