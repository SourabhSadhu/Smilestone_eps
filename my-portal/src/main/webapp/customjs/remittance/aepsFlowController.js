app.controller('aepsFlowController',[
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
    	
    	var apiTokenCookie = $cookies.get('API-TOKEN');
    	$scope.isError = false;
    	$scope.isErrorAadhaar = false;
    	$scope.isWithDrawal=false;
    	$scope.isFingerPrintCapture=false;
    	var txnTypeMsg ='';
    	var bankName = '';
    	var ieoLat = '';
    	var ieoLong = '';
    	var deviceName='';
    	var deviceSlNo ='';
    	
    	
    	$scope.printAmount='';
    	$scope.printCustRef='';
    	    	
    	var encInit = {};
	    encInit.default_key_size = "1024";
	    encInit.log = true;
    	    	
    	//use for cache the device type selection
    	$scope.cacheDeviceType = $scope.biometricDeviceList;
    	
    	//Configuration data for biometric device 
    	/*//MORPHO
    	var morphoStartPort = 11100;
		var morphoStopPort = 11120;
		var morphoUrl = 'http://127.0.0.1:';
		var morphoApi = '/rd/capture';
		
		//GEMALTO
		var gemaltoStartPort = 11099;
		var gemaltoStopPort = 11099;
		var gemaltoUrl = 'https://127.0.0.1:';
		var gemaltoApi = '/rd/capture';
		
		//START-TECH
		var starTechStartPort = 11100;
		var starTechStopPort = 11120;
		var starTechUrl = 'http://127.0.0.1:';
		var starTechApi = '/rd/capture';
		
		//TatVik
		var tatVikStartPort = 11100;
		var tatVikStopPort = 11120;
		var tatvikUrl = 'https://127.0.0.1:';
		var tatvikApi = '/rd/capture';*/
		
		var bioDevice="";
		
		/*var pidOptions = '<PidOptions ver=\"1.0\">'+'<Opts fCount=\"1\" fType=\"0\" iCount=\"\" iType=\"\" pCount=\"\" pType=\"\" format=\"1\" pidVer=\"2.0\" timeout=\"10000\" otp=\"\" wadh=\"\" posh=\"\"/>'+'</PidOptions>';*/
		
		/*var pidGemaltoOptions = "<PidOptions ver='1.0' env='P'>" +
		 "<Opts fCount='1' fType='0' iCount='0' iType='0' pCount='0' pType='0' format='0' pidVer='1.0' timeout='10000' otp='' wadh='' posh='' />" +
		 "<Demo>" +
		 "<Pi ms='' mv='' name='' lmv='' lname='' dob='' dobt='' age='' phone='' email=''/>" +
		 "<Pa ms='' co='' house='' street='' lm='' loc='' vtc='' po='' subdist='' dist='' state='' pc=''/>" +
		 "<Pfa mv='' ms='' av='' lmv='' lav=''/>" +
		 "</Demo>" +
		 "<CustOpts>" +
		 "<Param name='' value=''/>" +
		 "</CustOpts>" +
		 "</PidOptions>";*/
		
		$scope.getGmalto = function(envData,formatData){
			var env= envData != null ? envData : 'p';
			var format = formatData != null ? formatData :'0';
			
			var pidGemaltoOptions = "<PidOptions ver='1.0' env='"+env+"'>" +
			 "<Opts fCount='1' fType='0' iCount='0' iType='0' pCount='0' pType='0' format='"+format+"' pidVer='1.0' timeout='10000' otp='' wadh='' posh='' />" +
			 "<Demo>" +
			 "<Pi ms='' mv='' name='' lmv='' lname='' dob='' dobt='' age='' phone='' email=''/>" +
			 "<Pa ms='' co='' house='' street='' lm='' loc='' vtc='' po='' subdist='' dist='' state='' pc=''/>" +
			 "<Pfa mv='' ms='' av='' lmv='' lav=''/>" +
			 "</Demo>" +
			 "<CustOpts>" +
			 "<Param name='' value=''/>" +
			 "</CustOpts>" +
			 "</PidOptions>";
			
			return pidGemaltoOptions;
		}
		$scope.getDevice = function(envData,formatData){
			var env= envData != null ? envData : 'p';
			var format = formatData != null ? formatData :'0';
			
			var pidDeviceOptions = "<PidOptions ver='1.0'>"+
			"<Opts env='"+env+"' fCount='1' fType='0' format='"+format+"' pidVer='2.0'>" +
			"</Opts><Demo></Demo><CustOpts></CustOpts><Bios></Bios></PidOptions>";	
			
			return pidDeviceOptions;
		}
		
		$scope.getMorpho = function(envData,formatData){
			var env= envData != null ? envData : 'p';
			var format = formatData != null ? formatData :'0';
			
			var pidMorphoOptions = "<PidOptions ver='1.0'>"+
			"<Opts fCount='1' fType='0' format='"+format+"' pidVer='2.0' timeout='10000'/>" +
			"</PidOptions>";
			
			return pidMorphoOptions;
		}		
		
		
		//Check access authentication
    	var isAEPSServiceEnabled = false;
   		isAEPSServiceEnabled = RemittancePromiseService.getResponse("profile/isAEPSServiceEnabled");
   		isAEPSServiceEnabled.then(function(aeps) {
   			if(!aeps.data){
   				var urlScheme = $location.absUrl().split(":")[0];
   				var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
   		 		$window.location.href = url;
   		 	}else{
   		 		//load the page.
   		 		getBanksDetail();
   		 		getTxnType();
   		 		fetchBankList();
   		 		fetchBiometricDeviceList();
   		 	}
   		 });
   		 
   		//get  get MIN_DENOMINATION value  from profileController
   		var denominationValue = 100;
   		denominationValue = RemittancePromiseService.getResponse("profile/getMinDenomination");
   		denominationValue.then(function(denomination) {
   			if(denomination.data != null && denomination.data != "" && denomination.data != undefined ){
   				denominationValue = denomination.data;
   		 	}
   		 });
   		
    	//Session timeout issue Start
    	chkSession = function(responseData){
    		if(responseData.status===200 && responseData.data.toString().indexOf("<!DOCTYPE") >= 0){
    			var urlScheme = $location.absUrl().split(":")[0];
    			var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
    			$window.location.href = url;
    		}
		}
    	//Session timeout issue End
    	
    	
    	// Get Transaction type 
    	function getTxnType(){
    		var promise = RemittancePromiseService.getResponse("profile/getTransactionType");
    		promise.then(function(response) {
    			chkSession(response);
    			var transactionTypeList = response.data;
				$scope.transactionTypes = transactionTypeList;
    		});
    	} 
						
		// Get Banks Detail
    	function getBanksDetail(){
			var promise = RemittancePromiseService.getResponse("profile/getAEPSBankList");
			promise.then(function(response) {
				chkSession(response);
				var bankList = response.data;
				$scope.bankDetailList = bankList;
			});
		}
    	
		//To Get the Bank Details with Logo
    	function fetchBankList(){
		      var promise = RemittancePromiseService.getResponse("bank-ifsc/getBankIconList");
		      promise.then(function (response) {
		    	  	chkSession(response);
		    	  	if (response.status === 200) {
		    	  		$scope.bankLogoList = response.data;
		    	  		$scope.backUplogo = angular.copy($scope.bankLogoList);
		    	  	} else {
		    	  		console.log(response.data);
		    	  	}
		      	},
		        function (error) {
		          console.log(JSON.parse(angular.toJson(error)));
		        });
		 }		
		    
		//Based on bank drop down list change Logo selected if available.  
		$scope.bankListChanged = function(){
		$scope.bankLogo=false;
		$scope.bankLogoList = angular.copy($scope.backUplogo);
		if($scope.aepsBankName !== undefined && $scope.aepsBankName.bankId  !== ""){
			for (var bnkLogo in $scope.bankLogoList){
				if($scope.bankLogoList[bnkLogo].bankId === $scope.aepsBankName.bankId){
					$scope.bankLogo = $scope.aepsBankName.bankId;
					break;
				}
			}			
		 }
		};
		
		//Based on logo selection Bank drop down list selected
		$scope.bankLogoChanged = function(lid){
			for (var bnk in $scope.bankDetailList) {
				if($scope.bankDetailList[bnk].bankId === lid){
					$scope.aepsBankName = $scope.bankDetailList[bnk];
					break;
				}
			}
		};
		
		
		//If transaction type is withdrawal allow user to enter amount..
		$scope.txnTypeChanged = function(){
			if($scope.transactionType === 'WITHDRAWAL'){
				$scope.isWithDrawal=true;
				txnTypeMsg="Cash Withdrawal";
			}else{
				$scope.amount='';
				$scope.isWithDrawal=false;
				$scope.isError=false;
				$scope.aepsForm.amount.$setPristine();
				if($scope.transactionType === 'MINI_STATEMENT'){
					txnTypeMsg="Mini Statement";
				}else if($scope.transactionType === 'BALANCE_ENQUIRY'){
					txnTypeMsg="Balance Inquiry";
				}
					
			}
		}
		
		//Get Biometric List 
		function fetchBiometricDeviceList(){
			var promise = RemittancePromiseService.getResponse("profile/getBiometricDeviceList");
		     promise.then(function (response) {
		    	 chkSession(response);
		    	 if (response.status === 200) {
		    	 	$scope.biometricDeviceList = response.data;
		    	 	} else {
		    	  		console.log(response.data);
		    	  	}
		      	},
		        function (error) {
		          console.log(JSON.parse(angular.toJson(error)));
		        });
		     	
		     $scope.bioDeviceType = $cookies.get($scope.cacheDeviceType);	
		}
		
		//While change the Biometric device option will store in Cache
		$scope.bioDeviceChanged = function(){
			$cookies.put($scope.cacheDeviceType,$scope.bioDeviceType);
		}
		
		
		//Restart form data
		$scope.resetAepsForm = function(form){
			$scope.aadharNo='';
			$('input[name=bankLogo]').attr('checked',false);
			$scope.aepsBankName='';
			$scope.transactionType='';
			$scope.amount='';
			$scope.isError = false;
			$scope.isErrorAadhaar = false;
	    	$scope.isWithDrawal=false;
	    	$scope.aepsForm.$setPristine();
	    	$scope.custMobile='';
	    }
		
					
		//Capture the Biometric device data
		var clickedProced = true;
		$scope.captureBiometric = function(){
			//to prevent many click at a time check 
			if(clickedProced){					
			//Get the public key to encript the Aadhaar number for varification.
			var promise = RemittancePromiseService.getResponse("transaction-facade/getPublicKey");
			promise.then(function(key) {
			chkSession(key);
			if ( key.data != "" && key.data != null && key.data != undefined ){
				encInit.key = key.data;
				encrypt.construct(encInit);
				
				var jsonData = {											  
						"initiatorAadhaar": encrypt.enc($scope.aadharNo)
				};					
				var promise = RemittancePromiseService.postResponse("transaction-facade/validateAadhaare",jsonData);
				promise.then(function(response) {
					chkSession(response);
					var issue = false;
					if(response.status!=200 || response.data!=true){
						$scope.isErrorAadhaar = true;
				    	$scope.errorMsgAadhaar = "Aadhaar number is not valid";
				    	clickedProced=true;
				    	issue = true;
					}
					if($scope.transactionType === 'WITHDRAWAL' && ($scope.amount != '' || $scope.amount != null) && 
							($scope.amount % denominationValue) != 0){
						$scope.isError=true;
						$scope.errorMsg="Transaction amount should be multiple of "	+denominationValue;
						issue = true;
					}
					
					if(issue){
						//if there is UI data issue
						return;
					}
					else{
						//with form valid data
						//Get ieo GEO location	
						navigator.geolocation.getCurrentPosition(function(position) {
							ieoLat = position.coords.latitude;
							ieoLong = position.coords.longitude;
							//alert("Latitude: " + position.coords.latitude );
							//alert("Longitude: " + position.coords.longitude);
							
							$scope.captureBiometricProceed();
						},
						function(error) {
							if (error.code == error.PERMISSION_DENIED){
								bootbox.alert({
									message:"Your browser Location settings is block.Please allow Location from browser Settings -> Content Settings -> Location.",
									backdrop: true									
								});
								return;
							}
						});
						
					}					
				});				
			}//end if
			});
		}
	}
	
	$scope.captureBiometricProceed = function(){
		
			fetchBiometricDeviceList();
			bioDevice = $scope.bioDeviceType;
			
			clickedProced=false;
					
			for (var device in $scope.biometricDeviceList) {
				if($scope.biometricDeviceList[device] != null && $scope.biometricDeviceList[device].deviceCode === bioDevice)
				{
					$('#aepsLoaderModal').modal('show');	
					$scope.getJSONCapture($scope.biometricDeviceList[device],function(err,deviceData){
						if (err != null) {
							 clickedProced=true;
							 $('#aepsLoaderModal').modal('hide');
							 bootbox.alert({
									message:"Unable to capture fingerprint.",
									backdrop: true									
							 });
							 
						 } else if (RemittancePromiseService.isEmpty(deviceData)) {
							 clickedProced=true;
							 $('#aepsLoaderModal').modal('hide');
							 bootbox.alert({
									message:"Unable to capture fingerprint.",
									backdrop: true
								});							
						 }else {
							 clickedProced=true;
							 $('#aepsLoaderModal').modal('hide');							
							 $scope.sendResponse(deviceData);							 
						 }
					});
					break;
				}				
			}
	}
		
		//get the biometric validation 
		$scope.getJSONCapture = function (biometricDevice,callback) {
			var url=biometricDevice.url;
			var port=biometricDevice.startPort;
			var api=biometricDevice.api;
			var portMax=biometricDevice.stopPort;
			var env=biometricDevice.env;
			var format=biometricDevice.format;
			deviceName=biometricDevice.deviceName;
			
			 var xhr = new XMLHttpRequest();
			 if(port <= portMax){
				 xhr.open('CAPTURE', url+port+api, true);

				 xhr.responseType = 'text'; 
				 xhr.onload = function () {
					 var status = xhr.status;
					 if (status == 200) {
						 callback(null,xhr.response);
					 } else {
						 callback(status);
					 }
				 };
				 xhr.onabort = function(){
					 if(portMax > port){
						 $scope.getJSONCapture(biometricDevice,callback);
					 }else{
						 $('#aepsLoaderModal').modal('hide');						 
						 bootbox.alert({
								message:"Unable to connect "+biometricDevice.deviceName+" device. Connection abort.",
								backdrop: true
							});
						 clickedProced=true;
						 
					 }
				 };
				 xhr.onerror = function(error){
					 if(portMax > port){
						 clickedProced=true;
						 $scope.getJSONCapture(biometricDevice,callback);
					 }else{
						 $('#aepsLoaderModal').modal('hide');						
						 bootbox.alert({
								message:"Unable to connect "+biometricDevice.deviceName+" device. Connection error.",
								backdrop: true
							});
						 clickedProced=true;
					 }
				 }
				 xhr.ontimeout = function(e){
					 if(portMax > port){
						 $scope.getJSONCapture(biometricDevice,callback);
					 }else{
						 $('#aepsLoaderModal').modal('hide');						 
						 bootbox.alert({
								message:"Unable to connect "+biometricDevice.deviceName+" device. Connection timedout.",
								backdrop: true
							});
						 clickedProced=true;
					 }
				 }
				//Increment the port number.
				biometricDevice.startPort= +port+1;
				if(bioDevice === 'GM'){
					xhr.send($scope.getGmalto(env,format));
				}else if(bioDevice === 'MP'){
					xhr.send($scope.getMorpho(env,format));					
				}
				else {
					//xhr.send(pidOptions);
					xhr.send($scope.getDevice(env,format));		
				}    
				 
			 }else{
				 callback('Connection error');
			 }
		}
    	
		//AEPS API Call with fingerprint data.... 
		$scope.sendResponse = function(fingerPrintData){
			//Convert XML to Json
			var x2js = new X2JS();
	        var aftCnv = x2js.xml_str2json(fingerPrintData);			
			var errorRes = aftCnv.PidData.Resp._errCode;
			
			
			//if(fingerPrintData.indexOf('nmPoints="0"') !== -1 || fingerPrintData.indexOf('qScore="0"') !== -1 ){
			if(errorRes != '0'){
				$('#aepsLoaderModal').modal('hide');				
				bootbox.alert({
					message:"Unable to capture finger print. Please try again.",
					backdrop: true
				});				
			}else{				
				
				var additionalInfo = aftCnv.PidData.DeviceInfo.additional_info;
				if(additionalInfo != "" && additionalInfo != null && additionalInfo != undefined){
					//get the device sl. no.
					deviceSlNo = aftCnv.PidData.DeviceInfo.additional_info.Param._value;	
				}
							
				if(deviceSlNo == "" || deviceSlNo == null || deviceSlNo === undefined)
				{							
					var port;
					var urlStr = '';
					if(bioDevice === 'GM'){
						urlStr = 'https://127.0.0.1:11099/rd/info';
					}else if(bioDevice === 'TV'){
						urlStr = 'https://127.0.0.1:11100/rd/info';
					}else if(bioDevice === 'MP'){
						urlStr='http://127.0.0.1:11100/getDeviceInfo';
					}
					
					getJSON_info(urlStr,function (err, data){	
						if (err != null) {
							bootbox.alert("Something went wrong to capture device serial number");
						}else {
							var aftCnv = x2js.xml_str2json(data);			
							deviceSlNo = aftCnv.DeviceInfo.additional_info.Param._value;	
							$scope.processTxn(fingerPrintData);
						}
					});									
				}else{
					$scope.processTxn(fingerPrintData);
				}		
			}//else
	}	
		
	$scope.processTxn = function(fingerPrintData){
	$('#aepsLoaderModal').modal('hide');				
	bootbox.confirm({
		message : "Finger print data capture successfully.Are you sure to proceed with AEPS "+txnTypeMsg+" transaction.",
		onEscape : function() {
			$('.bootbox.modal').modal('hide');
		},
		buttons: {
		    confirm: {
		    	label: "Proceed",			           
		        },
		    cancel: {
		        label: "No Thanks!",
		    	}
		    },
		callback : function(result) {
		if(result){
			//Create Transaction Call
			createTransaction(fingerPrintData);			
			}		
			}//end callback
		});//end bootbox.confirm
     }		
	
	
	createTransaction = function(fingerPrintData){	
	//Get the public key to encript the Aadhaar number.
	var promise = RemittancePromiseService.getResponse("transaction-facade/getPublicKey");
	promise.then(function(key) {
			chkSession(key);
			if ( key.data != "" && key.data != null && key.data != undefined ){
				encInit.key = key.data;
				encrypt.construct(encInit);
			}
	
	/*AepsTransactionView data setup*/
	var jsonData = {											  
		"txnType": $scope.transactionType,
		"initiatorAadhaar": encrypt.enc($scope.aadharNo),
		"initiatorIin": encrypt.enc($scope.aepsBankName.iin),
		"amount": $scope.amount,
		"custMobile": $scope.custMobile,
		"latitude": ieoLat,
		"longitude": ieoLong,
		"deviceProvider": deviceName,
		"deviceSlNo": deviceSlNo,
		"biometricDeviceData": fingerPrintData		
	 };					
		
	
	var promise = RemittancePromiseService.postResponse("transaction-facade/inititateAEPSTxn",jsonData);
	promise.then(function(response) {
		chkSession(response);
		if(response.status===200){
			var resp = response.data;
			if(resp.apiObject != null && resp.apiObject !="" && resp.apiObject != undefined){
				//calling AEPS transaction polling
				$('#remittanceStatusModal').modal('show');
           			fetchUpdTxnDetails(resp.apiObject,(new Date()).getTime()); 
				}
				else{
					bootbox.alert("There is issue: "+resp.errorCode);
					return;
				}
			}
		},
		function(error) {
			bootbox.alert("There is some issue. Please check AEPS Transactions for details.");
			return;				
		});
	});

 }
	
	//AEPS transaction API call with polling
	fetchUpdTxnDetails = function(respObj,startTime){
		var nowMillis = (new Date()).getTime();
		if ((nowMillis-startTime)>80000){	
			$('#remittanceStatusModal').modal('hide');
			bootbox.alert("Timeout. Please check AEPS Transactions for details. Cust Ref Id: " + respObj.custRef);
    		return;
		}
		else{
			//API call as pulling to get the transaction status
			var txnPromise = RemittancePromiseService.getResponse("transaction-facade/fetchAEPSTxn?txnId=" + respObj.txnId);
			txnPromise.then(function(respTxnData){
				chkSession(respTxnData);
				//if Status is 
				if (respTxnData.data != null && respTxnData.data != undefined && respTxnData.data.status != 'INITATED'){
					$('#remittanceStatusModal').modal('hide');
					var showContent = "";
					var showFailureReason = "";
					var bankName = $scope.aepsBankName.bankName;
					//If Response status is success, print the customized data from response   					
					if (respTxnData.data.status === 'SUCCESS')
					{
							if(respTxnData.data.txnType==='MINI_STATEMENT')
							{
								if(respTxnData.data.transactionDetails != null && respTxnData.data.transactionDetails.length>0){
									$scope.transactionTypes=respTxnData.data.transactionDetails
									//html modal will popup
									$('#statementModal').modal('show');
								}
								else{
									bootbox.alert("No Data Found for.");
						    		return;
								}
							}else if(respTxnData.data.txnType==='BALANCE_ENQUIRY'){
								if(respTxnData.data.transactionDetails != null && respTxnData.data.transactionDetails.length>0){
									for (var index in respTxnData.data.transactionDetails) {
     									if (respTxnData.data.transactionDetails[index].amount != null ){
     										respTxnData.data.transactionDetails[index].amount = respTxnData.data.transactionDetails[index].amount / 100.0;
     									}
     								}
									$scope.balanceInquire=respTxnData.data.transactionDetails
									//html modal will popup
									$('#balanceInquireModal').modal('show');
								}
								else{
									bootbox.alert("No Data Found for.");
						    		return;
								}							
							}else if(respTxnData.data.txnType==='WITHDRAWAL'){
								var amountInRs = respTxnData.data.amount;
								if(amountInRs != null && amountInRs != "" && amountInRs != undefined ){
									$sorpe.printAmount = amountInRs / 100.0;
								}
								$scope.printCustRef = respTxnData.data.custRef;	
								//html modal will popup
								$('#cashWithdrawalModal').modal('show');
								/*var msg = "<p>Withdrawal of &#8377; "+amountInRs+" is done and Ref id: "+respTxnData.data.custRef+"</p>";
								bootbox.confirm({
									message : msg,
									onEscape : function() {
						    			$('.bootbox.modal').modal('hide');
										},
									buttons: {
									    confirm: {
									    	label: "Print",			           
									        },
									    cancel: {
									        label: "Ok",
									    	}
									    },
									callback : function(result) {
									if(result){
										$scope.printData(msg);										
									}											
								}//end callback
							});//end bootbox.confirm
							
*/							}						
					}
					else if(respTxnData.data.status === 'DEEMED'){
						showErrorMsg = "<font color='#ff5722'>Transaction In-Progress.</font>";
						bootbox.alert(showErrorMsg);
						return;
					}
					else if(respTxnData.data.status === 'FAILED'){
						showErrorMsg = "<font color='#cd5c5c'>Transaction Failed with Ref. Id : "+respObj.custRef+"</font>";
						bootbox.alert(showErrorMsg);
						return;
					}
					else {
						showErrorMsg = "<font color='#cd5c5c'>Transaction Failed</font>";
						bootbox.alert(showErrorMsg);
						return;
					}						
				}
				else {
					 $timeout( function(){ 
						 fetchUpdTxnDetails(respObj,startTime); 
					 }, 7000);
				}
			},
			function(error) {
				console.log("Failure to Fetch Txn " + error);
					$timeout( function(){
					 fetchUpdTxnDetails(respObj,startTime); 
				}, 5000);
    		});
		}
	}
	
	$scope.printData = function(msg){
		var popupWin = window.open('', '_blank','width=800,height=800');
		popupWin.document.open();
		popupWin.document
		.write('<html><head><link rel="stylesheet" type="text/css" href="/portal/css/styles.css"/><link rel="stylesheet" type="text/css" href="/portal/css/bootstrap.min.css"/></head><body onload="window.print()">'
				+ msg
				+ '</body></html>');
		popupWin.document.close();
	}
	
	$scope.printDivData = function(id,headerMsg){
		var printContents = $("#"+id).html();
		       
		var popupWin = window.open('', '_blank','width=800,height=800');
		popupWin.document.open();
		popupWin.document
				.write('<html><head><link rel="stylesheet" type="text/css" href="/portal/css/styles.css"/><link rel="stylesheet" type="text/css" href="/portal/css/bootstrap.min.css"/></head><body onload="window.print()">'
						+'<br/><br/><div class="row"><div class="col-sm-12"><div class="">'
						+'<img class="img-responsive" src="../img/Indepay-Logo-Horizontal(1).png" width="200px;" height="" />'
						+'</div></div><br/><br/><div class="col-md-6"><code>Fund Transfer Receipt</code></div></div>'						
						+ '<br></br><strong>'+headerMsg +'</strong><br></br>'
						+ printContents
						+ '</body></html>');
		popupWin.document.close();
	}
	
	$scope.closeStatementModel = function(){
		$('#statementModal').modal('hide');
	}
	
	$scope.closeBalanceInquireModel = function(){
		$('#balanceInquireModal').modal('hide');
	}
	
	$scope.closeCashWithdrawalModel = function(){
		$('#cashWithdrawalModal').modal('hide');
	}
	
	//To know the device sl. no.	
	var getJSON_info = function (url, callback) 
	{
		var xhr = new XMLHttpRequest();
		xhr.open('DEVICEINFO', url, true);
		xhr.responseType = 'text';
		xhr.onload = function () 
		{
			var status = xhr.status;
			if (status == 200) 
			{
				callback(null, xhr.response);
			}
			else 
			{
				callback(status);
			}
		};
		xhr.send();
	};
	   
		
}]);
