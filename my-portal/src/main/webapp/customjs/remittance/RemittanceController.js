app.controller('remittanceController',[
		'$scope',
		'$http',
		'RemittancePromiseService',
		function($scope,$http,RemittancePromiseService) {
			
			
			//Start Remove Two-Factor Authentication
			//$scope.validUser=false;
			//End Remove Two-Factor Authentication
			$scope.loginerror="";
			$scope.showLoginError=false;
			var mycounter = RemittancePromiseService.resendOtpTimeoutInSec().timeoutInSeconds;		
			//Start Remove Two-Factor Authentication
			/*$scope.ValidateLogin = function(){
			//	alert("Hii.validate user called..");
				var jsonData={
						'userId':$scope.loginId,
						'passwordHash':sha256($scope.loginpassword)
				};
				var promise = RemittancePromiseService.postResponse('/portal/login/validateUser',jsonData);
				promise.then(
			          function(payload) { 
			              console.log("From promise Valid User: " + payload.data);
			  //            alert("Hii.Generate Otp Called");
			              $scope.validUser=true;
			              $scope.showLoginError=false;
			              $scope.mobile=payload.data.mobileNumber;
			          },
			          function(errorPayload) {
			        	  $scope.showLoginError=true;
			        	  $scope.loginpassword="";
			        	  $scope.loginerror="Invalid mobile and/or password.";
			              console.log("failure loading "+ errorPayload);
			          });
			}*/	
			//End Remove Two-Factor Authentication
			
			// Forgot Password
			$scope.forgotPwd = function() {
				
				var mobilePattern = /^[123456789]\d{9}$/;
				var custMobile = "";
				swal({
					  title: 'Forgot Password',
					  input: 'text',
					  inputPlaceholder: 'Enter your Mobile No',
					  inputAttributes: {'maxlength': 10, 'oncopy':'return false', 'onpaste':'return false'},
					  showCancelButton: true,
					  confirmButtonText: 'Proceed',
					  showLoaderOnConfirm: true,
					  preConfirm: (text) => {
						  if (text.search(mobilePattern)) {
					    	  swal.showValidationError("Please enter a valid Mobile number");
					      }
					      else {
					    	  return new Promise((resolve) => {
					    		  // generate otp
					    		  var promise = RemittancePromiseService.postResponseWithoutSession("/portal/login/generate-forgot-otp/" + text, null);
					    		  promise.then(function(payload) {
					    			  if (payload.data != null) {
					    				  var status = payload.data.status;
					    				  if (status === "SUCCESS") {
					    					  custMobile = text;
					    					  resolve(status);
					    				  }
					    				  else {
					    					  resolve(payload.data);
					    				  }
					    			  }
					    		  }, function(error) {
					    			  console.log("Errror:: " + error);
					    		  });
					    	  })
					      }
					  },
					  allowOutsideClick: () => !swal.isLoading()
				}).then((result) => {
					if (result.value === "SUCCESS") {
						var boton = "button";
						var counter = mycounter;
						var prompt = swal({
							  title: 'Forgot Password   ',
  							  html: '<small><a id="download" href="javascript:resendOtp('+custMobile+',false);" style="display:none">Resend OTP</a>'+
  							  '<a id="voiceOtp" href="javascript:resendOtp('+custMobile+',true);" style="display:none">On Call OTP</a>'+
  							  '<span id="notice"> (Resend in'+ counter +')</span></small> ',
							  input: 'password', 
							  inputPlaceholder: 'Enter OTP',
							  inputAttributes: {'maxlength': 6, 'oncopy':'return false', 'onpaste':'return false'},
							  showCancelButton: true,
							  confirmButtonText: 'Validate',
							  showLoaderOnConfirm: true,
  							  onOpen: () => {
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
   			 					});
  								
  							  },
							  allowOutsideClick: () => !swal.isLoading(),
							  preConfirm: (text) => {
								  if (text.search(/^[0-9]{6}$/)) {
									swal.showValidationError("Please enter a valid OTP");
								  }
								  else {
									  return new Promise((validate) => {
										  // Validate OTP
										  var jsonData = {
												  "mobileNo": custMobile,
												  "otp": createHash(text)
										  };
										  var promise = RemittancePromiseService.postResponseWithoutSession("/portal/login/validate-forgot-otp", jsonData);
										  promise.then(function(payload) {
											  if (payload.data != null && payload.data == true) {
												  // show input password fields
												  validate(true);
											  }
											  else {
												  swal.showValidationError("Wrong OTP");
												  validate();
											  }
										  }, function(error) {
											  swal('Failed!', 'Something Went Wrong. Try Again', 'error');
										  });
									  });
								  }
							  }
						  }).then((result) => {
							  counter = 0;
							  if (result.value == true) {
								  swal({
									  title: 'Reset Password',
									  html: '<input id="newPwd" class="swal2-input" type="password" placeholder="Enter New Password" maxlength="10" oncopy="return false" onpaste="return false">' +
									  		'<input id="cnfNewPwd" class="swal2-input" type="password" placeholder="Repeat New Password" maxlength="10" oncopy="return false" onpaste="return false">',
									  focusConfirm: false,
									  showCancelButton: true,
									  preConfirm: () => {
										  var pwd = $('#newPwd').val();
										  var cnfPwd = $('#cnfNewPwd').val();
										  if (pwd.search(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[0-9])[A-Za-z\d$]{6,10}$/)) {
											  swal.showValidationError("Password should be alphanumeric and 6 to 10 characters in length");
										  }
										  else if (pwd != cnfPwd) {
											  swal.showValidationError("Password Mis-match");
										  }
										  else if(pwd === cnfPwd) {
											  return new Promise((changePwd) => {
												  var jsonData = {
													  "mobileNo": custMobile,
													  "newPasswordHash": createHash(pwd)
												  };
												  var promise = RemittancePromiseService.postResponseWithoutSession("/portal/login/reset-forgot-password", jsonData);
												  promise.then(function(responseText) {
													  if (responseText != null) {
														  changePwd(responseText.data);
													  }
													  else {
														  swal('Failed!', 'Something Went Wrong. Try Again', 'error');
													  }
												  }, function(error) {
													  swal('Failed!', 'Something Went Wrong. Try Again', 'error');
												  });
											  });
										  }
										  else {
											  swal('Failed!', 'Something went wrong. Try Again', 'error');
										  }
									  }
								  }).then((result) => {
									  if (result.value == true) {
										  swal('Success', 'Password Change Successfully<br/>Please login with your new Password', 'success');
									  }
									  else if (result.dismiss === 'cancel') {
										  swal('Failed!', 'Operation Cancelled', 'error');
									  }
									  else {
										  swal('Failed!', 'Something went wrong. Try Again', 'error');
									  }
								  });
							  }
							  else {
								  swal('Failed!', 'Password Change Failed', 'error');
							  }
						  });
					}
					else {
						swal('Failed!', result.value.desc, 'error');
					}
				});
			}
			
			createHash = function(otp) {
	    		try {
					var otpHash = sha256(otp);
					return otpHash;
				} catch (e) {
					alert(e);
				}
	    	};
	    	
	    	// Resend Otp
	    	resendOtp = function(mobile,isVoiceCall) {
				var promise = RemittancePromiseService.postResponseWithoutSession("/portal/login/resendOtp?mobile="+mobile+"&action=IEO_FORGET_PASSWORD&isVoiceCall="+isVoiceCall);
				promise.then(function(response) {
					var status = response.data;
					$scope.status = status;
				});
			}
			
			$(document).ready(function(){
			    $('#login-username').keypress(function(){
			    	$scope.showLoginError=false;
			    });
			    $('#login-password').keypress(function(){
			    	$scope.showLoginError=false;
			    });
			});
		}	
	]);