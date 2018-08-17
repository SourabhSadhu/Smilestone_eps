
app.controller(
				'accountDetailsController',
				[
						'$location',
						'$scope',
						'$timeout',
						'$http',
						'remittanceService',
						'RemittancePromiseService',
						'datatable',
						'$window',
						'$cookies',
						'$rootScope',
						function($location, $scope,$timeout, $http, remittanceService,
								RemittancePromiseService, datatable, $window,
								$cookies, $rootScope) {
							var apiTokenCookie = $cookies.get('API-TOKEN');

							$scope.docDefinition = "";
							$scope.searchDiv = true;
							$scope.searchErrMsgDIV = false;
							$scope.dataTableDiv = true;
							$scope.printFormDiv = false;
							$scope.isError = false;
							$scope.errorMsg = "";
							
							$scope.searchForm;
							
							var defaultVal = "500";

							var startDate = "";
							var endDate = "";
							var maxEntries = defaultVal;

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
							
							// Note: Function for populating Account Details in grid view
							
							fetchAccountDetails(startDate, endDate, maxEntries);
							
							function fetchAccountDetails(startDate,endDate,maxEntries) {
								
								var datatableConfig = {
									"name" : "simple_datatable",
									"columns" : [
											/*{
												"header" : "Transaction Id",
												"order" : false,
												"type" : "text",
												"property" : "id"
											},*/
											{
												"header" : "Transaction Date",
												"property" : "dateTime",
												"type" : "text",
												"order" : false													
											},
											{
												"header" : " Reference No",
												"property" : "refNo",
												"order" : false,
												"type" : "text"
											},
											{
												"header" : "Cust RefId",
												"property" : "custRefNo",
												"order" : false,
												"type" : "text"										
											},															
											{
												"header" : "Narration",
												"property" : "narration",
												"order" : false,
												"type" : "text"

											},
											{
												"header" : "Debit",
												"property" : "debitAmt",
												"order" : false,
												"type" : "text",	
												"render" : function(value, line) {
													if (value.debitAmt != "" && value.debitAmt != null && value.debitAmt != undefined){
														var result = value.debitAmt;
														return result.toFixed(2);
													}
													else {
														return value.debitAmt;
													}
													
												}
											
											},
											{
												"header" : "Credit",
												"property" : "creditAmt",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													if (value.creditAmt != "" && value.creditAmt != null && value.creditAmt != undefined){
														var result = value.creditAmt;
														return result.toFixed(2);
													}
													else {
														return value.creditAmt;
													}
												}
											},
											{
												"header" : "Balance",
												"property" : "balance",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													var result = value.balance;
													return result;//.toFixed(2);
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
											accAction(data);
										}
									}
								};

								$scope.accountDatatable = datatable(datatableConfig);

								var promise = RemittancePromiseService.getResponse('dashboard/fetchAccountDetails?startDate='
												+ startDate
												+ '&endDate='+endDate
												+ '&maxEntries='+maxEntries);
								

								promise.then(function(payload) {
									chkSession(payload);
									$scope.delNo=payload.data.delNo;
									$scope.docDefinition = payload.data.statementEntries;

									$scope.currentBalance=payload.data.currentBalance;
									datatableData = payload.data.statementEntries;
									if (datatableData.length > 0) {
										$scope.searchErrMsgDIV = false;
										
										
										//Modifying data table for CREDIT, DEBIT fields
										for(var i = 0; i < datatableData.length; i++){											
											//Change in transaction status
											var value = datatableData[i];
										
											value.dateTime=RemittancePromiseService.timeStampToDate(value.dateTime);
												
											value.creditAmt="";
											value.debitAmt ="";
											
											if (value.type == 'CREDIT') {
												value.creditAmt=value.amount;
											}else if(value.type == 'DEBIT'){
												value.debitAmt =value.amount;												
											}
											$scope.docDefinition[i].amount = $scope.docDefinition[i].amount.toFixed(2);
											$scope.docDefinition[i].balance = $scope.docDefinition[i].balance.toFixed(2);
											
										}//end for
										
										$scope.accountDatatable.setData(datatableData);
									} else {
										$scope.searchErrMsgDIV = true;
										$scope.errorMsg = "No data found";
									}

								}, function(errorPayload) {
									console.log("failure loading "
											+ errorPayload);
								});

							};

							function accAction(data) {
								$scope.printData = data;
								// $('#printModel').modal('show');
								$scope.dataTableDiv = false;
								$scope.printFormDiv = true;
								$scope.searchErrMsgDIV = false;
							};
							

													

							// For Search 
							$scope.searchAccount = function() {
								$scope.searchErrMsgDIV = false;
								startDate = document.getElementById('from').value;
								endDate = document.getElementById('to').value;
								//maxEntries = document.getElementById('maxEntries').value;
								var formattedStartDate = "";
								var formattedEndDate = "";
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
									$scope.errorMsg = "Transaction From Date should be less than Transaction To Date";
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
								
								if(RemittancePromiseService.isEmpty(maxEntries)){
									maxEntries = defaultVal;
								}
								fetchAccountDetails(formattedStartDate,formattedEndDate,maxEntries);

							};

							// Search Form Reset
							$scope.searchFormReset = function() {
								$scope.searchDiv = true;
								$scope.dataTableDiv = true;
								$scope.searchForm.$setPristine();
								$scope.searchErrMsgDIV = false;
								
								//This part of form reset is required to reset search form field after perform action from grid view. 
								/*$scope.maxEntries="";
								$('#maxEntries').get(0).selectedIndex = 0;*/
								$('#from').datepicker('setDate', null);
								$('#to').datepicker('setDate', null);
																					
								startDate = "";
								endDate = "";
								maxEntries = defaultVal;

								fetchAccountDetails(startDate, endDate, maxEntries);
							}

						

						} ]);
