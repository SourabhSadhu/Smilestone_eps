//user details view controller		
app.controller('cashPickUpController', [
		'$location',
		'$scope',
		'$http',
		'remittanceService',
		'RemittancePromiseService',
		'$window',
		'$cookies',
		'$rootScope',
		'$timeout',
		function($location, $scope, $http, remittanceService,
				RemittancePromiseService, $window, $cookies, $rootScope, $timeout) {
			var apiTokenCookie = $cookies.get('API-TOKEN');
			
			$scope.transactionId = "";
			
		    var tranStatus = ["SUB_AGENT_FINALIZED","SUB_AGENT_ON_WAY","SUB_AGENT_REACHED","UIN_DISPATCHED","UIN_MATCHED","OTP_DISPATCHED",
		    		"OTP_MATCHED","SUB_AGENT_CONFIRMED_CASH_ACCEPTANCE","FIN_TXN_IN_PROG","FIN_TXN_DEEMED","COMPLETED"];
			
		    initialize = function() {
				$scope.transactionShow = true;
				$scope.tansactionDetailShow = false;
				$scope.tansactionFinalStatusShow = false;
				$scope.tansactionErrorRespCodeShow = false;
				$scope.amount="";
				$scope.remarks = "";
				$scope.isError = false;
				$scope.errorMsg = "";
				$scope.requestPlaced = "circle white";
				$scope.agentNotified = "circle white";
				$scope.agentOnTheWay = "circle white";
				$scope.agentReached = "circle white";
			    $scope.dateAndTime = "";
			    $scope.preferredTimeSlot = "";
			    $scope.transactionType = "";
			    $scope.transaction;
			    $scope.isTransactionCancellable = false;
			    $scope.isEnterUIN = false;
			    $scope.isRegenerateOTP = false;
			    $scope.selectedReason;
			    $scope.selectedReasonDesc;
			    $scope.uin = "";
		    }
		    chkSession = function(responseData){
		    	//Session timeout issue Start	
				if(responseData.status===200 && responseData.data.toString().indexOf("<!DOCTYPE") >= 0){
					var urlScheme = $location.absUrl().split(":")[0];
					var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
					//$window.location.reload();
					$window.location.href = url;
				}
				//Session timeout issue End
		    }
		    initialize();
		    
		    $scope.resetRejectionText = function() {
		    	$scope.selectedReasonDesc = null;
		    }
		    
			$scope.initiateCashPickup = function(){
				var initCashPickupRequest = {};
				initCashPickupRequest.tranAmount = $scope.amount;
				initCashPickupRequest.remarks = $scope.remarks;
				
				var promise = RemittancePromiseService.postResponse('transaction-facade/initiateCashPickup',initCashPickupRequest);
				promise.then(
				
					function(txn) { 
						
						chkSession(txn);
						
						$scope.transactionShow = false;
						$scope.tansactionDetailShow = true;
						$scope.isError = false;
						$scope.transactionId = angular.copy(txn.data.id);					
						$scope.getTransactionDetails();
						
					 },		
					 function(error) {
					    	console.log("Failure to get Txn "+error );
					    	$scope.isError = true;
					    	$scope.errorMsg = error.data.errorMessage;
					 }
				);
			};	

			$scope.hideErrorMsg = function() {
				$scope.isError = false;
			}
			
			$scope.getTransactionDetails = function(){
				var errorCounter = 0;
				//initialize();
				var txnPromise = RemittancePromiseService.getResponse('transaction-facade/fetchCashPickupTransaction?txnId='+$scope.transactionId);
				txnPromise.then(
					function(successdata){
						
						chkSession(successdata);
						
						$scope.transaction = angular.copy(successdata.data);
						$scope.custRefId = angular.copy(successdata.data.custRefId);
						$scope.transactionId = angular.copy(successdata.data.id);
						
						if($scope.transaction.possibleActions.indexOf("CANCEL") > -1){
							$scope.isTransactionCancellable = true;
						}
						
						if($scope.transaction.possibleActions.indexOf("ENTER_UIN") > -1){
							$scope.isEnterUIN = true;
							$scope.isTransactionCancellable = false;
						}

						if($scope.transaction.possibleActions.indexOf("REGENERATE_OTP") > -1){
							$scope.isRegenerateOTP = true;
						}
						
						if (tranStatus.indexOf($scope.transaction.status) >= tranStatus.indexOf("COMPLETED")){
							$scope.transactionShow = false;
							$scope.tansactionDetailShow = true;
							$scope.tansactionFinalStatusShow = true;
							$scope.isRegenerateOTP = false;
							$scope.errorMsg = "";
							
														
							if ($scope.transaction.responseCode != null && $scope.transaction.responseCode != 'SUCCESS'){
								$scope.tansactionErrorRespCodeShow = true;
								$scope.requestPlaced = "circle white";
								$scope.agentNotified = "circle white";
								$scope.agentOnTheWay = "circle white";
								$scope.agentReached = "circle white";
								$scope.isTransactionCancellable = false;
							}
						}
						else if ($scope.transaction.status != null){
							$scope.transactionShow = false;
							$scope.tansactionDetailShow = true;
							$scope.tansactionFinalStatusShow = false;
							
							$scope.requestPlaced = "circle green";
							if (tranStatus.indexOf($scope.transaction.status) >= tranStatus.indexOf("SUB_AGENT_FINALIZED")){
								$scope.agentNotified = "circle green";
							}
							else{
								$scope.agentNotified = "circle white";
							}
							if (tranStatus.indexOf($scope.transaction.status) >= tranStatus.indexOf("SUB_AGENT_ON_WAY")){
								$scope.agentOnTheWay = "circle green";
							}
							else{
								$scope.agentOnTheWay = "circle white";
							}
							if (tranStatus.indexOf($scope.transaction.status) >= tranStatus.indexOf("SUB_AGENT_REACHED")){
								$scope.agentReached = "circle green";
							}
							else{
								$scope.agentReached = "circle white";
							}
						}
						
										    
					    //Added to get the Time Slot details based on customer ID(customerId)
						if($scope.transaction.customerId != "" || $scope.transaction.customerId != null || $scope.transaction.customerId === undefined)
						{
							var timeSlotPromise = RemittancePromiseService.getResponse('transaction-facade/fetchCashPickupTimeSlot?customerId='+$scope.transaction.customerId+'&timeSlot='+$scope.transaction.timeSlotCode);
							timeSlotPromise.then(function(timeSlotData) {								 
									chkSession(timeSlotData);
								    
									$scope.dateAndTime = RemittancePromiseService.timeStampToDate($scope.transaction.modifiedTime);
								    $scope.preferredTimeSlot = $scope.transaction.timeSlotCode +" " +timeSlotData.data.description;
								    $scope.transactionType = "Cash Pickup";
								    $scope.amount = $scope.transaction.tranAmount/100;
								   
								   
								}, function(errortimeSlotData) {
									console.log("failure loading "+ errortimeSlotData);
								});
						}
						
						$scope.transaction.custom_status = $scope.transaction.status;
						//Added for responseCode = FAILURE_CUST_REJECT Should display as Customer rejected
						if($scope.transaction.responseCode == 'FAILURE_CUST_REJECT' && tranStatus.indexOf($scope.transaction.status) >= tranStatus.indexOf("COMPLETED")){
							$scope.transaction.custom_status = "Customer Rejected";
						}
						
					},
					function(errorData){
						errorCounter++;
						
						if (errorCounter <=3){
							$timeout(function() {
								$scope.getTransactionDetails();
					        }, 1000);
						}
						else {
							console.log("Failure to get Txn "+errorData );
					    	$scope.isError = true;
					    	$scope.errorMsg = errorData.data.errorMessage;
						}
					}
				);
				if ($scope.tansactionDetailShow === true){
					$timeout(function() {
						$scope.getTransactionDetails();
						remittanceService.getWalletLimit();
			        }, 3000);
				}
			}
			
			$scope.cancelTransaction = function(){
				var cancelTxnPromise = RemittancePromiseService.getResponse('transaction-facade/fetchRejectionCodes');
				cancelTxnPromise.then(
					function(reasonCodes) {
						chkSession(reasonCodes);
						
						$scope.rejectonReasons = reasonCodes.data;
						$('#cancellationModal').modal('show');
					 },		
					 function(error) {
					    	console.log("Failure to get Txn "+error );
					    	$scope.isError = true;
					    	$scope.errorMsg = error.data.errorMessage;
					 }
				);
				
			}

			$scope.confirmCancelTransaction = function(){
				var cancelRequest = {};
				cancelRequest.rejectionCode = $scope.selectedReason.rejectionCode;
				cancelRequest.rejectionText = $scope.selectedReasonDesc;
				cancelRequest.id = $scope.transactionId;

				var cancelTxnPromise = RemittancePromiseService.postResponse('transaction-facade/cancelCashPickup', cancelRequest);
				cancelTxnPromise.then(
					function(reasonCodes) {
						chkSession(reasonCodes);
						
						$('#cancellationModal').modal('hide');
						//initialize();
						$scope.transactionId = angular.copy(cancelRequest.id);
						$scope.getTransactionDetails();
						$scope.isTransactionCancellable = false;
					 },		
					 function(error) {
					    	console.log("Failure to get Txn "+error );
					    	$scope.isError = true;
					    	$scope.errorMsg = error.data.errorMessage;
					 }
				);
			}

			$scope.submitUIN = function(){
				var uinRequest = {};
				uinRequest.id = $scope.transactionId;
				uinRequest.otpHash = sha256($scope.uin);

				var uinTxnPromise = RemittancePromiseService.postResponse('transaction-facade/uinMatchCashPickup', uinRequest);
				uinTxnPromise.then(
					function(reasonCodes) {
						chkSession(reasonCodes);
						
						initialize();
						$scope.transactionId = angular.copy(reasonCodes.data.id);
						$scope.getTransactionDetails();
					 },		
					 function(error) {
					    	console.log("Failure to get Txn "+error );
					    	$scope.isError = true;
					    	$scope.errorMsg = error.data.errorMessage;
					 }
				);
			}

			
			$scope.generateOTP = function(){
				var otpRequest = {};
				otpRequest.id = $scope.transactionId;

				var otpTxnPromise = RemittancePromiseService.postResponse('transaction-facade/otpRegenerateCashPickup', otpRequest);
				otpTxnPromise.then(
					function(reasonCodes) {				
						chkSession(reasonCodes);
						
						initialize();
						$scope.transactionId = angular.copy(reasonCodes.data.id);
						$scope.getTransactionDetails();
					 },		
					 function(error) {
					    	console.log("Failure to get Txn "+error );
					    	$scope.isError = true;
					    	$scope.errorMsg = error.data.errorMessage;
					 }
				);
			}

		    var queryParams = $location.search();
		    if (queryParams != null && queryParams.id != null && queryParams.id != undefined && queryParams.id != ""){
		    	$scope.transactionId = queryParams.id;
		    	$scope.getTransactionDetails();
		    }
		    
		    $(document).ready(function(){
		       $('#amount').keypress(function(){
			    	$scope.errorMsg= "";
			    });
			});
		} ]);