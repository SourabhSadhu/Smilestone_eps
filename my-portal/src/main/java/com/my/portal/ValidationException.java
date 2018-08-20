package com.my.portal;

import com.my.portal.model.ErrorCode;

public class ValidationException extends RuntimeException {

	private static final long serialVersionUID = 8006452570328500200L;

	private final ErrorCode error;
	
	public ValidationException(ErrorCode error) {
		super();
		this.error = error;
	}

	public ErrorCode getValidationPayload() {
		return error;
	}
}
