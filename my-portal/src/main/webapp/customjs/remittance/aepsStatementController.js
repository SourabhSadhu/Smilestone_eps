//user details view controller		
app.controller(
				'aepsStatementController',
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
							$scope.isError = false;
							$scope.errorMsg = "";
							$scope.rrn = "NA";
							$scope.searchForm;
							
							
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
							fetchStatementList(startDate, endDate);
							function fetchStatementList(startDate,endDate) {
								var datatableConfig = {
									"name" : "simple_datatable",
									"columns" : [
											{
												"header" : "Type",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													if (value.txnType == 'WITHDRAWAL') {
														return 'Cash Withdrawal';
													} else if (value.txnType == 'BALANCE_ENQUIRY') {
														return 'Balance Inquiry';
													}
													return "";
												}
											},
											{
												"header" : "Transaction Date",
												"property" : "creationTime",
												"type" : "text",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													if(value.creationTime != null){
														var time = RemittancePromiseService.timeStampToDate(value.creationTime);
														return time;
													}
													return "";
												}
											},
											{
												"header" : "Cust Ref.ID",
												"property" : "custRef",
												"order" : false,
												"type" : "text",
												"group" : true

											},
											{
												"header" : "Transaction ID",
												"property" : "txnId",
												"order" : false,
												"type" : "text",												
											
											},
											{
												"header" : "RRN",
												"property" : "rrn",
												"order" : false,
												"type" : "text"
											},
											{
												"header" : "Amount",
												"property" : "amount",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													if(value.amount != null && value.amount != undefined && value.amount != ""){
														var result = value.amount / 100.0;
														return result.toFixed(2);
													}else{
														return value.amount;
													}
												}
											},
											{
												"header" : "Status",
												"property" : "status",
												"order" : false,
												"type" : "text",
												"render" : function(value, line) {
													return value.status;
												}
											}],
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
											txnAction(data);
										}
									}
								};								

								$scope.statementDatatable = datatable(datatableConfig);
								var jsonData = {
										"startDate": startDate,
										"endDate": endDate
										};					

								var promise = RemittancePromiseService.postResponse('transaction-facade/fetchAEPSTxnsList',jsonData);
								promise.then(function(payload) {
								chkSession(payload);
									
								datatableData = payload.data;
								if (datatableData.length > 0) {					
									$scope.searchErrMsgDIV = false;					
									$scope.statementDatatable.setData(datatableData);
									} else {
										$scope.searchErrMsgDIV = true;
										$scope.errorMsg = "No data found";
									}
								}, function(errorPayload) {
									console.log("failure loading "+ errorPayload);
								});

							};

				
				

							// For Search Transaction
							$scope.searchTxns = function() {
								$scope.searchErrMsgDIV = false;
								
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

								fetchStatementList(formattedStartDate,formattedEndDate);

							};

							// Search Form Reset
							$scope.searchFormReset = function() {
								$scope.searchDiv = true;
								$scope.dataTableDiv = true;
								$scope.searchErrMsgDIV = false;
								
								//This part of form reset is required to reset search form field after perform action from grid view. 
								$('#from').datepicker('setDate', null);
								$('#to').datepicker('setDate', null);
														
								startDate = "";
								endDate = "";

								fetchStatementList(startDate, endDate);
							}

	} ]);
