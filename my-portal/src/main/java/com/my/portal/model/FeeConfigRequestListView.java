package com.my.portal.model;

import java.io.Serializable;

public class FeeConfigRequestListView implements Serializable{
	
	private static final long serialVersionUID = -1475742013895072942L;
	long tooth_grp_idx;
	long trtmnt_id;
	
	
	public FeeConfigRequestListView(long tooth_grp_idx, long trtmnt_id) {
		this.tooth_grp_idx = tooth_grp_idx;
		this.trtmnt_id = trtmnt_id;
	}
	
	
	public FeeConfigRequestListView() {
	}


	public final long getTooth_grp_idx() {
		return tooth_grp_idx;
	}
	public final void setTooth_grp_idx(long tooth_grp_idx) {
		this.tooth_grp_idx = tooth_grp_idx;
	}
	public final long getTrtmnt_id() {
		return trtmnt_id;
	}
	public final void setTrtmnt_id(long trtmnt_id) {
		this.trtmnt_id = trtmnt_id;
	}
	
}
