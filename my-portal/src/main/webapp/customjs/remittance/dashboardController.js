//user details view controller		
app.controller('dashboardController',[
     '$location',
     '$scope',
     '$http',
     'remittanceService',
     'RemittancePromiseService',
     '$window',
	 '$cookies',
	 '$rootScope',
	 '$interval',
	 function($location,$scope,$http,remittanceService,RemittancePromiseService,$window,$cookies,$rootScope, $interval){
	

   	  
   	  /*$scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
   	  $scope.series = ['Series A', 'Series B'];

   	  $scope.data = [
   	    [65, 59, 80, 81, 56, 55, 40],
   	    [28, 48, 40, 19, 86, 27, 90]
   	  ];
   	  $scope.pieData = [300, 500, 100];
   	  $scope.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];*/
     
    	 
     var apiTokenCookie = $cookies.get('API-TOKEN');
	 var mobile = "";
	 
	 $rootScope.walletLimit = 0;
	
	//get the user details.
	var userDetails = RemittancePromiseService.getResponse('dashboard/getUserDetails');
	userDetails.then(
	function(user) {
			    $scope.user = user.data;
			    mobile = user.data.mobileNumber;
			    var firstLogin=$scope.user.changePwdRequired;
			    
			    //First Time login change password should call
		      if(firstLogin){		    
			    	$('#myModalForm').modal('show');
			  }//end if*/	
		    
	},		
	function(error) {
			console.log("Failure.. "+error );
	});
	
	
	
	
	 fetchTicker();
	 
	 function fetchTicker(){		 
		//get ticker details.
		 $scope.tickerMessage="";
		 var tickerDetails = RemittancePromiseService.getResponse('dashboard/getTickerDetails');
		tickerDetails.then(
		function(ticker) {
			if(ticker.data.length>0){
				$scope.tickerMessage = ticker.data;
			}			
		 },
		 function(error) {
		    	console.log("Failure ::: "+error );
		});
	 }	 
	 
	 
	
	//Fetch in dash board required details  
	fetchWalletDetails();
	fetchTxnDetails();
	fetchCommission();
	fetchTxnDetailsFTD();
	fetchCommissionFTD();
	//Throughput= Sales summary
	fetchSalesSummaryGrpByCrtnDate()
	
	//fetchGraphDataTxnAmountGrpByCrtnDate();
	fetchDailyPurchaseGrpByCrtnDate();
	
	function fetchWalletDetails(){
		remittanceService.getWalletLimit();
	};
	
	function fetchTxnDetails(){
		//$http.defaults.headers.common.Authorization = 'Bearer '+apiTokenCookie;
		var promise = RemittancePromiseService.getResponse('dashboard/getTxnDetails');
		promise.then(
			function(txn) {
				$scope.txn = txn.data;
			 },
			 function(error) {
			    	console.log("Failure to get Txn "+error );
			});
	};	
	
	function fetchCommission(){
		//$http.defaults.headers.common.Authorization = 'Bearer '+apiTokenCookie;
		var promise = RemittancePromiseService.getResponse('dashboard/getCommission');
		promise.then(
			function(commission) {
				$scope.commission = commission.data;
			 },
			 function(error) {
			    	console.log("Failure to get wallet "+error );
			});
	};
	
	function fetchTxnDetailsFTD(){
		//$http.defaults.headers.common.Authorization = 'Bearer '+apiTokenCookie;
		var promise = RemittancePromiseService.getResponse('dashboard/getTxnDetails-FTD');
		promise.then(
			function(resp) {
				$scope.txnftd = resp.data;
				$scope.pieChartSuccessTransactionCount=resp.data.successTransactionCount;
				$scope.pieChartfailureTransactionCount=resp.data.failureTransactionCount;
				$scope.pieChartInProgTransactionCount=resp.data.inProgTransactionCount;
				
				$scope.pieChartLabels = ["Success", "Failure", "In-progress"];
				$scope.pieChartData = [$scope.pieChartSuccessTransactionCount, $scope.pieChartfailureTransactionCount, $scope.pieChartInProgTransactionCount];
				$scope.ftdCountOptions = {
						  
							    legend: {
							      display: true,
							      position: 'bottom'
							    }
						};
				
			 },
			 function(error) {
			    	console.log("Failure to get Txn "+error );
			});
	};	
	
	function fetchCommissionFTD(){
		//$http.defaults.headers.common.Authorization = 'Bearer '+apiTokenCookie;
		var promise = RemittancePromiseService.getResponse('dashboard/getCommission-FTD');
		promise.then(
			function(resp) {
				$scope.commissionftd = resp.data;
			 },
			 function(error) {
			    	console.log("Failure to get wallet "+error );
			});
	};
	

	function fetchGraphDataTxnAmountGrpByCrtnDate(){

		var promise = RemittancePromiseService.getResponse('dashboard/fetchTxnAmntGrpByCrtnDateGraph');
		promise.then(
			function(resp) {
				$scope.origData = resp.data;
				$scope.labels=resp.data.xAxisDate;
				$scope.data =resp.data.yAxisTranAmount;

			 },
			 function(error) {
			    	console.log("Failure to get Sales Summary: "+error );
			});
	};
	
	function fetchSalesSummaryGrpByCrtnDate(){

		var promise = RemittancePromiseService.getResponse('dashboard/fetchSaleSummaryGrpByCrtnDateGraph');
		promise.then(
			function(resp) {
				$scope.origData = resp.data;
				$scope.salesSummaryLabels=resp.data.xAxisDate;
				$scope.salesSummaryData =resp.data.yAxisTranAmount;
				
				$scope.salesSummaryOptions = {
						
					    scales: {
					      yAxes: [
					        {
					          id: 'y-axis-1',
					          type: 'linear',
					          display: true,
					          position: 'left',
					          scaleLabel: {
					            display: true,
					            labelString: 'Throughput (lac)'
					          }
					        }
					      ],
					      xAxes: [ 
					        {
					          scaleLabel: {
					            display: true,
					            labelString: 'Date'
					          }
					        }
					      ]
					    }
					  };
			 },
			 function(error) {
			    	console.log("Failure to get Sales Summary: "+error );
			});
	};
	
	function fetchDailyPurchaseGrpByCrtnDate(){

		var promise = RemittancePromiseService.getResponse('dashboard/fetchDailyPurchaseGrpByCrtnDateGraph');
		promise.then(
			function(resp) {
				$scope.origData = resp.data;
				$scope.dailyPurchaseLabels=resp.data.xAxisDate;
				$scope.dailyPurchaseData =resp.data.yAxisTranAmount;
				
				$scope.dailyPurchaseOptions = {
						
					    scales: {
					      yAxes: [
					        {
					          id: 'y-axis-1',
					          type: 'linear',
					          display: true,
					          position: 'left',
					          scaleLabel: {
					            display: true,
					            labelString: 'Primary(lac)'
					          }
					        }
					      ],
					      xAxes: [ 
					        {
					          scaleLabel: {
					            display: true,
					            labelString: 'Date'
					          }
					        }
					      ]
					    }
					  };
			 },
			 function(error) {
			    	console.log("Failure to get Daily purchase: "+error );
			});
	};
	
	$rootScope.$on("ResetWallet",function(){
		$scope.walletLimitReset();
	});
	
	
	$scope.walletLimitReset = function(){
		 fetchWalletDetails();		
	};
	
	$scope.commissionReset = function(){
		fetchCommission();
	};
	
	$scope.txnReset = function(){
		fetchTxnDetails();
	};
		
	
	$scope.updatePassword = function(){
		//alert("Inside Change Password");
		//alert($scope.newPassword);
		//alert(mobile);
		
		var jsonData={
				'mobileNumber':mobile,
				'passwordHash':sha256($scope.newPassword)
		};
		var changePwd = RemittancePromiseService.postResponse('dashboard/changePassword',jsonData);
		changePwd.then(
		          function(payload) {
		        	
		             $('#myModalForm').modal('hide');
		              
		  				bootbox.alert({ 
			              	  closeButton: false,
			              	  size: "small",
			              	  message: "Password changed successfully.Please login with new password.", 
			              	  callback: function(){ 
			              		/*var url = "http://" + $window.location.host + "/portal/remittance/login";
				  				$window.location.href = url;*/
			              		$('#logOut').submit();	
			              	  }
			              	});
		          },
		          function(errorPayload) {
		              console.log("failure loading "+ errorPayload);
		          });
		
	};
	
}]);