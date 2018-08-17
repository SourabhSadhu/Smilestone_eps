app.controller('changePasswordController',[
     '$location',
     '$scope',
     '$http',
     'remittanceService',
     'RemittancePromiseService',
     '$window',
	 '$cookies',
	 '$rootScope',
	 function($location,$scope,$http,remittanceService,RemittancePromiseService,$window,$cookies,$rootScope){
	
    	 var that = this;
    	 var changePasswordRequest = {};
    	 //Session timeout issue Start
    	 chkSession = function(responseData){
    		if(responseData.status===200 && responseData.data.toString().indexOf("<!DOCTYPE") >= 0){
    		var urlScheme = $location.absUrl().split(":")[0];
    		var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
    		//$window.location.reload();
    		$window.location.href = url;
    		}
		   }
    	//Session timeout issue End
    	 
   	  $scope.changePwd = function () {
		  $scope.showMsg = false;
		  changePasswordRequest.currentPasswordHash = sha256($scope.oldPass);
		  changePasswordRequest.newPasswordHash = sha256($scope.newPass);
		  
		  var promise = RemittancePromiseService.postResponse('profile/changePassword',changePasswordRequest);
		  	promise.then(
		  			function(response){
		  				if(response.status == 200){
		  					$scope.oldPass = "";
	  						$scope.newPass = "";
	  						$scope.confirmPass = "";
	  						$scope.changePassform.$setPristine();
		  					/*$scope.msgClass = "alert alert-success";
		  					$scope.infoMsg = "Password Changed Succesfully";
		  					$scope.showMsg = true;*/
		  					bootbox.alert({ 
				              	  closeButton: false,
				              	  size: "medium",
				              	  message: "Password changed successfully.Please login with new password.", 
				              	  callback: function(){ 
				              		$('#logOut').submit();	
				              	  }
				              	});
		  				}
		  			},
		  			 function(error) {
		  				if(error.status==401){
		  					$scope.msgClass = "alert alert-danger";
		  					$scope.infoMsg = "You have entered wrong current password.";
		  					$scope.showMsg = true;
		  				}
		  				else if(error.status==423){
		  					$scope.msgClass = "alert alert-danger";
		  					$scope.infoMsg = "User Blocked!!!";
		  					$scope.showMsg = true;
		  				}else{
		  					$scope.msgClass = "alert alert-danger";
		  					$scope.infoMsg = "Server error! please check network connection.";
		  					$scope.showMsg = true;
		  				}
						 $scope.oldPass = "";
	  					 $scope.newPass = "";
	  					 $scope.confirmPass = "";
	  					 $scope.changePassform.$setPristine();
	  				} 
	  			);
		  
		}
    	 
    	 
}]);

app.directive("unMatcher", function($timeout) {
    return {
        restrict : "A",

        require : "ngModel",

        link : function(scope, element, attributes, ngModel) {
            ngModel.$validators.unMatcher = function(modelValue) {
                return attributes.unMatcher !== modelValue;
            };
        }
    };
});
