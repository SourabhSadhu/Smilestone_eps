app.controller('ekycController',[
     '$location',
     '$scope',
     '$timeout',
     '$http',
     'remittanceService',
     'RemittancePromiseService',
     '$window',
	 '$cookies',
	 'datatable',
	 '$rootScope',
	 'encrypt',
	 function($location,$scope,$timeout,$http,remittanceService,RemittancePromiseService,$window,$cookies,datatable,$rootScope,encrypt){
	
//    	 var apiTokenCookie = $cookies.get('API-TOKEN');
    	 var ec = this;
    	 var rps = RemittancePromiseService;
    	 var mobile = "";
 		 var loginMob = "";
 		 var enc = encrypt;
 		 var encInit = {};
	     encInit.default_key_size = "1024";
	     encInit.log = true;
    	 ec.mobile = $location.absUrl().split("mobile=")[1];
	    	     	 
    	 ec.custMobileHeader = true;
    	 ec.custMobile = true;
    	 
    	 ec.ieoErrMsgView = false;
    	 
    	 ec.custEkycSection = false;
    	 ec.custEkycSectionHeader = false;
    	 ec.kycInvalidMethod = true;
    	 ec.ekycMethodErrMsgView = false;
    	 
    	 ec.custEkycBioSection = false;
    	 ec.custEkycBioSectionHeader = false;
    	 
    	 ec.custEkycOtpSectionHeader = false;
    	 ec.custEkycOtpSection = false;
    	 ec.custEkycOtpGenerateSection = true;
    	 ec.custEkycOtpValidateSection = false;
    	 
//    	 ec.beneProfile = false;
//    	 ec.addBene = false;
//    	 ec.benehead = false;
//    	 ec.ifscList = false;
//    	 ec.dataTableDiv = false;
    	 
    	 
    	 //Function to check ekycenabled
    	 
    	 ec.isEkycEnabled = false; //Default false
    	 
    	 checkEkycEnabled = function(){
    		var promise = rps.getResponse("profile/isKycSupportEnabled");
    		promise.then(function(kyc) {
       	  		ec.isEkycEnabled = kyc.data;
   	  		},function(error){
	   	  		bootbox.alert({
					message:"Something went wrong. Please try again.",
					backdrop: true
				});
   	  		});
    	 };
    	 checkEkycEnabled(); //OnLoad function
    	 
    	 //Function to control steps
    	 ec.headerControl = function(val){
    		 ec.closeDiv();
    		 if(val === 'header'){
    			 ec.custMobileHeader = true;
    			 ec.custMobile = true;
    		 }else if(val === 'method'){
    			 ec.custMobileHeader = true;
    			 ec.custEkycSectionHeader = true;
            	 ec.custEkycSection = true;
    		 }else if(val === 'bio'){
    			 ec.custMobileHeader = true;
    			 ec.custEkycSectionHeader = true;
    			 ec.custEkycBioSectionHeader = true;
            	 ec.custEkycBioSection = true;
    		 }else if(val === 'otp'){
    			 ec.custMobileHeader = true;
    			 ec.custEkycSectionHeader = true;
    			 ec.custEkycOtpSectionHeader = true;
    			 ec.custEkycOtpSection = true;
            	 ec.custEkycOtpGenerateSection = true;
    		 }
    	 };
    	 
    	 //Close all divs
    	 ec.closeDiv = function() {
    		 ec.custMobileHeader 			= false;
        	 ec.custMobile 					= false;
        	 ec.ieoErrMsgView 				= false;
        	 ec.custEkycSectionHeader 		= false;
        	 ec.custEkycSection 			= false;
        	 ec.kycInvalidMethod 			= false;
        	 ec.ekycMethodErrMsgView 		= false;
        	 ec.custEkycBioSectionHeader 	= false;
        	 ec.custEkycBioSection 			= false;
        	 ec.custEkycOtpSectionHeader	= false;
        	 ec.custEkycOtpSection 			= false;
        	 ec.custEkycOtpGenerateSection 	= false;
        	 ec.custEkycOtpValidateSection 	= false;
		};
    	 
    	//Session timeout issue Start
    	 chkSession = function(responseData){
    		if(responseData.status===200 && responseData.data.toString().indexOf("<!DOCTYPE") >= 0){
    		var urlScheme = $location.absUrl().split(":")[0];
    		var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
    		//$window.location.reload();
    		$window.location.href = url;
    		}
		   }
    	//Session timeout issue End
    	 
    	 // Fetch Customer details
    	 ec.getDetails = function() {
    		mobile = ec.mobile;
    		loginMob = $('#loginUser').text();
    		if(loginMob == "" || loginMob == null || loginMob === undefined || mobile == "" || mobile == loginMob)	{
    			ec.ieoErrMsgView=true;
    			ec.errorMsg="Logged in IEO should not be the remitter.";
    		}else{    		
	    		var promise = rps.getResponse("ekyc/custProfile/" + mobile);
	    		promise.then(function(custData) {
	    			
	    			chkSession(custData);
	    			var resp = custData.data;
	    			
	    			if ( resp == "" || resp == null || resp == undefined ) {
	    				bootbox.alert({
	    						message:"Customer not registered",
    							backdrop: true
	    				});
					}
	    			else {
	    				if(resp.ekyc == false){
	    					ec.headerControl('method');
	    					encInit.key = resp.pubKey;
	    			 	    enc.construct(encInit);
	    				}else{
	    					bootbox.alert({
	    						message:"Customer eKyc already validated",
    							backdrop: true,
    							callback: function(){
    								ec.toHomePage();
    							}
		    				});
		    			}
	    			}
	    		},
	    		function(error) {
	    			bootbox.alert({
						message:"Something went wrong. Please try again.",
						backdrop: true
    				});
	    		});
    		}//end else
		};
    	
		ec.validateKycMethod = function() {
			var method = ec.kycMethod;
			if(!rps.isEmpty(method) && (method === 'otp' || method === 'bio')){
				//TODO:check method and take action
				ec.custEkycSection = false;
				ec.ekycMethodErrMsgView = false;
				if(method === 'bio'){
					ec.headerControl('bio');	
					getDeviceConfig();
				}else if(method === 'otp'){
					ec.headerControl('otp');
				}
			}else{
				//TODO:show error
				ec.ekycMethodErrMsgView = true;
				ec.bioMethodErrorMsg = 'Please select an authentication method';
			}
		};
		
		var deviceUrl = [];
		var deviceConfig = [];
		//Fetch url and config XML
		getDeviceConfig = function() {
			var promise = rps.getResponse("ekyc/getDeviceConfig");
    		promise.then(
    				function(configObj) {
    					var resp = configObj.data;
    					if(!rps.isEmpty(resp) && resp.length > 0){
    						for(urls = 0; urls < resp.length; urls++){    							
    							deviceUrl.push(resp[urls].captureUrl);
    							deviceConfig.push(resp[urls].captureConfig);
    						}
    					}else{
    						bootbox.alert({
    							message:"Unable to get device configuration.",
    							backdrop: true
    	    				});
    					}
    				},function(errorResp){
    					bootbox.alert({
    						message:"Something went wrong. Please try again.",
    						backdrop: true
        				});
    				}
    		);
		};
		
		//Initiate Bio Capture
		ec.validateKycBio = function() {
			getJSONCapture(0,function (err, deviceData) {
				 if (err != null) {
					 bootbox.alert({
							message:"Unable to capture fingerprint.",
							backdrop: true
	    				});
				 } else {
					 if(
								rps.isEmpty(mobile) || rps.isEmpty(loginMob)
								|| rps.isEmpty(ec.aadhaarBio)
						){
							//throw error
							bootbox.alert({
								message:"Something went wrong. Please try again.",
								backdrop: true
		    				});
						}else{
							var data = {};
							data.aadhaarnumber = enc.enc(ec.aadhaarBio);
							data.userId = enc.enc(mobile);
							data.loggedInUserId = enc.enc(loginMob);
							data.data = deviceData;
							var promise = rps.postResponse("ekyc/bio-validate",data);
				    		promise.then(function(custData) {
				    			
				    			chkSession(custData);
				    			var resp = custData.data;
				    			
				    			if ( resp == "" || resp == null || resp == undefined ) {
				    				bootbox.alert({
			    						message:"Unable to get response. Server error",
			    						backdrop: true
			        				});
				    			}else{
				    				if(!rps.isEmpty(resp.message) && rps.isEmpty(resp.code)){
				    					bootbox.alert({
				    						message:"Verification response: " + resp.message,
				    						backdrop: true,
				    						callback: function(){
				    							ec.toHomePage();
				    						}
				        				});
				    				}else{
				    					bootbox.alert({
				    						message:"Verification error: " + resp.message,
				    						backdrop: true
				        				});
				    				}
				    			}
				    		},
				    		function(error) {
				    			bootbox.alert({
									message:"Something went wrong. Please try again.",
									backdrop: true
			    				});
				    		});
						}
				 }
			 });

						
					
		};
		
		var deviceCount = 0;
		var getJSONCapture = function (count,callback) {
		 var xhr = new XMLHttpRequest();
		 xhr.open('CAPTURE', deviceUrl[count], true);
		 xhr.responseType = 'text'; //json
		 deviceCount = deviceCount + 1;
		 xhr.onload = function () {
			 var status = xhr.status;
			 if (status == 200) {
				 callback(null, xhr.response);
			 } else {
				 callback(status);
			 }
		 };
		 xhr.onabort = function(){
			 if(deviceUrl.length >= deviceCount){
				 getJSONCapture(deviceCount,callback);
			 }else{
				 bootbox.alert({
						message:"Unable to connect device. Connection abort.",
						backdrop: true
					});
			 }
		 };
		 xhr.onerror = function(){
			 
			 if(deviceUrl.length >= deviceCount){
				 getJSONCapture(deviceCount,callback);
			 }
			 else{
				 bootbox.alert({
						message:"Unable to connect device. Connection error.",
						backdrop: true
					});
			 }
			 
	 
		 }
		 xhr.send(deviceConfig[count]);
		 
		};
		
		ec.generateKycOtp = function() {
			if(
					rps.isEmpty(mobile) || rps.isEmpty(loginMob)
					|| rps.isEmpty(ec.aadhaarOtp)
			){
				//throw error
			}else{
				var data = {};
				data.aadhaarnumber = enc.enc(ec.aadhaarOtp);
				data.userId = enc.enc(mobile);
				data.loggedInUserId = enc.enc(loginMob);
				
				var promise = rps.postResponse("ekyc/otp-generate",data);
	    		promise.then(function(custData) {
	    			
	    			chkSession(custData);
	    			var resp = custData.data;
	    			
	    			if ( resp == "" || resp == null || resp == undefined ) {
	    				bootbox.alert({
    						message:"Unable to get response. Server error",
    						backdrop: true
        				});
	    			}else{
	    				if(!rps.isEmpty(resp.message) && rps.isEmpty(resp.code)){
	    					bootbox.alert({
	    						message:"Verification response: " + resp.message,
	    						backdrop: true
	        				});
	    					ec.custEkycOtpValidateSection = true;
	    					ec.custEkycOtpGenerateSection = false;
	    				}else{
	    					bootbox.alert({
	    						message:"Verification error: " + resp.message,
	    						backdrop: true
	        				});
	    				}
	    			}
	    		},
	    		function(error) {
	    			bootbox.alert({
						message:"Something went wrong. Please try again.",
						backdrop: true
    				});
	    		});
			}
		};
		
		ec.validateKycOtp = function() {
			if(
					rps.isEmpty(mobile) || rps.isEmpty(loginMob)
					|| rps.isEmpty(ec.otpValue)
			){
				//throw error
			}else{
				var data = {};
				data.aadhaarnumber = enc.enc(ec.aadhaarOtp);
				data.otp = enc.enc(ec.otpValue);
				data.userId = enc.enc(mobile);
				data.loggedInUserId = enc.enc(loginMob);
				
				var promise = rps.postResponse("ekyc/otp-validate",data);
	    		promise.then(function(custData) {
	    			
	    			chkSession(custData);
	    			var resp = custData.data;
	    			
	    			if ( resp == "" || resp == null || resp == undefined ) {
	    				bootbox.alert({
    						message:"Unable to get response. Server error",
    						backdrop: true
        				});
	    			}else{
	    				if(!rps.isEmpty(resp.message) && rps.isEmpty(resp.code)){
	    					bootbox.alert({
	    						message:"Verification response: " + resp.message,
	    						backdrop: true,
	    						callback: function(){
	    							ec.toHomePage();
	    						}
	        				});
	    				}else{
	    					bootbox.alert({
	    						message:"Verification error: " + resp.message,
	    						backdrop: true
	        				});
	    				}
	    			}
	    		},
	    		function(error) {
	    			bootbox.alert({
						message:"Something went wrong. Please try again.",
						backdrop: true
    				});
	    		});
			}
		};
		
		ec.toHomePage = function(){
			var urlScheme = $location.absUrl().split(":")[0];
			var url = urlScheme+"://" + $window.location.host + "/portal/remittance/home";
			$window.location.href = url;
		};
}]);
