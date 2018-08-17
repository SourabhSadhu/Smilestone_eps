app.controller(
				'statementController',
				[
						'$location',
						'$scope',
						'$http',
						'$timeout',
						'remittanceService',
						'RemittancePromiseService',
						'datatable',
						'$window',
						'$cookies',
						'$rootScope',
						function($location, $scope, $http, $timeout, remittanceService,
								RemittancePromiseService, datatable, $window,
								$cookies, $rootScope) {
							var apiTokenCookie = $cookies.get('API-TOKEN');

							$scope.searchDiv = true;
							$scope.searchErrMsgDIV = false;
							$scope.dataTableDiv = true;
							$scope.printFormDiv = false;
							$scope.isError = false;
							$scope.errorMsg = "";
							$scope.remitterMobile = "";
							$scope.beneficiaryMobile = "";
							$scope.rrn = "NA";
							$scope.searchForm;
							$scope.docDefinition="";
							var mycounter = RemittancePromiseService.resendOtpTimeoutInSec().timeoutInSeconds;
							 
							var txnType = "";
							var remitterMobile = "";
							var beneficiaryMobile = "";
							var startDate = "";
							var endDate = "";

							// Date picker
							$("#from").datepicker({
								maxDate : 0,
								dateFormat : "dd/mm/yy"
							});
							$("#to").datepicker({
								dateFormat : "dd/mm/yy",
								maxDate : 0
							});

							chkSession = function(responseData){
						    	//Session timeout issue Start	
								if(responseData.status===200 && responseData.data.toString().indexOf("<!DOCTYPE") > 0){
									var urlScheme = $location.absUrl().split(":")[0];
									var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
									//$window.location.reload();
									$window.location.href = url;
								}
								//Session timeout issue End
						    }
							
							// Note: Function for populating statement list in
							// grid view
							fetchStatementList(txnType, remitterMobile,
									beneficiaryMobile, startDate, endDate);
							function fetchStatementList(txnType,
									remitterMobile, beneficiaryMobile,
									startDate, endDate) {
								var datatableConfig = {
									"name" : "simple_datatable",
									"columns" : [
											{
												"header" : "Type",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													return value.customType;
													/*if (value.type == 'PURCHASE_LIMIT') {
														return 'Cash Pickup';
													} else if (value.type == 'REMITTANCE_CASH_TO_ACC') {
														return 'Cash Service';
													}
													return "";*/
												}
											},
											{
												"header" : "Transaction Date",
												"property" : "creationTime",
												"type" : "text",
												"order" : false
											},
											{
												"header" : " Reference ID",
												"property" : "custRefId",
												"order" : false,
												"type" : "text",
												"group" : true

											},
											{
												"header" : " Remitter Name",
												"property" : "remittance.remitterName",
												"order" : false,
												"type" : "text",												
											
											},
											{
												"header" : "Remitter Mobile",
												"property" : "remittance.remitterMobileNumber",
												"order" : false,
												"type" : "text"
											},
											{
												"header" : "Account Number",
												"property" : "customerPaymentInstrument",
												"order" : false,
												"type" : "text"
											},
											{
												"header" : " Beneficiary Name",
												"property" : "remittance.beneficiaryName",
												"order" : false,
												"type" : "text",												
											
											},
											{
												"header" : "Beneficiary Mobile",
												"property" : "remittance.beneMobileNumber",
												"order" : false,
												"type" : "text"
											},
											{
												"header" : "Net Amount",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													var result = value.tranAmount ;/// 100.0;
													return result;//.toFixed(2);
												}
											},
											{
												"header" : "Gross Amount",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													var result = value.grossTranAmount;// / 100.0;
													return result;//.toFixed(2);
												}

											},											
											{
												"header" : "Status",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													return value.customStatus;
													/*if (value.status == 'COMPLETED') {
														if (value.responseCode == 'SUCCESS') {
															return "Success";
														}else if (value.responseCode == 'FAILURE_CUST_REJECT'){
															return "Cancelled";
														}
														else {
															return "Failed";
														}
													}else if(value.status == 'FIN_TXN_DEEMED' ){
														return "Deemed";
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
														
														return 'In-progress';
													}else{
														return "Failed";
													}*/
													
													/*else {
														if(value.status == 'FIN_TXN_DEEMED' ){
															return "Deemed";
														}else if (value.responseCode != null && value.responseCode != 'SUCCESS') {
															
															if(value.status == 'REMITTANCE_REFUND_OTP_DISPATCHED' && value.type=='REMITTANCE_CASH_TO_ACC'){
																
																return 'Refund OTP sent';
																
															}
															
															return "Failed";
														}
													 return "In-progress";
													}*/
												}
											},
											{
												"header" : "Action",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													return value.customAction; 
													/*if (value.type == 'PURCHASE_LIMIT') {
														return '<a href="./cashPickUp#?id={{value.data.id}}">Details</a>';
													} else if (value.type == 'REMITTANCE_CASH_TO_ACC') {
														var retVal = '';

														if (value.status == 'COMPLETED') {
															retVal = retVal
																	+ '<a href="#" ng-click="doPrintAction(value)">Print</a>';
														} else if (value.responseCode != null
																&& value.responseCode != undefined
																&& value.responseCode != 'SUCCESS') {
															retVal = retVal
																	+ '<a href="#" ng-click="showModal(value)">Initiate Refund</a>';
														}

														return retVal;
													}*/
												}

											}

									],
									/*
									 * "edit":{ "active":true, "columnMode":true },
									 */
									"filter" : {
										"active" : true,
										"highlight" : true,
										"columnMode" : true
									},
									"pagination" : {
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
										"mode" : 'local'
									},
									/*
									 * "remove":{ "active":true, "mode":'local' },
									 * "save":{ "active":true, "mode":'local' },
									 * "add":{ "active":false, "showButton":true },
									 * "group":{ "active":true, },
									 * "compact":true, "exportCSV":{
									 * active:true,//Active or not
									 * showButton:true,//Show the export button
									 * in the toolbar delimiter:";"//Set the
									 * delimiter }, "hide":{ "active":true,
									 * "byDefault":["about"] },
									 */
									"mouseevents" : {
										"active" : false,
										"overCallback" : function(line, data) {
											/*console.log("callback mouseover:",
													line, data);*/
										},
										"leaveCallback" : function(line, data) {
											/*console.log("callback mouseover:",
													line, data);*/
										},
										"clickCallback" : function(line, data) {
											/*console.log("callback select : "
													+ data.name);*/
											txnAction(data);
										}
									}
								};
								
							
								

								$scope.statementDatatable = datatable(datatableConfig);

								var promise = RemittancePromiseService
										.getResponse('transaction-facade/fetchTransactionStatement?ieoTransactionType='
												+ txnType
												+ '&remitterMobile='
												+ remitterMobile
												+ '&remittanceBeneficiaryMobile='
												+ beneficiaryMobile
												+ '&startDate='
												+ startDate
												+ '&endDate=' + endDate);

								promise.then(function(payload) {
									chkSession(payload);
									
									datatableData = payload.data;
									$scope.docDefinition =  payload.data;

									if (datatableData.length > 0) {

										//$scope.docDefinition = datatableData;
										$scope.searchErrMsgDIV = false;

										//Modifying datatable for custom fields
										for(var i = 0; i < datatableData.length; i++){

	
											//Change in transaction status
											var value = datatableData[i];

											if(value.creationTime != null){
												value.creationTime = RemittancePromiseService
												.timeStampToDate(value.creationTime);
											}										

											if (value.manualPurchaseLimit == true){
												value.customStatus =  "Success";
											}
											else if (value.status == 'COMPLETED') {
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
													if (value.financialRejectDescription != undefined 
															&& value.financialRejectDescription != null){
														value.customStatus = value.customStatus + ' (' + value.financialRejectDescription + ')';
													}
												}
											}else if(value.status == 'FIN_TXN_DEEMED' ){
												//value.customStatus =  "Deemed";
												value.customStatus =  'In-progress';
											} else if (value.status == 'FIN_TXN_IN_PROG'
													|| value.status == 'AWAITING_CONFIRMATION'
													|| value.status == 'AGENT_LIST_WORKING_IN_PROG'
													|| value.status == 'AGENT_LIST_OBTAINED'
													|| value.status == 'SUB_AGENT_FINALIZED'
													|| value.status == 'SUB_AGENT_ON_WAY'
													|| value.status == 'SUB_AGENT_REACHED'
													|| value.status == 'UIN_DISPATCHED'
													|| value.status == 'UIN_MATCHED'
													|| value.status == 'OTP_DISPATCHED'
													|| value.status == 'OTP_MATCHED'
													|| value.status == 'SUB_AGENT_CONFIRMED_CASH_ACCEPTANCE'
													|| value.status == 'REMITTANCE_REQUEST_ACCEPTED'){

												value.customStatus =  'In-progress';
											}else{
												value.customStatus = "Failed";
												if (value.financialRejectDescription != undefined 
														&& value.financialRejectDescription != null){
													value.customStatus = value.customStatus + ' (' + value.financialRejectDescription + ')';
												}
											}
											//End of change in transaction status

											//Change in action
											if (value.type == 'PURCHASE_LIMIT') {
												if (value.manualPurchaseLimit == false){
													value.customAction = '<a href="./cashPickUp#?id={{value.data.id}}">Details</a>';	
												}
											} else if (value.type == 'REMITTANCE_CASH_TO_ACC') {
												var retVal = '';
												if (value.status == 'COMPLETED' || value.status == 'FIN_TXN_DEEMED') {
													retVal = retVal
													+ '<a href="#" ng-click="doPrintAction(value)">Print</a>';
												} else if (value.responseCode != null
														&& value.responseCode != undefined
														&& value.responseCode != 'SUCCESS') {
													if (value.canRetry) {
														retVal = retVal + '<a href="#" ng-click="retry(value)" id="retry">Retry</a>&nbsp;/&nbsp;';
													}
													retVal = retVal + '<a href="#" ng-click="showModal(value)">Cash-Out</a>';
												}
												value.customAction = retVal;
											}
											//End of change in action

											//Change in transaction type
											value.customType = '';
											if (value.type == 'PURCHASE_LIMIT') {
												if (value.manualPurchaseLimit == true){
													if (value.sourceOfUpdate != null && value.sourceOfUpdate.toString().indexOf("DM") >= 0){
														value.customType = 'Purchase Limit-DM';	
													}
													else if (value.sourceOfUpdate != null && value.sourceOfUpdate.toString().indexOf("SUI") >= 0){
														value.customType = 'Purchase Limit-SUI';
													}
													else if (value.sourceOfUpdate != null && value.sourceOfUpdate.toString().indexOf("CMS-M") >= 0){
														value.customType = 'CMS-Manual';
													}
													else if (value.sourceOfUpdate != null && value.sourceOfUpdate.toString().indexOf("CMS-A") >= 0){
														value.customType = 'CMS-Auto';
													}
													else {
														value.customType = 'Purchase Limit-Manual';
													}
												}
												else {
													value.customType = 'Cash Pickup';	
												}
											} else if (value.type == 'REMITTANCE_CASH_TO_ACC') {
												value.customType = 'Cash Service';
											}
											//End of change in transaction type
											$scope.docDefinition[i].tranAmount = ($scope.docDefinition[i].tranAmount/100).toFixed(2);
											$scope.docDefinition[i].grossTranAmount = ($scope.docDefinition[i].grossTranAmount/100).toFixed(2);

										}
										
										$scope.statementDatatable.setData(datatableData);
									} else {
										$scope.searchErrMsgDIV = true;
										$scope.errorMsg = "No data found";

									}

								}, function(errorPayload) {
									console.log("failure loading "
											+ errorPayload);
								});

							};

							// statementDetails() will call while click on
							// individual transaction to view the details.
							/*
							 * function statementDetails(data){ var url =
							 * "http://" + $window.location.host +
							 * "/portal/indepay/viewUserDetails?id="+data.userId;
							 * console.log(url); $window.location.href = url;
							 */
							
							$scope.retry = function(value) {
								bootbox.confirm({
									title: "Retry?",
									message: "Are you sure you want to retry?",
									buttons: {
								        cancel: {
								            label: '<i class="fa fa-times"></i> Cancel',
								            className: 'btn-default'
								        },
								        confirm: {
								            label: '<i class="fa fa-check"></i> Confirm',
								            className: 'btn-indepay-info'
								        }
								    },
								    closeButton: false,
								    onEscape : function() {
										$('.bootbox.modal').modal('hide');
									},
								    callback: function (result) {
								        if (result == true) {
								        	$('#retry').next('span').next().remove();
								        	$('#retry').remove();
								        	initiateRetry(value);
										}
								    }
								});
							};
							
							//$scope.initiateRetry = function(value) {
							function initiateRetry(value) {
								var txnId = value.data.remittance.txnId;
								var dialog = bootbox.dialog({
									message: '<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" '
												+ 'aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span>Please Wait...</span></div></div>',
									closeButton: false,
									className: 'modal-body-pad0'
								});
								var promise = RemittancePromiseService.postResponse('transaction-facade/initiateRetry/' + txnId, null);
								promise.then(function(payload) {
									chkSession(payload);
									
									var data = payload.data;
									if (data.status=='SUCCESS') {
										$timeout( function(){
											fetchUpdTxnDetails(txnId, (new Date).getTime());
										}, 3000);
									} else {
										if (data.errorCode == 'ILLEGAL_REQUEST') {
											bootbox.alert("<h4>FAILED!</h4><p>Request cannot be initiated..</p>", function(){bootbox.hideAll();});
											
										} else {
											bootbox.alert("<h4>FAILED!</h4><p>" + data.errorCode + " " + data.displayErrorMessage + "</p>", function(){bootbox.hideAll();});
										}
										$('body').css('padding-right', '0');
									}
								}, function(error) {
									console.log("Failure Retry.. " + error);
								});
							};
							
							fetchUpdTxnDetails = function(txnId, startTime) {
								var nowMillis = (new Date()).getTime();
								if ((nowMillis-startTime) > 80000) {
									var txnPromise = RemittancePromiseService.getResponse("transaction-facade/fetchRemittance?txnId=" + txnId);
									txnPromise.then(function(respTxnData){
				    					chkSession(respTxnData);
				        				if (respTxnData != null && respTxnData != undefined && respTxnData.data != null && respTxnData.data != undefined){
				            				bootbox.alert("Request Timeout. Please Try Again");
				            				return;
				        				}
				        			});
								} else {

				        			var txnPromise = RemittancePromiseService.getResponse("transaction-facade/fetchRemittance?txnId=" + txnId);
				        			txnPromise.then(function(respTxnData){
				            			chkSession(respTxnData);
				
				        				if (respTxnData != null && respTxnData != undefined 
				        						&& respTxnData.data != null && respTxnData.data != undefined 
				        						&& (respTxnData.data.status == 'FIN_TXN_DEEMED'
				        						|| respTxnData.data.responseCode == 'SUCCESS' 
				        						|| respTxnData.data.responseCode == 'FAILURE_FIN_TXN_FAIL'
				        						|| respTxnData.data.responseCode == 'FAILURE_BANK_DOWN')) {
				
				    						/*$('#remittanceStatusModal').modal('hide');
				    						getTxnLimit($scope.custDetails.telephone1);*/
				    						
				            				var ifscReturned = "";
				
				            				if (respTxnData.data.customerPaymentInstrumentType == 'ACCOUNT_IFSC'){
				            					ifscReturned = respTxnData.data.customerPaymentInstrument.substring(respTxnData.data.customerPaymentInstrument.indexOf('/')+1); 
				            				}
				                   			var showName = "";
				                   			var showTitle = "";
				                   			var showContent = "";
				                   			var showFailureReason = "";
				                   			
				                   			var mobile = respTxnData.data.remittance.beneMobileNumber;
				                   			var promise = RemittancePromiseService.getResponse('profile/getBeneProfile/' + mobile);
				                   			promise.then(function(payload) {
				                   				chkSession(payload);
				                   				if (payload != null && payload != undefined && payload.data != null && payload.data != undefined) {
													var bene = payload.data;
													if (bene.verifiedAccName != undefined && bene.verifiedAccName != null && bene.verifiedAccName != ''){
						                   				showName = bene.verifiedAccName; 
						                   			}
						                   			else {
						                   				showName = bene.beneName;
						                   			}
													showContent = "<p>A/c Holder name: "+ showName +"</p><p>Bank Name: "+ bene.beneBankName +"</p><p>A/c Number: "+ bene.accountNo +"</p><p>IFSC: "+ ifscReturned +"</p>";
													
													var showFailureReason = "";
													
													if (respTxnData.data.responseCode == 'SUCCESS') {
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
																		$rootScope.$emit("ResetWallet", {});
																		fetchStatementList(txnType, remitterMobile, beneficiaryMobile, startDate, endDate);
																	}
																}/*,
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
				            		    		                	$scope.printContent($scope.data.replace('manualReplace.remittance.retrievedBankName', $scope.bankName));
				        		    		        			});
				                		    		        	$scope.getDetails();
				                		    		        	$rootScope.$emit("ResetWallet", {});
				                    		                }
								    		            }*/
															}
														});
													}
													else {
														if (respTxnData.data.status == 'FIN_TXN_DEEMED'){
															showTitle = "<font color='#ff5722'>Transaction In-Progress</font>";
														}
														else if (respTxnData.data.responseCode == 'FAILURE_FIN_TXN_FAIL'){
															showTitle = "<font color='#cd5c5c'>Transaction Failed</font>";
															if (respTxnData.data.financialRejectDescription != null){
																showFailureReason =	respTxnData.data.financialRejectDescription;
															}
														}
														else if (respTxnData.data.responseCode == 'FAILURE_BANK_DOWN'){
															showTitle = "<font color='#cd5c5c'>Transaction Failed</font>";
															showFailureReason = "Bank services down";
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
																		fetchStatementList(txnType, remitterMobile, beneficiaryMobile, startDate, endDate);
																	}
																}
															}
														});
													}
													return;
												}
				                   			});
				        				}
				        				else {
				        					 $timeout( function(){ 
				        						 fetchUpdTxnDetails(id, startTime);
				        					 }, 7000);
				        				}
				        			},
				        			function(error) {
				        				console.log("Failure to Fetch Txn " + error);
					   					$timeout( function(){ 
											 fetchUpdTxnDetails(id, startTime);
										}, 5000);
				            		});
				    			
								}
								bootbox.hideAll();
								$('body').css('padding-right', '0');
							};

							function txnAction(data) {
								$scope.printData = data;
								// $('#printModel').modal('show');
								$scope.dataTableDiv = false;
								$scope.printFormDiv = true;
								$scope.searchErrMsgDIV = false;
							}
							;
							$scope.cancelPrint = function() {
								$('#printModel').modal('hide');
							};

							$scope.doPrintAction = function(value) {
								
								$scope.searchDiv = false;
								$scope.dataTableDiv = false;
								$scope.printFormDiv = true;
								if(value.data.customStatus == "In-progress")
									value.data.customStatus = 'In Progress*'
								$scope.printData = value.data;
								
								var promise = getBranchDetails(value.data.ifsc);
								promise.then(function(resp){
									$scope.bankName = resp.data.bankBranchName;
								});
								var promise1 = RemittancePromiseService
								.getResponse('transaction-facade/fetchTransaction?txnId=' + value.data.id);
								promise1.then(function(resp){
									if(resp.data.financialTransactions != null && resp.data.financialTransactions.length > 0 ) {
											//&& resp.data.financialTransactions[0].rrn != null && resp.data.financialTransactions[0].rrn != "")
										for (var i=0; i<resp.data.financialTransactions.length;i++) {
											if(resp.data.financialTransactions[i].responseCode == "SUCCESS" && resp.data.financialTransactions[i].status == "SUCCESS")
												$scope.rrn=resp.data.financialTransactions[i].rrn;
										}
										//$scope.rrn = resp.data.financialTransactions[0].rrn;
									}
									else
										$scope.rrn = "NA";
								}, function(error){
									$scope.rrn = "NA";
								});
							};

							$scope.initiateRefund = function() {
								$scope.refundProgress = "progress-bar progress-bar-striped active";
								var request = {};
								request.id = selectedValue.data.id;
								var promise = RemittancePromiseService
										.postResponse(
												'transaction-facade/initiateRemittanceRefund',
												request);
								promise.then(function(payload) {
									chkSession(payload);
									//
								}, function(errorPayload) {
									console.log("failure loading "
											+ errorPayload);
									$scope.isError = true;
									$scope.errorMsg = errorPayload.data;
								});
							};

							$scope.confirmRefund = function(value) {
								var request = {};
								request.id = value.id;

								var promise = RemittancePromiseService
										.postResponse(
												'transaction-facade/confirmRemittanceRefund',
												request);
								promise.then(function(payload) {
									chkSession(payload);
								}, function(errorPayload) {
									console.log("failure loading "
											+ errorPayload);
								});
							};

							$scope.dataPrint = function() {
								var printContents = $("#printable").html();
								var popupWin = window.open('', '_blank',
										'width=800,height=800');
								popupWin.document.open();
								popupWin.document
										.write('<html><head><link rel="stylesheet" type="text/css" href="/portal/css/styles.css"/><link rel="stylesheet" type="text/css" href="/portal/css/bootstrap.min.css"/><script type="text/javascript" src="/portal/lib/angular-1.5.8/angular.min.js"></script></head><body onload="window.print()">'
												+ printContents
												+ '</body></html>');
								popupWin.document.close();
							}

							// Disable mobile number search for Cash Pickup
							$scope.checkType = function(txnType) {
								if(txnType == 'PURCHASE_LIMIT'){
									$scope.remitterMobile = "";
									$scope.beneficiaryMobile = "";									
									$("#remitterMobile").prop('disabled', true);
									$("#beneficiaryMobile").prop('disabled', true);
									
								}
								else{
										$("#remitterMobile").prop('disabled', false);
										$("#beneficiaryMobile").prop('disabled', false);
									}
							};
													

							// For Search Transaction
							$scope.searchTxns = function() {
								$scope.searchErrMsgDIV = false;
								txnType = document.getElementById('txnType').value;
								remitterMobile = document
										.getElementById('remitterMobile').value;
								beneficiaryMobile = document
										.getElementById('beneficiaryMobile').value;
								startDate = document.getElementById('from').value;
								endDate = document.getElementById('to').value;
								var formattedStartDate = "";
								var formattedEndDate = ""
								var today = new Date();
								// Start Date
								if (!RemittancePromiseService
										.isEmpty(startDate)) {
									formattedStartDate = RemittancePromiseService
											.dateSplit(startDate, "/");
									if (formattedStartDate.length != 3) {
										$scope.searchErrMsgDIV = true;
										$scope.errorMsg = "Invalid Transaction From Date";
										return false;
									} else {
										startDate = formattedStartDate[1] + "/"
												+ formattedStartDate[0] + "/"
												+ formattedStartDate[2];
										formattedStartDate = formattedStartDate[2]
												+ formattedStartDate[1]
												+ formattedStartDate[0];
										if(RemittancePromiseService.dateDiffInDays(new Date(startDate), today) < 0){
											$scope.searchErrMsgDIV = true;
											$scope.errorMsg = "'Transaction From Date' should be less than or equal the current date";
											return false;
										}
									}
								}
								// End Date
								if (!RemittancePromiseService.isEmpty(endDate)) {
									formattedEndDate = RemittancePromiseService
											.dateSplit(endDate, "/");
									if (formattedEndDate.length != 3) {
										$scope.searchErrMsgDIV = true;
										$scope.errorMsg = "Invalid Transaction To Date";
										return false;
									} else {
										endDate = formattedEndDate[1] + "/"
												+ formattedEndDate[0] + "/"
												+ formattedEndDate[2];
										formattedEndDate = formattedEndDate[2]
												+ formattedEndDate[1]
												+ formattedEndDate[0];
										if(RemittancePromiseService.dateDiffInDays(new Date(endDate), today) < 0){
											$scope.searchErrMsgDIV = true;
											$scope.errorMsg = "'Transaction To Date' should be less than or equal the current date";
											return false;
										}
									}
								}
								// Both Date
								/*if (startDate != ""
										&& endDate != ""
										&& !RemittancePromiseService
												.dateRangeCheck(startDate,
														endDate, "0")) {
									$scope.searchErrMsgDIV = true;
									$scope.errorMsg = "Creation From Date should be less than Creation To Date";
									return false;
								}*/
								var dateDiff = RemittancePromiseService.dateDiffInDays(new Date(startDate), new Date(endDate));
								if(dateDiff < 0){
									$scope.searchErrMsgDIV = true;
									$scope.errorMsg = "'Transaction From Date' should be less than or equal 'Transaction To Date'";
									return false;
								}else if(dateDiff > 90){
									$scope.searchErrMsgDIV = true;
									$scope.errorMsg = "Date difference between 'Transaction From Date' and 'Transaction To Date' can not be greater than 90 days";
									return false;
								}

								fetchStatementList(txnType, remitterMobile,
										beneficiaryMobile, formattedStartDate,
										formattedEndDate);

							};

							// Search Form Reset
							$scope.searchFormReset = function() {
								$scope.searchDiv = true;
								$scope.dataTableDiv = true;
								$scope.searchForm.$setPristine();
								$scope.searchErrMsgDIV = false;
								
								//This part of form reset is required to reset search form field after perform action from grid view. 
								$scope.remitterMobile = "";
								$scope.beneficiaryMobile = "";
								$scope.txnType="";
								$('#txnType').get(0).selectedIndex = 0;
								$('#from').datepicker('setDate', null);
								$('#to').datepicker('setDate', null);
								$("#remitterMobile").prop('disabled', false);
								$("#beneficiaryMobile").prop('disabled', false);	
								
								
								txnType = "";
								remitterMobile = "";
								beneficiaryMobile = "";
								startDate = "";
								endDate = "";

								fetchStatementList(txnType, remitterMobile,
										beneficiaryMobile, startDate, endDate);
							}

							$scope.showModal = function(value) {
								var mobile = value.data.remittance.remitterMobileNumber;
								if (value.data.status == 'REMITTANCE_FIN_TXN_FAIL') {
									bootbox
											.confirm({
												message : "Initiate Refund?",
												size : 'small',
												onEscape : function() {
													$('.bootbox.modal').modal(
															'hide');
												},
												callback : function(result) {
													if (result) {
														var request = {};
														request.id = value.data.id;
														var promise = RemittancePromiseService
																.postResponse(
																		'transaction-facade/initiateRemittanceRefund',
																		request);
														promise
																.then(
																		function(payload) {
																			chkSession(payload);
																			var counter = mycounter;
																			var prompt = bootbox.prompt({
																						closeButton : false,
																						title : "Validate OTP <button type=\"button\" class=\"btn btn-link\" id=\"resend\" onclick=\"resendOtp("+mobile+",false)\" style=\"display: none;margin-left:260px;padding-right:0px;\">Resend OTP</button>"+
														    							"<button type=\"button\" class=\"btn btn-link\" id=\"voiceOtp\" onclick=\"resendOtp("+mobile+",true)\" style=\"display: none;margin-left:260px;padding-right:0px;\">On Call OTP</button>"+
																						"<span class=\"pull-right\" style=\"margin-left:244px\" id=\"message\">(Resend in "+counter+")</span>",
																						inputType : 'otp',
																						callback : function(
																								confirmationOTP) {
																							if (confirmationOTP != null
																									&& confirmationOTP != ""
																									&& confirmationOTP != undefined) {
																								var request = {};
																								request.id = value.data.id;
																								request.otpHash = sha256(confirmationOTP);

																								var promise = RemittancePromiseService
																										.postResponse(
																												'transaction-facade/confirmRemittanceRefund',
																												request);
																								promise
																										.then(
																												function(payload) {
																													chkSession(payload);
																													
																													if (payload != null
																															|| payload != ""
																															|| payload != undefined) {
																														//$scope.searchFormReset();
																														bootbox.hideAll();
																														refundSuccess();
																														remittanceService.getWalletLimit();
																													}
																												},
																												function(errorPayload) {
																													$scope.isError = true;
																													$scope.errorMsg = errorPayload.data;
																													bootbox.alert(errorPayload.data.errorMessage);
																													return false;
																												});
																								return false;
																							}
																						}
																					});
																			
																			prompt.init(function(){
														    					var counter = mycounter;
														    		    	    var id = setInterval(function() {
														    		    	       counter--;
														    		    	       if(counter > 0) {
														    		    	            var msg = '(Resend in ' + counter + ')';
														    		    	            $('#message').text(msg);
														    		    	       } else {
														    		    	            $('#message').hide();
														    		    	            $('#resend').show();
														    		    	            clearInterval(id);
														    		    	      }
														    		    	    }, 1000);
														    				});
																			
																			$("#resend").click( function(){
														    					   var count = mycounter;
														    					   var id = setInterval(function() {
														    					     count--;
														    					      if (count > 0) {
														    					         $('#resend').hide();
														    					         var msg = '(Resend in ' + count + ')';
														     		    	            $('#message').text(msg);
														     		    	            $("#message").show();
														    					      }
														    					      if (count === 0) {
														    					    	  $('#message').hide();
														      		    	              $('#resend').hide();
														      		    	              $('#voiceOtp').show();
														      		    	              clearInterval(id);
														    					       }
														    					     }, 1000);
														    					});
																			
																			$("#voiceOtp").click( function(){
														    					   var count = mycounter;
														    					   var id = setInterval(function() {
														    					      	  $('#message').hide();
														      		    	              $('#resend').hide();
														      		    	              $('#voiceOtp').hide();
														      		    	              clearInterval(id);
														    					     }, 1000);
														    					});

																		},
																		function(errorPayload) {
																			$scope.isError = true;
																			$scope.errorMsg = errorPayload.data;
																			bootbox.alert(errorPayload.data.errorMessage);
																			return false;
																		});
													}
												}
											});
								} else if (value.data.status == 'REMITTANCE_REFUND_OTP_DISPATCHED') {
									bootbox
											.confirm({
												message : "Resend OTP!",
												size : 'small',
												callback : function(result) {
													if (result) {
														var request = {};
														request.id = value.data.id;
														var promise = RemittancePromiseService
																.postResponse(
																		'transaction-facade/initiateRemittanceRefund',
																		request);
														promise
																.then(
																		function(payload) {
																			chkSession(payload);
																			var counter = mycounter;
																			var prompt = bootbox.prompt({
																						closeButton : false,
																						title : "Validate OTP <button type=\"button\" class=\"btn btn-link\" id=\"resend\" onclick=\"resendOtp("+mobile+",false)\" style=\"display: none;margin-left:260px;padding-right:0px;\">Resend OTP</button>"+
																						"<button type=\"button\" class=\"btn btn-link\" id=\"voiceOtp\" onclick=\"resendOtp("+mobile+",true)\" style=\"display: none;margin-left:260px;padding-right:0px;\">On Call OTP</button>"+
														    							"<span class=\"pull-right\" style=\"margin-left:244px\" id=\"message\">(Resend in "+counter+")</span>",
																						inputType : 'otp',
																						callback : function(
																								confirmationOTP) {
																							if (confirmationOTP != null
																									&& confirmationOTP != ""
																									&& confirmationOTP != undefined) {
																								var request = {};
																								request.id = value.data.id;
																								request.otpHash = sha256(confirmationOTP);

																								var promise = RemittancePromiseService
																										.postResponse(
																												'transaction-facade/confirmRemittanceRefund',
																												request);
																								promise
																										.then(
																												function(payload) {
																													chkSession(payload);
																													if (payload != null
																															|| payload != ""
																															|| payload != undefined) {
																													//	$scope.searchFormReset();
																														bootbox.hideAll();
																														refundSuccess();
																														remittanceService.getWalletLimit();
																													}
																												},
																												function(errorPayload) {
																													$scope.isError = true;
																													$scope.errorMsg = errorPayload.data;
																													bootbox.alert(errorPayload.data.errorMessage);
																													return false;
																												});
																								return false;
																							}																							
																						}
																					});
																			
																			prompt.init(function(){
														    					var counter = mycounter;
														    		    	    var id = setInterval(function() {
														    		    	       counter--;
														    		    	       if(counter > 0) {
														    		    	            var msg = '(Resend in ' + counter + ')';
														    		    	            $('#message').text(msg);
														    		    	       } else {
														    		    	            $('#message').hide();
														    		    	            $('#resend').show();
														    		    	            clearInterval(id);
														    		    	      }
														    		    	    }, 1000);
														    				});
																			
																			$("#resend").click( function(){
														    					   var count = mycounter;
														    					   var id = setInterval(function() {
														    					     count--;
														    					      if (count > 0) {
														    					         $('#resend').hide();
														    					         var msg = '(Resend in ' + count + ')';
														     		    	            $('#message').text(msg);
														     		    	            $("#message").show();
														    					      }
														    					      if (count === 0) {
														    					    	  $('#message').hide();
														      		    	              $('#resend').hide();
														      		    	              $('#voiceOtp').show();
														      		    	              clearInterval(id);
														    					       }
														    					     }, 1000);
														    					});
																			
																			$("#voiceOtp").click( function(){
														    					   var count = mycounter;
														    					   var id = setInterval(function() {
														    					     	  $('#message').hide();
														      		    	              $('#resend').hide();
														      		    	              $('#voiceOtp').hide();
														      		    	              clearInterval(id);
														    					      }, 1000);
														    					});

																		},
																		function(errorPayload) {
																			$scope.isError = true;
																			$scope.errorMsg = errorPayload.data;
																			bootbox
																					.alert(errorPayload.data.errorMessage);
																			return false;
																		});
													}
												}
											});
								}
							};
							
							refundSuccess = function() { 
								bootbox.alert("Refund successfull", function(){ 
									//$window.location.reload();
									$scope.searchFormReset();
								});
							}
							
							// Get Bank Branch Details
					    	function getBranchDetails(ifscCode) {
					    		return RemittancePromiseService.getResponse("profile/getBankBranchDetails/" + ifscCode);
					    	}
					    	
					    	// Resend Otp
					    	resendOtp = function(mobile) {
								var promise = RemittancePromiseService.postResponse("profile/resendOtpInitRefund?mobile="+mobile+"&isVoiceCall="+isVoiceCall);
								promise.then(function(response) {
									chkSession(response);
									var status = response.data;
									$scope.status = status;
								});
							}

						} ]);
