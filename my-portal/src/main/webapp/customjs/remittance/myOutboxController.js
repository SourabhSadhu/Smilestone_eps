//user details view controller		
app.controller(
				'myOutboxController',
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
							fetchStatementList();
							function fetchStatementList() {
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
												
												}
											},
											{
												"header" : "Action",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													return value.customAction; 
												}

											}

									],
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
									"mouseevents" : {
										"active" : false,
										"overCallback" : function(line, data) {
										},
										"leaveCallback" : function(line, data) {
										},
										"clickCallback" : function(line, data) {
											txnAction(data);
										}
									}
								};

								$scope.outboxDatatable = datatable(datatableConfig);

								var promise = RemittancePromiseService
										.getResponse('transaction-facade/fetchStagedTransaction');

								promise.then(function(payload) {
									chkSession(payload);
									
									datatableData = payload.data;
									$scope.docDefinition =  payload.data;
									$rootScope.$emit("getCount", {});
									if (datatableData.length > 0) {
										
										$scope.searchErrMsgDIV = false;
										for(var i = 0; i < datatableData.length; i++){

	
											//Change in transaction status
											var value = datatableData[i];

											if(value.creationTime != null){
												value.creationTime = RemittancePromiseService
												.timeStampToDate(value.creationTime);
											}										

											if (value.status == 'REMITTANCE_REQUEST_STAGED') {
												value.customStatus =  "Pending";
											}
											//End of change in transaction status

											//Change in action
											if (value.type == 'REMITTANCE_CASH_TO_ACC') {
												var retVal = '';
												if (value.status == 'REMITTANCE_REQUEST_STAGED') {
													retVal = retVal
													+ '<a href="#" ng-click="deletetxn(value.data.id)" >Delete</a>&nbsp; /&nbsp; <a href="#" ng-click="processTxn(value.data)"  >Submit</a>';
												}
												value.customAction = retVal;
											}
											//End of change in action

											//Change in transaction type
											value.customType = '';
											if (value.type == 'REMITTANCE_CASH_TO_ACC') {
												value.customType = 'Cash Service';
											}
											
											$scope.docDefinition[i].tranAmount = ($scope.docDefinition[i].tranAmount/100).toFixed(2);
											$scope.docDefinition[i].grossTranAmount = ($scope.docDefinition[i].grossTranAmount/100).toFixed(2);

										}
										$scope.outboxDatatable.setData(datatableData);
									} else {
										$scope.searchErrMsgDIV = true;
										$scope.errorMsg = "No data found";

									}

								}, function(errorPayload) {
									console.log("failure loading "
											+ errorPayload);
								});

							};
							
							$scope.deletetxn = function(value) {
								bootbox.confirm({
									title: "Delete?",
									message: "Are you sure you want to delete?",
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
								        	var promise = RemittancePromiseService.postResponse('transaction-facade/deletetxn/' + value, null);
											promise.then(function(payload) {
												chkSession(payload);
												
												var data = payload.data;
												if (data.status=='SUCCESS') {
														bootbox.alert({
															title: "Success",
															message: "Transaction Deleted Successfully...",
															closeButton: false,
															callback : fetchStatementList()
														})
													
												} else {
													if (data.errorCode == 'ILLEGAL_REQUEST') {
														bootbox.alert("<h4>FAILED!</h4><p>Transaction cannot be Deleted..</p>", function(){bootbox.hideAll();});
														
													} else {
														bootbox.alert("<h4>FAILED!</h4>", function(){bootbox.hideAll();});
													}
													$('body').css('padding-right', '0');
												}
											}, function(error) {
												console.log("Failure Delete.. " + error);
											});
										}
								    }
								});
							};
							

							//Process outBox transactions
							
							/*printReceipt = function(value){
					    		$scope.printData = value;
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
					    	}*/
							
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
							
							// Get Bank Branch Details
					    	function getBranchDetails(ifscCode) {
					    		return RemittancePromiseService.getResponse("profile/getBankBranchDetails/" + ifscCode);
					    	}
							
							//Get RRN/UTR No 
					    	function getRrnNo(txnId){
					    		return RemittancePromiseService.getResponse('transaction-facade/fetchTransaction?txnId=' + txnId);
					    	}
							
							fetchUpdTxnDetails = function(id, isStaged, startTime, txnSummary){
				    			var nowMillis = (new Date()).getTime();
				    			if ((nowMillis-startTime)>80000){
				    				$('#remittanceStatusModal').modal('hide');
				    				bootbox.alert("Timeout. Please check statement for details. Reference ID:"+txnSummary.custRefId);
				    			
				    			
				    				var txnPromise = RemittancePromiseService.getResponse("transaction-facade/fetchRemittance?txnId=" + id + "&isStaged=" + isStaged);
				    				$('#remittanceStatusModal').modal('hide');
				    				getTxnLimit($scope.user.mobileNumber);
				    				txnPromise.then(function(respTxnData){
				    					chkSession(respTxnData);
				        				if (respTxnData != null && respTxnData != undefined 
				        						&& respTxnData.data != null && respTxnData.data != undefined){
				            				bootbox.alert("Timeout. Please check My Transactions for details. Reference ID: "+respTxnData.data.custRefId);
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
				    						getTxnLimit($scope.user.mobileNumber);
				    						
				            				var ifscReturned = "";
				
				            				if (respTxnData.data.customerPaymentInstrumentType == 'ACCOUNT_IFSC'){
				            					ifscReturned = respTxnData.data.customerPaymentInstrument.substring(respTxnData.data.customerPaymentInstrument.indexOf('/')+1); 
				            				}
				                   			var showName = "";
				                   			var showTitle = "";
				                   			if (txnSummary.remittance.verified_acc_name != undefined && txnSummary.remittance.verified_acc_name != null && txnSummary.remittance.verified_acc_name != ''){
				                   				showName = txnSummary.remittance.verified_acc_name; 
				                   			}
				                   			else {
				                   				showName = txnSummary.remittance.beneficiaryName;
				                   			}
				                   			//Fetch Bank Name
				                   			var promiseBD1 = getBranchDetails(respTxnData.data.ifsc);
    		    		        			promiseBD1.then(function(resp){
    		    		        				$scope.bankName = resp.data.bankBranchName;
    		    		        				
    		    		        				var showFailureReason = "";
    				                   			var showContent = "<p>A/c Holder name: "+ showName +"</p><p>Bank Name: "+ $scope.bankName +"</p><p>A/c Number: "+ txnSummary.accountNumber +"</p><p>IFSC: "+ ifscReturned;
    				                   			fetchStatementList();
    		    		        				
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
    									    		           /* dismiss: {
    									    		                label: "Dismiss",
    									    		                className: 'btn-indepay-info',
    					                    		                callback: function() {
    					                    		                	$rootScope.$emit("ResetWallet", {});
    					                    		                }
    									    		            },*/
    									    		        	print: {
    									    		                //label: "Print Receipt",
    									    		                label: "OK",
    									    		                className: 'btn-indepay',
    					                    		                callback: function() {
    					            		    		        		/*$scope.data = printReceipt(respTxnData.data);
    					            		    		        		$scope.$apply();
    					            		    		        		var promiseBD = getBranchDetails(respTxnData.data.ifsc);
    					        		    		        			promiseBD.then(function(resp){
    					        		    		        				$scope.bankName = resp.data.bankBranchName;
    					            		    		                	$scope.data = printReceipt(respTxnData.data);
    					            		    		                	$scope.data = $scope.data.replace('manualReplace.remittance.retrievedBankName', $scope.bankName);
    					        		    		        			});
    					        		    		        			
    					        		    		        			var promise1 = getRrnNo( respTxnData.data.id);
    					        										promise1.then(function(resp){
    					        											if(resp.data.financialTransactions != null && resp.data.financialTransactions.length > 0 
    					        													&& resp.data.financialTransactions[0].rrn != null && resp.data.financialTransactions[0].rrn != "")
    					        												$scope.rrn = resp.data.financialTransactions[0].rrn;
    					        											else
    					        												$scope.rrn = "NA";
    					        											$timeout(function() {
    					        												$scope.printContent($scope.data.replace('manualReplace.remittance.retrievedRRN', $scope.rrn));
    					        											}, 200); // 2 milliseconds
    					        											
    					        										}, function(error){
    					        											$scope.rrn = "NA";
    					        										});
    					        		    		        			
    					                		    		        	$rootScope.$emit("ResetWallet", {});*/
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
    									    		        		//label: "Print Receipt",
    									    		                label: "OK",
    									    		                className: 'btn-indepay',
    					                    		                callback: function() {
    					            		    		        		/*$scope.data = printReceipt(respTxnData.data);
    					            		    		        		$scope.$apply();
    					            		    		        		var promiseBD = getBranchDetails(respTxnData.data.ifsc);
    					        		    		        			promiseBD.then(function(resp){
    					        		    		        				$scope.bankName = resp.data.bankBranchName;
    					            		    		                	$scope.data = printReceipt(respTxnData.data);
    					            		    		                	$scope.data = $scope.data.replace('manualReplace.remittance.retrievedBankName', $scope.bankName);
    					            		    		                	$scope.printContent($scope.data.replace('manualReplace.remittance.retrievedRRN', $scope.rrn));
    					        		    		        			});
    					        		    		        			
    					        		    		        			var promise1 = getRrnNo( respTxnData.data.id);
    					        										promise1.then(function(resp){
    					        											if(resp.data.financialTransactions != null && resp.data.financialTransactions.length > 0 
    					        													&& resp.data.financialTransactions[0].rrn != null && resp.data.financialTransactions[0].rrn != "")
    					        												$scope.rrn = resp.data.financialTransactions[0].rrn;
    					        											else
    					        												$scope.rrn = "NA";
    					        											$scope.printContent($scope.data.replace('manualReplace.remittance.retrievedRRN', $scope.rrn));
    					        										}, function(error){
    					        											$scope.rrn = "NA";
    					        										});
    					        		    		        			
    					                		    		        	$scope.getDetails();
    					                		    		        	$('input#amount_'+beneId).val(undefined);
    					                		    		        	$rootScope.$emit("ResetWallet", {});*/
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
    				            					}
    				            					else if (respTxnData.data.status == 'REMITTANCE_REQUEST_STAGED'){
    				            						$rootScope.$emit("getCount", {});
    				            						showTitle = "<font color='#cd5c5c'>Request Failed: Low Wallet Balance</font>";
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
    				                    		                }
    				                    		            }
    				                    		        }
    				                    		    });
    				        					}
    		    		        				
    		    		        				
    		    		        				
    		    		        			});
				                   			
				                   			
				                   			
				        					
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
							
							
							$scope.processTxn = function(txnSummary) {
								var dialog = bootbox.dialog({
									title: 'Transaction Summary',
									 message: "<p>Reference ID: "+ txnSummary.custRefId +"</p><p>Transaction Amount: &#8377; "+ txnSummary.tranAmount +"</p><p>Total: &#8377; "+ txnSummary.grossTranAmount +"</p>",
					    		     buttons: {
					    		    	 cancel: {
					    		                label: '<i class="fa fa-times"></i> Cancel',
					    		                className: 'btn-default'
					    		            },
					    		    	 confirm: {
				    		                label: "Proceed",
				    		                className: 'btn-indepay',
											callback: function(){
				    		            		var jsonConfData = {
				    		           				 "id" : txnSummary.id
				    		               		};
				    		            		var confPromise = RemittancePromiseService.postResponse("transaction-facade/confirmRemittance", jsonConfData);
				    		               		confPromise.then(function(respData) {
				    		            			chkSession(respData);
				    		               			getTxnLimit($scope.user.mobileNumber);
				        		               		$('#remittanceStatusModal').modal('show');
				        		               		
				        		               		$timeout(function() {
					        		               		fetchUpdTxnDetails(respData.data.id,respData.data.staged,(new Date()).getTime(), txnSummary); 
					        		               		//fetchStatementList();
					        		               		$rootScope.$emit("ResetWallet", {});
        											}, 5000);
				        		               			               			
				    		               		},
				    		            		function(error) {
				    		               			if (error.data.errorMessage == "Agent wallet interaction failed") {
														bootbox.alert("Request Failed: Low Wallet Balance");
													}
				    		               			else {
				    		               				bootbox.alert("Request Failed: "+error.data.errorMessage);
				    		               			}
				    		            		});
				    		                } 
				    		            }
								    },
								    closeButton: false,
								    onEscape : function() {
										$('.bootbox.modal').modal('hide');
									}
								});
							};
							
						} ]);
