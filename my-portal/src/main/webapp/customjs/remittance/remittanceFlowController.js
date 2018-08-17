app.controller('remittanceFlowController',[
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
	 function($location,$scope,$timeout,$http,remittanceService,RemittancePromiseService,$window,$cookies,datatable,$rootScope){
	
    	 var apiTokenCookie = $cookies.get('API-TOKEN');
    	 
    	 $scope.custMobile = true;
    	 $scope.custProfile = false;
    	 $scope.addCust = false;
    	 $scope.beneProfile = false;
    	 $scope.addBene = false;
    	 $scope.benehead = false;
    	 $scope.entercust = true;
    	 $scope.checkcust = false;
    	 $scope.ifscList = false;
    	 $scope.dataTableDiv = false;
    	 $scope.rrn = "NA";
    	 var mycounter = RemittancePromiseService.resendOtpTimeoutInSec().timeoutInSeconds;
    	 //var beneOtpCounter = 60;
			
    	 var remitterMobileNo = "";
    	 var custId = 0;
    	 var bnkDetails ="";
    	 var bankId="";
    	    	 
       	 var isEkycEnabled = false;
    	 isEkycEnabled= RemittancePromiseService.getResponse("profile/isKycSupportEnabled");
   		 isEkycEnabled.then(function(kyc) {
   			 $scope.isKycEnabled=kyc.data;
 		 });
    	 
    	 
		    	
    	 // To show Datepicker
    	 $( "#dob").datepicker({
    	 		yearRange: "1900:+0",
    	        changeMonth: true,
    	        changeYear : true,
    	        maxDate: "-18Y",
    	        dateFormat : "dd-mm-yy",
    	        onSelect: function(dob) {
    	        	$scope.dob = dob;
    	            $scope.$apply();
    	        }
    	 });
    	 
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
    	 
    	 $scope.getDetails = function() {
    		 $scope.getDetailsAndVerifyAccount(null);
    	 }
    	 
    	 // Fetch Customer details
    	 $scope.getDetailsAndVerifyAccount = function(benefId) {
    		var mobile = $scope.mobile;
    		var loginMob = $('#loginUser').text();
    		if(loginMob == "" || loginMob == null || loginMob === undefined || mobile == "" || mobile == loginMob)	{
    			$scope.ieoErrMsgView=true;
    			$scope.errorMsg="Logged in IEO should not be the remitter.";
    		}else{
    			var promise = getCustProfile(mobile);
         		promise.then(function(custData) {     			
         			chkSession(custData);
         			var resp = custData.data;     			
         			if ( resp == "" || resp == null || resp == undefined ) {
         					$scope.mobileNo = mobile;
     						$scope.todisable = true;
     						getBanksDetail();
     						$scope.addCust = true;
     						$scope.custMobileForm.$invalid = true;
     				}
         			else {
         				// show customer details along with beneficiary list
         				$scope.custDetails = resp;
         				$scope.custProfile = true;
         				$scope.custMobile = false;
         				remitterMobileNo = resp.telephone1;
         				// setting customer details
         		    	$scope.benehead = true;
         				$scope.custProfile = resp;
         				$scope.entercust = false;
         		    	$scope.checkcust = true;
         				//Get Customer Available Txn Limit
         				getTxnLimit(mobile);
         				
         				// Load beneficiary profile
         				var promise = getBeneficiaryDetails(mobile);
         				promise.then(function(resp) {
         					chkSession(resp);
         					var details = resp.data;
     						if ( !RemittancePromiseService.isEmpty(details) ) {
     							$scope.addBene = false;
     							$scope.beneList = details;
     							$scope.beneProfile = true;
     							if (benefId != null){
     								for (var tempIdx in $scope.beneList) {
     									if ($scope.beneList[tempIdx] != null && $scope.beneList[tempIdx].beneId == benefId){
     										$scope.verifyAccount($scope.beneList[tempIdx],true);
     										break;
     									}
     								}
     							}
     						}
     						else {
     							$scope.beneList = [];
     							$scope.addBene = true;
     							getBanksDetail();
     						}
     					},
     					function(error) {
     						console.log("Error in loading beneficiary..." + error);
     					});
         				$scope.beneProfile = true;
         			}
         		},
         		function(error) {
         			console.log("Failure to load customer profile: " + error);
         			bootbox.alert("Something went wrong. Please try again.");
         		});  			
    		
    		}//end else
		}
    	
    	
    	 
    	 //This is to get the Available Transaction Limit
    	 function getTxnLimit(mobile){
    		 var txnLimitPromise = RemittancePromiseService.getResponse('transaction-facade/getAvailableTxnLimit?mobile='+mobile);
			txnLimitPromise.then(function(txnLimit) {
				chkSession(txnLimit);
				$scope.avlTxnLimit = txnLimit.data;    					
			},
			function(error) {
				console.log("Error in getAvailableTxnLimit..." + error);
			});
    	 
    	 }
    	 //Reset the Transaction Limit
    	 $scope.resetAvlTxnLimit = function(){
    		 var mobile = $scope.custDetails.telephone1;
    		 getTxnLimit(mobile);
    	 };
    	 
    	// Load Customer Profile
    	getCustProfile = function(val) {
    		if ( !RemittancePromiseService.isEmpty(val) ) {
				var promise = RemittancePromiseService.getResponse("profile/custProfile/" + val);
				return promise;
			}
		}
    	
    	// Load Beneficiary Profile
    	getBeneficiaryDetails = function(custMobile) {
    		if ( !RemittancePromiseService.isEmpty(custMobile) ) {
				var promise = RemittancePromiseService.getResponse("profile/beneDetails/" + custMobile);
				return promise;
			}
		}
    	
    	// Add Customer
    	var addCust = true;
    /*	$scope.addCustomer = function(addCustForm) {
    	if(addCust){
    		addCust=false;
    		var dob = $scope.dob;
			var res = dob.split("-");
			var finalDob = res[2] + "" + res[1] + "" + res[0];
		    "aadhaarNo" : $scope.aadharNo
			var jsonData = {
				"telephone1" : $scope.mobileNo,
				"firstName" : $scope.firstName,
				"dob" : finalDob,
				"pincode" : $scope.pincode				
			};
			var promise = RemittancePromiseService.postResponse("profile/custProfile", jsonData);
			promise.then(function(payload) {
				chkSession(payload);
				
				if (payload.data == true) {
					addCust=true;
			    	$scope.custMobile = true;
			    	$scope.custProfile = false;
			    	$scope.addCust = false;
			    	$scope.mobile = angular.copy($scope.mobileNo);
			    	bootbox.alert('Customer Created Successfully', function() {
			    		$scope.resetForm(addCustForm);
			    		$scope.getDetails();
			    	});
				}
				else {
					addCust=true;
					bootbox.alert("Customer Creation Failed. Please try again.");
				}
				return false;
			},
    		function(error) {
				addCust=true;
				bootbox.alert("Something went wrong. Please try again.");
				return false;
    		}); 
		} //end if(addCust)
     }*/
    	
    		
    	$scope.addCustomer = function(otp) {
    	 
    		//if(addCust){
    			addCust=false;
    			var dob = $scope.dob;
				var res = dob.split("-");
				var finalDob = res[2] + "" + res[1] + "" + res[0];
		    
				var jsonData = {
					"telephone1" : $scope.mobileNo,
					"firstName" : $scope.firstName,
					"dob" : finalDob,
					"pincode" : $scope.pincode,
					"aadhaarNo" : $scope.aadharNo
				};
			var promise = RemittancePromiseService.postResponse("profile/custProfile?otp="+sha256(otp), jsonData);
			promise.then(function(payload) {
				chkSession(payload);
				
				if (payload.data == true) {
			    	$scope.custMobile = true;
			    	$scope.custProfile = false;
			    	$scope.addCust = false;
			    	$scope.mobile = angular.copy($scope.mobileNo);
			    	bootbox.alert('Customer Created Successfully', function(){
			    		$scope.addBene = true;
			    		$scope.getDetails();
			    		bootbox.hideAll();
			    	});
			    	//bootbox.hideAll();
				}
				else {
					bootbox.alert("OTP mismatch");
				}
				return false;
			},
    		function(error) {
				bootbox.alert("OTP mismatch");
				return false;
    		});
    		//}
		}
    	
    	// Removing OTP validation for Adding Customer
    	$scope.initiateCustomerOTP = function(addCustForm) {
    		var mobile = $scope.mobileNo;
    		var customerPromise = RemittancePromiseService.putResponse("profile/reverifyOtp?mobile=" + mobile + "&isCustomer=true");
    		customerPromise.then(function(response) {
    			chkSession(response);
    			
    			if (response.data) {
    				addCustForm.$setPristine(); //to disable Register button after first hit
    				var counter = mycounter;
    				var prompt = bootbox.prompt({
    					closeButton: false,
    					title: "Validate OTP <button type=\"button\" class=\"btn btn-link\" id=\"download\" onclick=\"resendOtp("+mobile+",'ADD_CUSTOMER',null,false)\" style=\"display: none;margin-left:260px;padding-right:0px;\">Resend OTP</button>"+
    					"<button type=\"button\" class=\"btn btn-link\" id=\"voiceOtp\" onclick=\"resendOtp("+mobile+",'ADD_CUSTOMER',"+mobile+",true)\" style=\"display: none;margin-left:260px;padding-right:0px;\">On Call OTP</button>"+
    					"<span class=\"pull-right\" style=\"margin-left:244px\" id=\"notice\"> (Resend in 60)</span>",
    					inputType: 'otp',
    					callback: function (otp) {
    						//counter = 0;
						if (otp != null) {
							if (otp != "" && otp != undefined) {
							$scope.addCustomer(otp);
								return false;
							}
							else {
									bootbox.alert("Please enter the OTP");
									return false;
								}
			  			}else{
		    					counter = 0;
								bootbox.hideAll();
    					}
    					}
    				});
    				
    				prompt.init(function(){
    		    	    var id = setInterval(function() {
    		    	       counter--;
    		    	       if(counter > 0) {
    		    	            var msg = '(Resend in ' + counter + ')';
    		    	            $('#notice').text(msg);
    		    	       } else {
    		    	            $('#notice').hide();
    		    	            $('#download').show();
    		    	            clearInterval(id);
    		    	      }
    		    	    }, 1000);
    				});
    				
    				$("#download").click( function(){
 					   var count = mycounter;
 					   var id = setInterval(function() {
 					     count--;
 					      if (count > 0) {
 					         $('#download').hide();
 					         var msg = '(Resend in ' + count + ')';
  		    	            $('#notice').text(msg);
  		    	            $("#notice").show();
 					      }
 					      if (count === 0) {
 					    	  $('#notice').hide();
   		    	              $('#download').hide();
   		    	              $('#voiceOtp').show();
   		    	              clearInterval(id);
 					       }
 					     }, 1000);
 					});
    				
    				$("#voiceOtp").click( function(){
 					   var count = mycounter;
 					   var id = setInterval(function() {
 					      	  $('#notice').hide();
   		    	              $('#download').hide();
   		    	              $('#voiceOtp').hide();
   		    	              clearInterval(id);
 					      }, 1000);
 					}							
					);
    				
    			}
    			else {
    				bootbox.alert("OOPS!! Something went wrong");
    			}
    		},
    		function(error) {
    			console.log("Reverify Otp Failed.." + error);
    			bootbox.alert("Something went wrong. Please try again");
    		});
    	}

    	// Resend Otp
    	resendOtp = function(mobile,action,accNo,isVoiceCall) {
			var promise = RemittancePromiseService.postResponse("profile/resendOtp?mobile="+mobile+"&action="+action+"&accountNo="+accNo+"&isVoiceCall="+isVoiceCall);
			promise.then(function(response) {
				chkSession(response);
				var status = response.data;
				$scope.status = status;
			});
		}
    	    	
    	
    	// show add Beneficiary form 
    	$scope.showAddBene = function() {
    		if($scope.addBene == true) {
    			$scope.addBene = false;
    			addBene=false;	
    		}
    	   	else {
    	   		addBene=true;	
    	   		$scope.addBene = true;
    	   		$scope.beneBankName="";
    	   		getBanksDetail();
    	   		$('#beneBankName').get(0).selectedIndex = 0;
    	   		$scope.beneIfsc="";
    	   	}
		}
    	
    	// Add Beneficiary
    	var addBene = true;
    	$scope.addBeneficiary = function(custId, addBeneForm) {
			if(addBene){
			var bankPromise = getBranchDetails($scope.beneIfsc);
			bankPromise.then(function(payload) {
				addBene=false;
				chkSession(payload);
    			
				var mobile = $scope.custDetails.telephone1;
				var bankData = payload.data;
				if (bankData != null) {
					var branchId = bankData.id;
					var jsonData = {
					  "accountNo": $scope.beneAccNo,
					  "beneName": $scope.beneName,
					  "beneNickName": $scope.beneNickName,
					  "branchId": branchId,
					  "customerId": custId,
					  "mobile": $scope.beneMobile
					};
					
					var promise = RemittancePromiseService.postResponse("profile/beneProfile",jsonData);
					promise.then(function(reply) {
				
						chkSession(reply);
						
						var resp = reply.data;
						var accNo = $scope.beneAccNo;
						if (resp.body.beneId > 0) {
							addBene=true;
							bootbox.hideAll();	
							$scope.verifyAccount(resp.body,true);
							//$scope.getDetailsAndVerifyAccount(resp.body.beneId);
						}else {
							bootbox.alert(resp.body.message);
						}
						$scope.resetBeneForm(addBeneForm);
						$scope.getDetails();
						addBene = true;
					},
					function(error) {
						addBene=true;
						console.log("Failure to add beneficiary profile: " + error);
						bootbox.alert("Something went wrong. Try Again");
					});
				}
				else {
					addBene=true;
					bootbox.alert("Cannot fetch Bank Details for the given IFSC Code");
				}
			});
		}//end if(addBene)
    }
    	
    	//To Delete Beneficiary with Otp
    	$scope.deleteBeneOTP = function(beneId) {
    		$('.icon-close').hide();
    		var mobile = $scope.custDetails.telephone1;
    		var customerPromise = RemittancePromiseService.postResponse("profile/generateOtpForDeleteBene?mobile=" + mobile);
    		customerPromise.then(function(response) {
    			//Session timeout issue Start	
    			/*if(response.status===200 && response.data.toString().includes("<!DOCTYPE")){
					var urlScheme = $location.absUrl().split(":")[0];
					var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
					$window.location.reload();
					//$window.location.href = url;
					//sessionExpired= true;
				}*/
    			
    			chkSession(response);
    			
    			if (response.data) {
    				var counter = mycounter;
    				var prompt = bootbox.prompt({
    					closeButton: false,
    					title: 'Validate OTP <button type="button" class="btn btn-link" id="download" onclick=resendOtp('+mobile+',"DELETE_BENE",null,false) style="display: none;margin-left:260px;padding-right:0px;">Resend OTP</button>'+
    					'<button type="button" class="btn btn-link" id="voiceOtp" onclick=resendOtp('+mobile+',"DELETE_BENE",null,true) style="display: none;margin-left:260px;padding-right:0px;">On Call OTP</button>'+		
    					'<span class="pull-right" style=\"margin-left:244px\" id="notice"> (Resend in '+counter+')</span>',
    					inputType: 'otp',
    					callback: function (otp) {
    						counter = 0;
    						if (otp != null) {
	    						if (otp != "" && otp != undefined) {
	    							$scope.deleteBene(mobile, beneId, otp);
	    						}else{
	    							$('.icon-close').show();
	    						}
    						}else{
    							$('.icon-close').show();
    						}
    					}
    				});
    				prompt.init(function(){
    		    	    var id = setInterval(function() {
    		    	       counter--;
    		    	       if(counter > 0) {
    		    	            var msg = '(Resend in ' + counter + ')';
    		    	            $('#notice').text(msg);
    		    	       } else {
    		    	            $('#notice').hide();
    		    	            $('#download').show();
    		    	            clearInterval(id);
    		    	      }
    		    	    }, 1000);
    				});
    				
    				$("#download").click( function(){
 					   var count = mycounter;
 					   var id = setInterval(function() {
 					     count--;
 					      if (count > 0) {
 					         $('#download').hide();
 					         var msg = '(Resend in ' + count + ')';
  		    	            $('#notice').text(msg);
  		    	            $("#notice").show();
 					      }
 					      if (count === 0) {
 					    	  $('#notice').hide();
   		    	              $('#download').hide();
   		    	              $('#voiceOtp').show();
   		    	              clearInterval(id);
 					       }
 					     }, 1000);
 					});
    				
    				$("#voiceOtp").click( function(){
 					   var count = mycounter;
 					   var id = setInterval(function() {
 					      	  $('#notice').hide();
   		    	              $('#download').hide();
   		    	              $('#voiceOtp').hide();
   		    	              clearInterval(id);
 					      }, 1000);
 					}							
					);
    				
    			}
    			else {
    				bootbox.alert("OOPS!! Something went wrong");
    			}
    		},
    		function(error) {
    			console.log("Otp Generation Failed.." + error);
    			bootbox.alert("Something went wrong. Please try again", function(){$('.icon-close').show();});
    		});
    	}
    	
    	// Delete Beneficiary
    	$scope.deleteBene = function(mobile, beneId, otp) {
    		var promise = RemittancePromiseService.putResponse("profile/beneProfile?otp=" + sha256(otp) + "&beneId=" + beneId + "&custMobile=" + mobile + "&isDeletedBene=true");
    		promise.then(function(beneResponse) {
    			chkSession(beneResponse);
    			$scope.getDetails();
    			//bootbox.alert("Beneficiary deleted successfully", function(){$scope.getDetails();});
    		},
    		function(error) {
    			console.log("Failure to delete beneficiary: " + error);
    			if(error.status===401){
    				bootbox.alert("OTP mismatched.", function(){$('.icon-close').show();$('body').css('padding-right', '0');});
    			}else if(error.status===-1 || error.status===408){
    				var urlScheme = $location.absUrl().split(":")[0];	
    				var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
					$window.location.href = url;
    			}

				
    		});
    	}
    	
    	var acceptTxn = true;
    	// Initiate Remittance
	    	$scope.inititateRemittance = function(amount, beneId,key) {
	    		
    		//Check if previous request is completed
    		if(acceptTxn){
	    		var bene;
	    		
	    		acceptTxn = false;
	    		//Disableing txn init button
	    		var txnInitBtn = document.getElementById(key);
	    		txnInitBtn.style.visibility = 'hidden';
	    		
				for (var tempIdx in $scope.beneList) {
					if ($scope.beneList[tempIdx] != null && $scope.beneList[tempIdx].beneId == beneId){
						bene = $scope.beneList[tempIdx];
						break;
					}
				}
	    		
	    		fetchUpdTxnDetails = function(id, isStaged, startTime){
	    			var nowMillis = (new Date()).getTime();
	    			if ((nowMillis-startTime)>80000){/*
	    				$('#remittanceStatusModal').modal('hide');
	    				bootbox.alert("Timeout. Please check statement for details. Reference ID:"+respTxnData.data.custRefId, function() {$('input#amount_'+beneId).val(undefined);});
	    			*/
	    			
	    				var txnPromise = RemittancePromiseService.getResponse("transaction-facade/fetchRemittance?txnId=" + id + "&isStaged=" + isStaged);
	    				$('#remittanceStatusModal').modal('hide');
	    				getTxnLimit($scope.custDetails.telephone1);
	    				txnPromise.then(function(respTxnData){
	    					chkSession(respTxnData);
	        				if (respTxnData != null && respTxnData != undefined 
	        						&& respTxnData.data != null && respTxnData.data != undefined){
	            				bootbox.alert("Timeout. Please check My Transactions for details. Reference ID: "+respTxnData.data.custRefId, function() {$('input#amount_'+beneId).val(undefined);$rootScope.$emit("ResetWallet", {});});
	            				return;
	        				}
	        			},
	        			function(error) {
	        				$rootScope.$emit("getCount", {});
	        				console.log("Failure to Fetch Txn" + error);
	            		});
	    			}
	    			else {
	        			var txnPromise = RemittancePromiseService.getResponse("transaction-facade/fetchRemittance?txnId=" + id  + "&isStaged=" + isStaged);
	        			txnPromise.then(function(respTxnData){
	            			chkSession(respTxnData);
	
	        				if (respTxnData != null && respTxnData != undefined 
	        						&& respTxnData.data != null && respTxnData.data != undefined 
	        						&& (respTxnData.data.status == 'FIN_TXN_DEEMED'
	        						|| respTxnData.data.responseCode == 'SUCCESS' 
	        						|| respTxnData.data.responseCode == 'FAILURE_FIN_TXN_FAIL'
	        						|| respTxnData.data.responseCode == 'FAILURE_BANK_DOWN'
	        						|| respTxnData.data.status == 'REMITTANCE_REQUEST_STAGED')){
	        					
	                   			
	    						$('#remittanceStatusModal').modal('hide');
	    						getTxnLimit($scope.custDetails.telephone1);
	    						
	            				var ifscReturned = "";
	
	            				if (respTxnData.data.customerPaymentInstrumentType == 'ACCOUNT_IFSC'){
	            					ifscReturned = respTxnData.data.customerPaymentInstrument.substring(respTxnData.data.customerPaymentInstrument.indexOf('/')+1); 
	            				}
	                   			var showName = "";
	                   			var showTitle = "";
	                   			if (bene.verifiedAccName != undefined && bene.verifiedAccName != null && bene.verifiedAccName != ''){
	                   				showName = bene.verifiedAccName; 
	                   			}
	                   			else {
	                   				showName = bene.beneName;
	                   			}
	                   			
	                   			var showFailureReason = "";
	                   			var showContent = "<p>A/c Holder name: "+ showName +"</p><p>Bank Name: "+ bene.beneBankName +"</p><p>A/c Number: "+ bene.accountNo +"</p><p>IFSC: "+ ifscReturned;
	                   			
	        					if (respTxnData.data.responseCode == 'SUCCESS'){
	        						//Fetch RRN/UTR No for Successful transaction
	        						var promiseRRN = getRrnNo(id);
		                   			promiseRRN.then(function(resp){
										if(resp.data.financialTransactions != null && resp.data.financialTransactions.length > 0 
												&& resp.data.financialTransactions[0].rrn != null && resp.data.financialTransactions[0].rrn != ""){
											$scope.rrn = resp.data.financialTransactions[0].rrn;
										}else{
											$scope.rrn = "NA";	
										}
										
										showContent = showContent + "</p><p>RRN/UTR No: " + $scope.rrn;
		        						showTitle = "<font color='#008000'>Transaction Successful</font>";
		                    		    var dialog = bootbox.dialog({
		                    		    	closeButton: false,
		                    		        title: showTitle,
		                    		        message: showContent,
		                    		        buttons: {
						    		            dismiss: {
						    		                label: "Dismiss",
						    		                className: 'btn-indepay-info',
		                    		                callback: function() {
		                    		                	$('input#amount_'+beneId).val(undefined);
		                    		                	$rootScope.$emit("ResetWallet", {});
		                    		                	$scope.getDetails();
		                    		                }
						    		            },
						    		        	print: {
						    		                label: "Print Receipt",
						    		                className: 'btn-indepay',
		                    		                callback: function() {
		            		    		        		$scope.data = printReceipt(respTxnData.data);
		            		    		        		$scope.$apply();
		            		    		        		var promiseBD = getBranchDetails(respTxnData.data.ifsc);
		        		    		        			promiseBD.then(function(resp){
		        		    		        				$scope.bankName = resp.data.bankBranchName;
		            		    		                	$scope.data = printReceipt(respTxnData.data);
		            		    		                	//$scope.printContent($scope.data.replace('manualReplace.remittance.retrievedBankName', $scope.bankName));
		            		    		                	$scope.data = $scope.data.replace('manualReplace.remittance.retrievedBankName', $scope.bankName);
		        		    		        			});
		        		    		        			
		        		    		        			var promise1 = getRrnNo( respTxnData.data.id);
		        										promise1.then(function(resp){
		        											if(resp.data.financialTransactions != null && resp.data.financialTransactions.length > 0 
		        													&& resp.data.financialTransactions[0].rrn != null && resp.data.financialTransactions[0].rrn != "")
		        												$scope.rrn = resp.data.financialTransactions[0].rrn;
		        											else
		        												$scope.rrn = "NA";
		        											//$scope.data = printReceipt(respTxnData.data);
		        											$timeout(function() {
		        												$scope.printContent($scope.data.replace('manualReplace.remittance.retrievedRRN', $scope.rrn));
		        											}, 200); // 2 milliseconds
		        											
		        										}, function(error){
		        											$scope.rrn = "NA";
		        										});
		        		    		        			
		                		    		        	$scope.getDetails();
		                		    		        	$('input#amount_'+beneId).val(undefined);
		                		    		        	$rootScope.$emit("ResetWallet", {});
		                    		                }
						    		            }
		                    		        }
		                    		    });
		                   			}, function(error){
										$scope.rrn = "NA";
									});
	        					}
	        					else {
	        						$scope.rrn ='NA' ;
	        						showContent = showContent + "</p><p>RRN/UTR No: " + $scope.rrn;
	        						if (respTxnData.data.status == 'FIN_TXN_DEEMED'){
		        						showTitle = "<font color='#ff5722'>Transaction In-Progress</font>";
		                    		    var dialog = bootbox.dialog({
		                    		    	closeButton: false,
		                    		        title: showTitle,
		                    		        message: showContent,
		                    		        buttons: {
						    		            dismiss: {
						    		                label: "Dismiss",
						    		                className: 'btn-indepay-info',
		                    		                callback: function() {
		                    		                	$('input#amount_'+beneId).val(undefined);
		                    		                	$rootScope.$emit("ResetWallet", {});
		                    		                	$scope.getDetails();
		                    		                }
						    		            },
						    		        	print: {
						    		                label: "Print Receipt",
						    		                className: 'btn-indepay',
		                    		                callback: function() {
		            		    		        		$scope.data = printReceipt(respTxnData.data);
		            		    		        		$scope.$apply();
		            		    		        		var promiseBD = getBranchDetails(respTxnData.data.ifsc);
		        		    		        			promiseBD.then(function(resp){
		        		    		        				$scope.bankName = resp.data.bankBranchName;
		            		    		                	$scope.data = printReceipt(respTxnData.data);
		            		    		                	//$scope.printContent($scope.data.replace('manualReplace.remittance.retrievedBankName', $scope.bankName));
		            		    		                	$scope.data = $scope.data.replace('manualReplace.remittance.retrievedBankName', $scope.bankName);
		            		    		                	$scope.printContent($scope.data.replace('manualReplace.remittance.retrievedRRN', $scope.rrn));
		        		    		        			});
		        		    		        			
		        		    		        			/*var promise1 = getRrnNo( respTxnData.data.id);
		        										promise1.then(function(resp){
		        											if(resp.data.financialTransactions != null && resp.data.financialTransactions.length > 0 
		        													&& resp.data.financialTransactions[0].rrn != null && resp.data.financialTransactions[0].rrn != "")
		        												$scope.rrn = resp.data.financialTransactions[0].rrn;
		        											else
		        												$scope.rrn = "NA";
		        											$scope.printContent($scope.data.replace('manualReplace.remittance.retrievedRRN', $scope.rrn));
		        										}, function(error){
		        											$scope.rrn = "NA";
		        										});*/
		        		    		        			
		                		    		        	$scope.getDetails();
		                		    		        	$('input#amount_'+beneId).val(undefined);
		                		    		        	$rootScope.$emit("ResetWallet", {});
		                    		                }
						    		            }
		                    		        }
		                    		    });
		                    		    return;
	        						}
	            					else if (respTxnData.data.responseCode == 'FAILURE_FIN_TXN_FAIL'){
	            						showTitle = "<font color='#cd5c5c'>Transaction Failed</font>";
	            						if (respTxnData.data.financialRejectDescription != null){
	            							showFailureReason =	respTxnData.data.financialRejectDescription;
	            						}
	            						
	//            						bootbox.alert("Transaction failed. Please check My Transactions for details. Reference ID:"+respTxnData.data.custRefId, function() {$('input#amount_'+beneId).val(undefined);$rootScope.$emit("ResetWallet", {});});
	            					}
	            					else if (respTxnData.data.status == 'REMITTANCE_REQUEST_STAGED'){
	            						$rootScope.$emit("getCount", {});
	            						showTitle = "<font color='#cd5c5c'>Transaction moved to Outbox due to Low Wallet Balance</font>";
	            						if (respTxnData.data.financialRejectDescription != null){
	            							showFailureReason =	respTxnData.data.financialRejectDescription;
	            						}
	            						
	//            						bootbox.alert("Transaction failed. Please check My Transactions for details. Reference ID:"+respTxnData.data.custRefId, function() {$('input#amount_'+beneId).val(undefined);$rootScope.$emit("ResetWallet", {});});
	            					}
	            					else if (respTxnData.data.responseCode == 'FAILURE_BANK_DOWN'){
	            						showTitle = "<font color='#cd5c5c'>Transaction Failed</font>";
	            						showFailureReason = "Bank services down";
	            						
	//            						bootbox.alert("Transaction failed: Bank services down. Please check My Transactions for details. Reference ID:"+respTxnData.data.custRefId, function() {$('input#amount_'+beneId).val(undefined);$rootScope.$emit("ResetWallet", {});});
	            					}
	
	        						if (showFailureReason != null && showFailureReason.length > 0){
	        							showContent = "<p><b>"+ showFailureReason +"</b></p>" + showContent;	
	        						}
	        						
	        						var dialog = bootbox.dialog({
	                    		    	closeButton: false,
	                    		        title: showTitle,
	                    		        message: showContent,
	                    		        buttons: {
	                    		        	ok: {
	                    		                label: "Ok",
	                    		                className: 'btn-indepay-info',
	                    		                callback: function() {
	                    		                	$rootScope.$emit("ResetWallet", {});
	                    		                	$('input#amount_'+beneId).val(undefined);
	                    		                	$scope.getDetails();
	                    		                }
	                    		            }
	                    		        }
	                    		    });
	        					}
	        					return;
	        				}
	        				else {
	        					 $timeout( function(){ 
	        						 $rootScope.$emit("getCount", {});
	        						 fetchUpdTxnDetails(id, isStaged, startTime); 
	        					 }, 7000);
	        				}
	        			},
	        			function(error) {
	        				console.log("Failure to Fetch Txn " + error);
		   					$timeout( function(){ 
								 fetchUpdTxnDetails(id, isStaged, startTime); 
							}, 5000);
	            		});
	    			}
	    		}
	
	   		if ( amount == "" || amount == null || amount === undefined ) {
	    			bootbox.alert("Amount is required to initiate transaction");
	    			txnInitBtn.style.visibility = 'visible';
	    		}
	    		
	    		var jsonData = {
					 "tranAmount" : amount,
					 "remitterMobileNumber" : remitterMobileNo,
					 "beneficiaryId" : beneId.toString()
	    		};
	    		
	    		var promise = RemittancePromiseService.postResponse("transaction-facade/initiateRemittance", jsonData);
	    		promise.then(function(respData) {
	    			chkSession(respData);
	    			acceptTxn = true;
	    			
	    		    var dialog = bootbox.dialog({
	    		    	closeButton: false,
	    		        title: 'Transaction Summary',
	    		        message: "<p>Reference ID: "+ respData.data.custRefId +"</p><p>Transaction Amount: &#8377; "+ respData.data.tranAmount +"</p><p>Fee: &#8377; "+ respData.data.feeAmount +"</p><p>Total: &#8377; "+ respData.data.grossTranAmount +"</p>",
	    		        buttons: {
	    		            ok: {
	    		                label: "Proceed",
	    		                className: 'btn-indepay',
	    		                callback: function(){
	    		            		var jsonConfData = {
	    		           				 "id" : respData.data.id
	    		               		};
	    		            		var confPromise = RemittancePromiseService.postResponse("transaction-facade/confirmRemittance", jsonConfData);
	    		               		confPromise.then(function(respData) {
	    		            			chkSession(respData);
	
	    		               			//if(!sessionExpired){
	    		            				txnInitBtn.style.visibility = 'visible';
	    		               				getTxnLimit($scope.custDetails.telephone1);
	        		               			$('#remittanceStatusModal').modal('show');
	        		               			fetchUpdTxnDetails(respData.data.id,respData.data.staged,(new Date()).getTime()); 
	    		               			//}
	    		               			  		               			
	    		               		},
	    		            		function(error) {
	    		               			txnInitBtn.style.visibility = 'visible';
	    		               			if (error.data.errorMessage == "Agent wallet interaction failed") {
											bootbox.alert("Request Failed: Low Wallet Balance", function(){$('input#amount_'+beneId).val(undefined);});
										}
	    		               			else {
	    		               				bootbox.alert("Request Failed: "+error.data.errorMessage, function(){$('input#amount_'+beneId).val(undefined);});
	    		               			}
	    		               			$scope.getDetails();
	    		            		});
	    		               		
	    		                }
	    		            },
	    		        	cancel: {
	    		                label: "No Thanks!",
	    		                className: 'btn-indepay-info',
	    		                callback: function() {
	    		                	$scope.getDetails();
	    		                }
	    		            }
	    		        }
	    		    });
	    		},
	    		function(error) {
	    			txnInitBtn.style.visibility = 'visible';
	    			acceptTxn = true;
	    			console.log("Failure to Initiate Txn " + error);
	    			bootbox.alert("Request Failed: "+error.data.errorMessage, function(){$('input#amount_'+beneId).val(undefined);});
	    		});
	    	}
	    }
	    	
    	$scope.performKYC = function (){
    		bootbox.alert("Please perform eKYC first");
			return;
    	}

    $scope.verifyAccount = function(bene,isAddBene) {
    /*  if (bene.status != "ACTIVE"){
    	bootbox.alert("Please perform OTP validation first");
    	return;
    }*/
    
    //get the REMIT_VALIDATION_CHARGE 
    var charge = 0;
    var isValidateAccount = true; 
    var validationChage = RemittancePromiseService.getResponse("profile/getRemitValidationCharge");
    validationChage.then(function(val) {
    if(val.data != null && val.data != "" && val.data != undefined){
    	charge=val.data;
    	charge=charge.toFixed(2);
    }
    
    //Account Validation is not mandatory
      	var msg = "";
    	var yesBtn="";
    	var noBtn="";
    	if(isAddBene){
    		//Adding Beneficiary
    		/*titleData = "Do you want to validate your account?";*/
    		message = "Do you want to validate your account?<br></br><span style='color:red;'>Note: </span> Rs. "+charge+"  will be charged for account verification";
    		yesBtn= "Yes";
    		noBtn= "Save";
    	}else{
    		message = "Are you sure you want to verify the account. Applicable charge Rs. "+charge+" only";
    		yesBtn= "Ok"
    		noBtn= "Cancel";
    	}
    	
    	bootbox.confirm({
    		message : message,
    		onEscape : function() {
    			$('.bootbox.modal').modal('hide');
				},
			buttons: {
			    confirm: {
			    	label: yesBtn,			           
			        },
			    cancel: {
			        label: noBtn,
			    	}
			    },
			callback : function(result) {
			if (result && isValidateAccount) {
			isValidateAccount=false;
			var jsonData = {
   			 "remitterMobileNumber" : remitterMobileNo,
   			 "beneficiaryId" : bene.beneId.toString(),
   			 "validationTransaction" : true
       		};
    		$('#remittanceStatusModal').modal('show');
       		var promise = RemittancePromiseService.postResponse("transaction-facade/initiateRemittance", jsonData);
       		promise.then(function(respData) {
       			chkSession(respData);
       			$('#remittanceStatusModal').modal('hide');
       			
       			var ifscReturned = "";
       			
       			if (respData.data.paymentInstrument != null && respData.data.paymentInstrument.ifsc != null){
       				ifscReturned = respData.data.paymentInstrument.ifsc;
       			}
       			var showContent = '';
       			var details = RemittancePromiseService.getResponse("profile/getBeneProfileById/" + bene.beneId);
       				details.then(function(response){
       	       			beneProfile = response.data;
       	       		var showVerifiedName = "";
           			var showTitle = "";
           			var showEnteredName = beneProfile.beneName;
           			if (respData.data.success == true){
           				showVerifiedName = respData.data.paymentInstrument.accountHolderName;
           			}
           			if (showVerifiedName == null || showVerifiedName == undefined || showVerifiedName == 'null'){
           				showVerifiedName = '';
           			}
           			showContent = "<p>Entered name: "+ showEnteredName +"</p><p>Bank Verified name: "+ showVerifiedName +"</p><p>Bank Name: "+ beneProfile.beneBankName +"</p><p>A/c Number: "+ beneProfile.accountNo +"</p><p>IFSC: "+ ifscReturned +"</p>"; 
           			var showFailureReason = "";
           			if (respData.data.success == true){
           				bene.accountValidationStatus = true;
           				bene.verifiedAccName = respData.data.paymentInstrument.accountHolderName;
//           				bootbox.alert("Validation successful");
           				showTitle = "Validation Successful";
           			}
           			else if (respData.data.success == false && respData.data.deemed == true){
           				bene.accountValidationInProg = true;
//           				bootbox.alert("Validation In-Progress");
           				showTitle = "Validation In-Progress";
           			}
           			else {
//           				bootbox.alert("Validation Failed");
           				showContent = "<p><b>"+ respData.data.errorMessage +"</b></p>" + showContent;
           				showTitle = "Validation Failed";
           			}
           			isValidateAccount=true;
        		    var dialog = bootbox.dialog({
        		    	closeButton: false,
        		        title: showTitle,
        		        message: showContent,
        		        buttons: {
        		        	ok: {
        		                label: "Ok",
        		                className: 'btn-indepay-info',
        		                callback: function() {
        		                	$rootScope.$emit("ResetWallet", {});
        		                	$scope.addBene = false;
        		        			$scope.getDetails();
        		                }
        		            }
        		        }
        		    });
       	       		},function(error){
       	       			console.log("Error in fetching beneficiary details");
       	       		});

       		},
       		function(error) {
       			isValidateAccount=true;
       			$('#remittanceStatusModal').modal('hide');
       			console.log("Failure to validate " + error);
       			bootbox.alert("Validation Failed");
       		});
		}else if(isAddBene){
			isValidateAccount=true;
			bootbox.alert("Beneficiary added without account verification", function(){
	        	$scope.addBene = false;
	        	$scope.getDetails();
	        	bootbox.hideAll();
			});
		}			
	}
	});
    });
 }
    	
    	
    	//Reverify OTP
    	$scope.reverifyOtp = function(beneId, accountNo) {
    		var mobile = remitterMobileNo;
    		var customerPromise = RemittancePromiseService.putResponse("profile/reverifyOtp?mobile=" + mobile + "&isCustomer=false" + "&beneId=" + beneId);
    		customerPromise.then(function(response) {
    			chkSession(response);

    			if (response.data) {
    				var counter = mycounter;
    				var prompt =  bootbox.prompt({
    					closeButton: false,
    					title: "Validate OTP <button type=\"button\" class=\"btn btn-link\" id=\"download\" onclick=\"resendOtp("+mobile+",'ADD_BENE_NOT_VERIFIED',"+accountNo+",false)\" style=\"display: none;margin-left:260px;padding-right:0px;\">Resend OTP</button>"+
    					"<button type=\"button\" class=\"btn btn-link\" id=\"voiceOtp\" onclick=\"resendOtp("+mobile+",'ADD_BENE_NOT_VERIFIED',"+accountNo+",true)\" style=\"display: none;margin-left:260px;padding-right:0px;\">On Call OTP</button>"+
    					"<span class=\"pull-right\" style=\"margin-left:244px\" id=\"notice\"> (Resend in "+counter+")</span>",
    					inputType: 'otp',
    					callback: function (otp) {
    						counter = 0;
    						if (otp != null && otp != "" && otp != undefined){
    							var promise = validateOtp(otp,mobile,beneId);
    							promise.then(function(response) {
    								
    								if(response.status===200 && response.data.toString().indexOf("<!DOCTYPE") >= 0){
    									var urlScheme = $location.absUrl().split(":")[0];
    									var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
    									$window.location.reload();
    									//$window.location.href = url;
    									//sessionExpired= true;
    								}
    								if(response.data){
										//bootbox.alert("Beneficiary verified successfully", function(){
											$scope.addBene = false;$scope.getDetails();
										//});
									}
									else{
										bootbox.alert("OTP Mismatch", function(){$scope.addBene = false;$scope.getDetails();});
									}
    				    		},
    				    		function(error) {
    				    			bootbox.alert("OTP mismatched. Please reverify later to activate beneficiary.");
    				    			console.log("Otp Validation Failed.." + error);
    				    		});
    							/*if($scope.invalidOTP){
    								bootbox.alert("OTP mismatched. Please reverify later to activate beneficiary.");
    							}*/
    						}
							$scope.mobile = remitterMobileNo;
							$scope.getDetails();
    					}
    				});
    				prompt.init(function(){
    		    	    var id = setInterval(function() {
    		    	       counter--;
    		    	       if(counter > 0) {
    		    	            var msg = '(Resend in ' + counter + ')';
    		    	            $('#notice').text(msg);
    		    	       } else {
    		    	            $('#notice').hide();
    		    	            $('#download').show();
    		    	            clearInterval(id);
    		    	      }
    		    	    }, 1000);
    				});
    				
    				$("#download").click( function(){
 					   var count = mycounter;
 					   var id = setInterval(function() {
 					     count--;
 					      if (count > 0) {
 					         $('#download').hide();
 					         var msg = '(Resend in ' + count + ')';
  		    	            $('#notice').text(msg);
  		    	            $("#notice").show();
 					      }
 					      if (count === 0) {
 					    	  $('#notice').hide();
   		    	              $('#download').hide();
   		    	              $('#voiceOtp').show();
   		    	              clearInterval(id);
 					       }
 					     }, 1000);
 					});
    				
    				$("#voiceOtp").click( function(){
 					   var count = mycounter;
 					   var id = setInterval(function() {
 					      	  $('#message').hide();
   		    	              $('#download').hide();
   		    	              $('#voiceOtp').hide();
   		    	              clearInterval(id);
 					      }, 1000);
 					}							
					);
    				
    			}
    			else {
    				bootbox.alert("Wrong OTP");
    			}
    		},
    		function(error) {
    			console.log("Reverify Otp Failed.." + error);
    			bootbox.alert("Something went wrong. Please try again");
    		});
    	}

    	// validate otp
    	validateOtp = function(otp, mobileNo, benetempId){
    		var Hash = createHash(otp);
    		var promise;
    		if (benetempId == "") {
				promise = RemittancePromiseService.putResponse("profile/validateOtp?otpHash=" + Hash + "&customerMobile=" + mobileNo);
				return promise;
			}
    		else {
    			promise = RemittancePromiseService.putResponse("profile/validateOtp?otpHash=" + Hash + "&customerMobile=" + mobileNo + "&beneId=" + benetempId);
    			return promise;
    		}

    		/*promise.then(function(response) {
    			
    			if (response.data) {
    				$scope.invalidOTP = false;
    				//window.location.href = './remittanceFlow#showProfile';
    				$scope.getDetails();
    			}
    			else {
    				
    				$scope.invalidOTP = true;
    				$window.location.href = './remittanceFlow';
    			}
    		},
    		function(error) {
    			bootbox.alert("OTP mismatched. Please reverify later to activate beneficiary.");
    			console.log("Otp Validation Failed.." + error);
    		});*/
    	}
    	
    	createHash = function(otp){
    		try {
				var otpHash = sha256(otp);
				return otpHash;
			} catch (e) {
				alert(e);
			}
    	}
    	
    	// Get Banks Detail
    	getBanksDetail = function() {
			var promise = RemittancePromiseService.getResponse("profile/getBanksDetail");
			promise.then(function(response) {
				var bankList = response.data;
				$scope.bankDetailList = bankList;
			});
		}
    	
    	printReceipt = function(value){
    		$scope.printData = value;
//			var promise = getBranchDetails(value.ifsc);
//			promise.then(function(resp){
//				$scope.bankName = resp.data.bankBranchName;
//			});
			if (value.status == 'COMPLETED') {
				if (value.responseCode == 'SUCCESS') {
					value.customStatus =  "Success";
				}else if (value.responseCode == 'FAILURE_CUST_REJECT'){
					value.customStatus =  "Cancelled";
				}
				else if (value.responseCode == 'EXPIRED_TRANSACTION'){
					value.customStatus =  "Expired";
				}
				else {
					value.customStatus =  "Failed";
				}
			}else if(value.status == 'FIN_TXN_DEEMED' ){
				//value.customStatus =  "Deemed";
				value.customStatus =  'In Progress*';
			}else if(value.status =='FIN_TXN_IN_PROG'
				|| value.status =='AWAITING_CONFIRMATION'
				|| value.status =='AGENT_LIST_WORKING_IN_PROG'
				|| value.status =='AGENT_LIST_OBTAINED'
				|| value.status =='SUB_AGENT_FINALIZED'
				|| value.status =='SUB_AGENT_ON_WAY'
				|| value.status =='SUB_AGENT_REACHED'
				|| value.status =='UIN_DISPATCHED'
				|| value.status =='UIN_MATCHED'
				|| value.status =='OTP_DISPATCHED'
				|| value.status =='OTP_MATCHED'
				|| value.status =='SUB_AGENT_CONFIRMED_CASH_ACCEPTANCE'
				|| value.status =='REMITTANCE_REQUEST_ACCEPTED'){
				
				value.customStatus =  'In-progress';
			}else{
				value.customStatus = "Failed";
			}
			var printContents = $("#printable").html();
			return printContents;
    	}
    	
    	
    	// Get Bank Branch Details
    	function getBranchDetails(ifscCode) {
    		return RemittancePromiseService.getResponse("profile/getBankBranchDetails/" + ifscCode);
    	}
    	
    	//Get RRN/UTR No 
    	function getRrnNo(txnId){
    		return RemittancePromiseService.getResponse('transaction-facade/fetchTransaction?txnId=' + txnId);
    	}
    	
    	// To Reset Add Customer Form
    	$scope.resetForm = function(addCustForm) {
    		$scope.firstName = "";
    		$scope.pincode = "";
    		$scope.dob = "";
    		addCustForm.$setPristine();
		};
    	
    	// To Reset Add Beneficiary Form
    	$scope.resetBeneForm = function(addBeneForm) {
    		$('input, select').not('[type="hidden"]').val(undefined);
    		$scope.beneBankName = "";
    		addBeneForm.$setPristine();
    	};
    	
    	$('#beneBankName').on('change', function(){
			var val = $(this).val();
			var ifscVal = val.split("_");
			$('#beneIfsc').val(ifscVal[1]);
			$scope.beneIfsc = ifscVal[1];
		});
    	
    	$scope.searchIFSC = function(){
    		bnkDetails = $scope.beneBankName.split("_");
    		bankId = bnkDetails[0];
    		$scope.bnkName = bnkDetails[2];
    		$scope.dataTableDiv = false;
    		$scope.bnkBranch="";
    		$scope.bnkIfsc="";
    		$scope.bnkCity="";
    		$scope.bnkDistrict="";
    		$scope.bnkState="";
    		$scope.searchErrMsgDIV = false;
    		$('nav.navbar').css({ 'z-index' : 'auto' });
    		$('#ifscModalForm').modal('show');
    	};
    	$scope.searchIfscList = function(){
    		$scope.ifscList = true;
    		var maxEntries = "";
    		var jsonData = {
    				 "bankId" : bankId,
    				 "ifsc" : $scope.bnkIfsc,
					 "bankBranch" : $scope.bnkBranch,
					 "bankName" : $scope.bnkName,
					 "city" : $scope.bnkCity,
					 "district" : $scope.bnkDistrict,
					 "state" : $scope.bnkState,
					 "maxEntries" : maxEntries
	    		};
	    	fetchIFSCDetails(jsonData);
    	};
    	
    	$scope.ifscFormReset = function(){
    		//$scope.bnkName="";
    		$scope.bnkBranch="";
    		$scope.bnkIfsc="";
    		$scope.bnkCity="";
    		$scope.bnkDistrict="";
    		$scope.bnkState="";
    		$scope.ifscList = false;
    	};
    	
    	
    	
    	function fetchIFSCDetails(jsonData) {
    		$scope.dataTableDiv = true;
			var datatableConfig = {
				"name" : "simple_datatable",
				"columns" : [
					{
						"header" : "IFSC",
						"order" : false,
						"type" : "text",
						"property" : "ifscCode"
					},
					{
						"header" : "MICR",
						"order" : false,
						"type" : "text",
						"property" : "micr"
					},
					{
						"header" : "Branch",
						"property" : "bankBranch",
						"type" : "text",
						"order" : false													
					},
					/*{
						"header" : " Bank Name",
						"property" : "bankName",
						"order" : false,
						"type" : "text"
					}*/
					{
						"header" : "Address",
						"property" : "bankAddress",
						"type" : "text",
						"order" : false													
					},
					{
						"header" : "Contact",
						"property" : "contact",
						"type" : "text",
						"order" : false													
					},
					{
						"header" : "City",
						"property" : "city",
						"type" : "text",
						"order" : false													
					},
					{
						"header" : "District",
						"property" : "district",
						"type" : "text",
						"order" : false													
					},
					{
						"header" : "State",
						"property" : "state",
						"type" : "text",
						"order" : false													
					}
						
				],
				
				"edit":{ "active":false, "columnMode":false },
				 
				"filter" : {
					"active" : false,
					"highlight" : true,
					"columnMode" : false
				},
				"pagination" : {
					"active":false,
					"mode" : 'local',
					numberRecordsPerPageList : [ {
						number : 10,
						clazz : ''
					}, {
						number : 25,
						clazz : ''
					} ]
				},
				"order" : {
					"active":false,
					"mode" : 'local'
				},
				"mouseevents" : {
					"active" : true,
					
					"clickCallback" : function(line, data) {
						//$scope.beneBankName = "";
						$scope.beneIfsc = data.ifscCode;
						$('#ifscModalForm').modal('hide');					
					}
				}
			};
						
			$scope.ifscDatatable = datatable(datatableConfig);
			
			
			var promise = RemittancePromiseService.postResponse('transaction-facade/getIfscDetails',jsonData);
			promise.then(function(payload) {
				chkSession(payload);
				if (payload.data.length > 0) {
					$scope.searchErrMsgDIV = false;
					//datatableData = payload.data;	
					$scope.ifscDatatable.setData(payload.data);
				} else {
					$scope.searchErrMsgDIV = true;
					$scope.errorMsg = "No data found";
				}
			},

			function(errorPayload) {
				console.log("failure loading "
						+ errorPayload);
			});

		}
    
    $scope.printContent = function(content) {
    		var popupWin = window.open('', '_blank', 'width=800, height=800');
			popupWin.document.open();
			popupWin.document
					.write('<html><head><link rel="stylesheet" type="text/css" href="/portal/css/styles.css"/><link rel="stylesheet" type="text/css" href="/portal/css/bootstrap.min.css"/><script type="text/javascript" src="/portal/lib/angular-1.5.8/angular.min.js"></script></head><body onload="window.print()">'
							+ content
							+ '</body></html>');
			popupWin.document.close();
    	}
    
    $scope.updateEKYC = function(mobile){
    	//remittanceService.setJson(mobile);
       	var urlScheme = $location.absUrl().split(":")[0];
    	var url = urlScheme+"://" + $window.location.host + "/portal/remittance/ekyc?mobile="+mobile;
		$window.location.href = url;
    }

    	
}]);
