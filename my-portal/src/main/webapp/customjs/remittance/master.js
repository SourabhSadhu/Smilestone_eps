var app = angular.module("masterApp", ['ultimateDataTableServices','ngMessages','ui.bootstrap', 'ngCookies', 'ngSanitize', 'chart.js']);


app.controller("masterController", masterController);

function masterController($scope, $http, $cookies, $rootScope, $location,$window, RemittancePromiseService) {
	$scope.image = getImage();
	
	var toggled = false;
	$scope.logoView=true;
	$scope.navToggleClick = function(){
		if(!toggled){
			$('#navbarToggle').addClass('shrinked');
			$('#toggle-btn').removeClass('active');
			$scope.logoView=false;
			toggled = true;
		}else{
			$('#navbarToggle').removeClass('shrinked');
			$('#toggle-btn').addClass('active');
			$scope.logoView=true;
			toggled = false;
		}
	};
	
	//To Create Certificate
	 $scope.createCertificate = function() {
		 	var sessionExpired=false;
			var promise = $http.get('dashboard/getWalletLimit');
			promise.then(
				function(responseData) {
					if(responseData.status===200 && responseData.data.toString().indexOf("<!DOCTYPE") >= 0){
						var urlScheme = $location.absUrl().split(":")[0];
						var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
						$window.location.href = url;
						sessionExpired= true;
					}	
					
					if(!sessionExpired){
						 $scope.selectedItem = "retailercertificate";
							$http({url:'dashboard/getCertificate',method: 'GET', responseType: "arraybuffer"
					        }).success(function(data) {
					                var blob = new Blob([data], { type: 'application/pdf' });
					                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
					                    window.navigator.msSaveOrOpenBlob(blob, 'Certificate.pdf');
					                }
					                else {
					                    var objectUrl = URL.createObjectURL(blob);
					                    window.open(objectUrl);
					                }
						    });
					 }
					
				 },		
				 function(error) {
				    	console.log("Failure to get wallet "+error );
				});
		
	}
	
	 getOutboxCount();
	 
	 $rootScope.$on("getCount",function(){
		 getOutboxCount();
		});
		 
	 function getOutboxCount(){		 
		//get ticker details.
		 $scope.count = null;
		 var outboxCount = RemittancePromiseService.getResponse('transaction-facade/fetchStagedTransactionCount');
		 outboxCount.then(
		function(count) {
			if(count.data>0){
				$scope.count = count.data;
			}			
		 },
		 function(error) {
		    	console.log("Failure ::: "+error );
		});
	 }	
	 
	//get the user details.
	var userDetails = RemittancePromiseService.getResponse('dashboard/getUserDetails');
	userDetails.then(
		function(user) {
		    $scope.user = user.data;
		 },		
		 function(error) {
		    	console.log("Failure to get user details "+error );
		});
	
	
	//get the url path to highlight the menu used in nav.html page
	//alert($location.absUrl());
	//var path=$location.absUrl().split("/")[5];
	var path=$location.absUrl();
	$scope.selectedItem = path;
	
	$scope.reloadSamePage = function(page){
		var urlScheme = $location.absUrl().split(":")[0];
		var url = urlScheme+"://" + $window.location.host + "/portal/remittance/"+page;
		//alert(url);
		$window.location.href = url;
	};
	
	function getImage() {
    	var promise = RemittancePromiseService.getResponse('profile/getIEOimage');
    	promise.then(function(payload) {
    		$scope.image = payload.data;
    	}, function(error) {
    		console.log("error in loading image: " + JSON.stringify(error));
    		// load default image
    	});
    }   
	
	 var isEkycEnabled = false;
	 isEkycEnabled= RemittancePromiseService.getResponse("profile/isKycSupportEnabled");
		 isEkycEnabled.then(function(kyc) {
			 $scope.isKycEnabled=kyc.data;
		 });
		 isAEPSServiceEnabled
		 
	var isAEPSServiceEnabled = false;
		 isAEPSServiceEnabled = RemittancePromiseService.getResponse("profile/isAEPSServiceEnabled");
		 isAEPSServiceEnabled.then(function(aeps) {
		$scope.isAEPSServiceEnabled=aeps.data;
	});
		
};

