app.controller('limitReqCtrl', [
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
		function($location, $scope, $timeout, $http, remittanceService, RemittancePromiseService, $window, $cookies, $rootScope) {
			var apiTokenCookie = $cookies.get('API-TOKEN');
			
			$("#date").datepicker({
				maxDate : 0,
				minDate: "-3M",
				dateFormat : "dd/mm/yy",
    	        onSelect: function(dob) {
    	        	$scope.date = dob;
    	            $scope.$apply();
    	        }
			});
			
			$scope.isErrorMsg = false;
			$scope.errorMsg = "";
			
			$scope.isSuccessMsg = false;
			$scope.successMsg = "";
			
			$scope.channels = getPayChannel();
			$scope.accInfo = getAccDetails();
			$scope.banks = getBankDetails();
			$scope.miniStmts = getStatements(5);
			
			$scope.isTxnReq = false;
			$scope.isImgReq = false;
			
			//Session timeout Start
			chkSession = function(responseData) {
				if(responseData.status===200 && responseData.data.toString().indexOf("<!DOCTYPE") >= 0){
					var urlScheme = $location.absUrl().split(":")[0];
					var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
					$window.location.href = url;
				}
			}
	    	//Session timeout End
			
			$scope.getBankList = function() {
				var promise = RemittancePromiseService.getResponse('limit/getBank');
				promise.then(function(payload){
					chkSession(payload);
					$scope.banks = payload.data;
				}, function(error){
					console.log("Bank list fetching error " + error);
				});
			};
			
			$scope.getMiniStatement = function(maxEntries) {
				if (maxEntries == null || maxEntries == undefined || maxEntries <= 0) {
					maxEntries = 5;
				}
				getStatements(maxEntries);
			}
			
			function getStatements(maxEntries) {
				var promise = RemittancePromiseService.getResponse('limit/getLastRequestsByDelNo/' + maxEntries);
				promise.then(function(payload){
					chkSession(payload);
					$scope.miniStmts = payload.data;
				}, function(error){
					console.log("Mini Statements list fetching error " + error);
				});
			}
			
			function getPayChannel() {
				var promise = RemittancePromiseService.getResponse('limit/getPayChannels');
				promise.then(function(payload){
					chkSession(payload);
					$scope.channels = payload.data;
				}, function(error){
					console.log("Payment Channel list fetching error " + error);
				});
			}
			
			function getAccDetails() {
				var promise = RemittancePromiseService.getResponse('limit/getAccountDetails');
				promise.then(function(payload){
					chkSession(payload);
					$scope.accInfo = payload.data;
				}, function(error){
					console.log("Payment Channel list fetching error " + error);
				});
			}
			
			function getBankDetails() {
				var promise = RemittancePromiseService.getResponse('limit/getBankDetails');
				promise.then(function(payload) {
					chkSession(payload);
					$scope.banks = payload.data;
				}, function(error) {
					console.log("Bank List fetching error " + error);
				});
			}
			
			$scope.requestLimit = function(requestForm) {
				$('#limitSub').html('Submitting.. <i class="fa fa-spinner spinner--steps"></i>');
				$scope.isClicked = true;
				
				var image;
				var imageName;
				var upload = $scope.upload;
				if (upload != null && upload != undefined && upload != "") {
					var reader = new FileReader;
					reader.readAsBinaryString(upload);
					reader.onload = function() {
						image = window.btoa(reader.result);
						imageName = upload.name;
					};
				}
				$timeout(function() {

					jsonData = {
						"txnDate": $scope.date,
					    "accountId": $scope.bankName,
					    "amountInPaisa": $scope.amount * 100,
					    "channel": $scope.payMode,
					    "notes": $scope.narration,
					    "tranIdentifier": $scope.txnId,
					    "branchName": $scope.branch,
					    "requestReceipt" : {
					    	"imageContents": image,
					        "origFileName": imageName
					    }
					};
					
					var promise = RemittancePromiseService.postResponse('limit/create', jsonData);
					promise.then(function(payload){
						chkSession(payload);
						var data = payload.data;
						var status = "";
						var msg = "";
						if (data.status == null || data.status == undefined || data.status == "") {
							status = 'FAILED!';
							msg = data.errorMessage;
						}
						else if (data.status == "RECEIVED") {
							status = 'SUCCESS';
							msg = 'Limit Request submitted successfully';
						}
						$scope.resetForm(requestForm);
						$('#limitSub').html('Submit');
						$scope.isClicked = false;
						bootbox.alert('<h4>' + status + '</h4><p>' + msg + '</p>', function() {
							if (status == 'SUCCESS') {
								$scope.getMiniStatement();
							}
							$scope.isTxnReq = false;
							$scope.isImgReq = false;
						});
					}, function(error){
						console.log("Error in raising limit request " + error);
						$scope.resetForm(requestForm);
						$('#limitSub').html('Submit');
						$scope.isClicked = false;
						bootbox.alert('Error!');
					});
				}, 200);
			};
			
			$scope.resetForm = function(requestForm) {
				$scope.date = "";
				$scope.bankName = "";
				$scope.amount = "";
				$scope.payMode = "";
				$scope.narration = "";
				$scope.txnId = "";
				$scope.branch = "";
				$('input[type="file"]').val('');
				$scope.upload = "";
				
	    		requestForm.$setPristine();
			};
			
			$scope.check = function(payMode) {
				if (payMode == 'BRANCH_DEPOSIT' || payMode == 'CDM_WR') {
					$scope.isTxnReq = false;
					$scope.isImgReq = true;
					$('#upd').css('display', 'initial');
					$('#tid').css('display', 'none');
				} else {
					$scope.isTxnReq = true;
					$scope.isImgReq = false;
					$('#tid').css('display', 'initial');
					$('#upd').css('display', 'none');
				}
			}
		}
]);