package com.my.portal;

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

//	@Override
//	public String toString() {
//		return "toString [error=" + error + ", getValidationPayload()=" + getValidationPayload() + "]";
//	}

	@Override
	public String getMessage() {
		return "getMessage [error=" + error + ", getValidationPayload()=" + getValidationPayload().getDesc() + "]";
	}
	
	
}
