package com.my.portal;

import com.my.portal.model.ApiResponse;
import com.my.portal.model.ErrorCode;
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
}
