package com.my.portal;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.my.portal.model.ApiResponse;
import com.my.portal.model.ResponseStatus;

public class CommonUtils {

	public static ApiResponse getResp(Object o) {
		ApiResponse resp = new ApiResponse();
		if(null != o) {
			resp.setResp(o);
			resp.setStatus(ResponseStatus.SUCCESS);
		}
		return resp;
	}
	
	public static ApiResponse getResp(Object o, ErrorCode error) {
		ApiResponse resp = new ApiResponse();
		resp.setResp(o);
		resp.setDesc(error.getDesc());
		return resp;
	}
	
	public static String getDateDDMMYYYY(Timestamp ts){
		return new SimpleDateFormat("DD-MM-YYYY").format(new Date(ts.getTime()));
	}
}
