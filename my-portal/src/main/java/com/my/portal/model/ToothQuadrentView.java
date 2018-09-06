package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;

public class ToothQuadrentView implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 4426914489921316592L;
	private long toothIndex;
	private BigDecimal toothGroup;
	private BigDecimal toothNumber;
	private BigDecimal toothQdr;

	public ToothQuadrentView() {
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