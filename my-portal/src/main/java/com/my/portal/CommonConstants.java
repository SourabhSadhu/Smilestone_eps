package com.my.portal;

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
	}
}
