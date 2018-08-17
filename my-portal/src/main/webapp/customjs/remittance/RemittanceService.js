app.service('remittanceService',['RemittancePromiseService', '$rootScope', function(RemittancePromiseService, $rootScope) {
	var serviceObj = null;//the object to hold user data
	return {
		getWalletLimit : function() {
			var promise = RemittancePromiseService
					.getResponse('dashboard/getWalletLimit');
			promise.then(function(walletData) {
				if (walletData.status === 200
						&& walletData.data.toString().indexOf(
								"<!DOCTYPE") >= 0) {
					walletLimit = "";
					var urlScheme = $location.absUrl().split(":")[0];
					var url = urlScheme + "://" + $window.location.host
							+ "/portal/remittance/login";
					$window.location.href = url;
					return;
				}
				$rootScope.walletLimit = walletData.data;
			}, function(error) {
				console.log("Failure to get wallet " + error);
			});
		},
		getJson : function() {
			return serviceObj;
		},
		setJson : function(value) {
			serviceObj = value;
		}
		
		
		
	}
}]);
