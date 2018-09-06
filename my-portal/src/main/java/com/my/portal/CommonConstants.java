package com.my.portal;

import org.springframework.util.StringUtils;

public class CommonConstants {

	public enum BloodGroup{
		
		A_POSITIVE("A+"),
		A_NEGETIVE("A-"),
		B_POSITIVE("B+"),
		B_NEGETIVE("B-"),
		AB_POSITIVE("AB+"),
		AB_NEGETIVE("AB-"),
		O_POSITIVE("O+"),
		O_NEGETIVE("O-")
		;
		
		String bloodGroup;
		BloodGroup(String bloodGroup) {
			this.bloodGroup = bloodGroup;
		}
		
		public String getBloodGroup(){
			return bloodGroup;
		}		
		
		public static BloodGroup getBloodGroup(String bgName){
			if(StringUtils.hasText(bgName)){
				for(BloodGroup bg : BloodGroup.values()){
					if(bg.getBloodGroup().equals(bgName)){
						return bg;
					}
				}
			}
			throw new ValidationException(ErrorCode.INVALID_BLOOD_GROUP);
		}
	}
}
