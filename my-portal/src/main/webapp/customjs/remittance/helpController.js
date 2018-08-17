//user details view controller		
app.controller('helpController',[
     '$location',
     '$scope',
     '$http',
     'remittanceService',
     'RemittancePromiseService',
     '$window',
	 '$cookies',
	 '$rootScope',
	 function($location,$scope,$http,remittanceService,RemittancePromiseService,$window,$cookies,$rootScope){
	 var apiTokenCookie = $cookies.get('API-TOKEN');
	 $scope.name = "";
	 $scope.description = "";
	 $scope.displayContactForm=false;
	 $scope.displayHelp=true;
		 
	 $scope.loggedInId ="";
	 var mobile = "";
	
	 $scope.submitContact = function(){
			//alert("Inside submitContact");
			 //Get the Logged in user details.
			var userDetails = RemittancePromiseService.getResponse('dashboard/getUserDetails');
			userDetails.then(
			function(user) { 
						$scope.user = user.data;
					    mobile = user.data.mobileNumber;
					    $scope.submitData();			    
			},		
			function(error) {
					console.log("Failure.. "+error );
			});	
			
		};
		
		
		$scope.submitData = function(){		
		
		var jsonData={
				'fullName'  : $scope.contactName,
				'contactNo' : $scope.contactMobile,
				'email'		: $scope.contactEmail,
				'issueType' : $scope.issueType,
				'issueDesc' : $scope.description,
				'loggedInId': mobile				
		};
		
		var submitData = RemittancePromiseService.postResponse('dashboard/submitContact',jsonData);
		submitData.then(
		          function(payload) {	
		  				bootbox.alert({ 
			              	  closeButton: false,
			              	  size: "small",
			              	  message: "Your feedback has been received by us. Indepay operation Support Team will contact you soon.", 
			              	  callback: function(){ 
			              		var url = "http://" + $window.location.host + "/portal/remittance/help";
				  				$window.location.href = url;
			              	  }
			              	});
		          },
		          function(errorPayload) {
		              console.log("failure loading "+ errorPayload);
		          });
		};
		
		/*$scope.showContact =function(){
			$scope.displayContactForm=true;
			$scope.displayHelp=false;			
			
		};*/
	 
	
}]);