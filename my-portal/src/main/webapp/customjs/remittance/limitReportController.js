app.controller('limitReportCtrl', [
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
		function($location, $scope, $timeout, $http, remittanceService, RemittancePromiseService, $window, $cookies, datatable, $rootScope) {
			var apiTokenCookie = $cookies.get('API-TOKEN');
			
			$scope.isErrorMsg = false;
			$scope.errorMsg = "";
			
			$scope.isSuccessMsg = false;
			$scope.successMsg = "";
			
			$scope.channels = getPayChannel();
			$scope.dataTableDiv = true;
			
			// Date picker
			$("#txnDate").datepicker({
				maxDate : 0,
				dateFormat : "dd/mm/yy"
			});
			$( function() {
				var dateFormat = "dd/mm/yy",
			    from = $( "#startDate" )
			      .datepicker({
			        yearRange: "2018:+0",
			        changeMonth: true,
			        changeYear : true,
			        maxDate : 0,//"-1D",
			        minDate: "-3M",
			        dateFormat : "dd-mm-yy"
			      })
			      .on( "change", function() {
			        to.datepicker( "option", "minDate", getDate( this ) );
			      }),
			    to = $( "#endDate" ).datepicker({
			        yearRange: "2018:+0",
			        changeMonth: true,
			        changeYear : true,
			        maxDate : 0,
			        minDate: "-3M",
			        dateFormat : "dd-mm-yy"
			    })
			      .on( "change", function() {
			        from.datepicker( "option", "maxDate", getDate( this ) );
			    });
			 
			    function getDate( element ) {
			      var date;
			      try {
			        date = $.datepicker.parseDate( dateFormat, element.value );
			      } catch( error ) {
			        date = null;
			      }
			      return date;
			    }
			});
			
			//Session timeout Start
			chkSession = function(responseData) {
				if(responseData.status===200 && responseData.data.toString().indexOf("<!DOCTYPE") >= 0){
					var urlScheme = $location.absUrl().split(":")[0];
					var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
					$window.location.href = url;
				}
			}
	    	//Session timeout End
			
			function getPayChannel() {
				var promise = RemittancePromiseService.getResponse('limit/getPayChannels');
				promise.then(function(payload){
					chkSession(payload);
					$scope.channels = payload.data;
				}, function(error){
					console.log("Payment Channel list fetching error " + error);
				});
			}
			
			fetchLimitRequests(payMode.value, status, txnDate.value, startDate.value, endDate.value);
			
			function fetchLimitRequests(payMode, status, txnDate, startDate, endDate) {
				var datatableConfig = {
						"name" : "simple_datatable",
						"columns" : [
							{
								"header" : "Ref Id",
								"property" : "requestId",
								"type" : "text",
								"order" : false
							},
							{
								"header" : "Payment Mode",
								"property" : "channel",
								"type" : "text",
								"order" : false
							},
							{
								"header" : "Txn Id",
								"property" : "tranIdentifier",
								"type" : "text",
								"order" : false
							},
							{
								"header" : "Txn Date",
								"property" : "txnDate",
								"type" : "text",
								"order" : false,
								"tdClass" : function(data, property) {
									return "text-center";
								}
							},
							{
								"header" : "Amount",
								"property" : "amountInPaisa",
								"type" : "text",
								"order" : false,
								"render" : function(value, line) {
										return "&#8377; " + (value.amountInPaisa/100.0).toFixed(2);
								}
							},
							{
								"header" : "Receipt",
								"property" : "requestReceipt.origFileName",
								"type" : "img",
								"order" : false,
								"render" : function(value, line) {
										var img = value.requestReceipt;
										return "<a href='#'>" + value.requestReceipt.origFileName + "</a>";
								}
							},
							{
								"header" : "Status",
								"property" : "status",
								"type" : "text",
								"order" : false,
								"render" : function(value, line) {
									var str = value.status;
									return (str == 'RECEIVED') ? 'PENDING': str;
								},
								"tdClass" : function(data, property) {
									return "text-center";
								}
							},
							{
								"header" : "Requested On",
								"property" : "createdOn",
								"type" : "text",
								"order" : false,
								"tdClass" : function(data, property) {
									return "text-center";
								}
							},
							{
								"header" : "Narration",
								"property" : "notes",
								"type" : "text",
								"order" : false
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
							"overCallback" : function(line, data) {},
							"leaveCallback" : function(line, data) {},
							"clickCallback" : function(line, data) {}
						}
				};
				
				$scope.limitDatatable = datatable(datatableConfig);
				
				var promise = RemittancePromiseService.getResponse("limit/fetch-limit-request"
							+ "?payMode=" + payMode
							+ "&status=" + status
							+ "&txnDate=" + txnDate
							+ "&startDate=" + startDate
							+ "&endDate=" + endDate);
				
				promise.then(function(payload) {
					chkSession(payload);
					datatableData = payload.data;
					if (datatableData.length > 0) {
						
						// Modifying data for display
						for(var i = 0; i < datatableData.length; i++) {
							var value = datatableData[i];
							value.createdOn = RemittancePromiseService.timeStampToDate(value.createdOn);
						}
						
						$scope.limitDatatable.setData(datatableData);
					} else {
						$scope.isErrorMsg = true;
						$scope.errorMsg = "No Data Found";
						$scope.dataTableDiv = false;
					}
				}, function(error) {
					console.log('Error in fetching data ' + error);
					$scope.isErrorMsg = true;
					$scope.errorMsg = "Something went wrong. Please try again";
					$scope.dataTableDiv = false;
				});
			}
			
			// For search
			
		} 
]);