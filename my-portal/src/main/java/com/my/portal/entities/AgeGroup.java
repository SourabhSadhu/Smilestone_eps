package com.my.portal.entities;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


/**
 * The persistent class for the age_group database table.
 * 
 */
@Entity
@Table(name="age_group")
@NamedQueries({
	@NamedQuery(name="AgeGroup.findAll", query="SELECT a FROM AgeGroup a"),
	@NamedQuery(name="AgeGroup.findByFromAgeToAge", query="SELECT a FROM AgeGroup a WHERE a.fromAge <= :age AND a.toAge > :age"),
	@NamedQuery(name="AgeGroup.checkByAge", query="SELECT a FROM AgeGroup a WHERE a.fromAge = :fromAge AND a.toAge = :toAge")
	})
public class AgeGroup implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
//	@SequenceGenerator(name="AGE_GROUP_GROUPID_GENERATOR", sequenceName="REPLACE_SEQ_NAME")
//	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="AGE_GROUP_GROUPID_GENERATOR")
	@Column(name="group_id")
	private String groupId;

	@Column(name="from_age")
	private BigDecimal fromAge;

	@Column(name="to_age")
	private BigDecimal toAge;

	public AgeGroup() {
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

}