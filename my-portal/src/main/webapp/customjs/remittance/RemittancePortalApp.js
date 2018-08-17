var app = angular.module("remittancePortalApp", ['ngCookies']);


app.controller("portalController", portalController);

function portalController($scope, $http, $cookies, $rootScope) {
	var toggled = false;
	$scope.navToggleClick = function(){
		if(!toggled){
			$('#navbarToggle').addClass('shrinked');
			$('#toggle-btn').removeClass('active');
			toggled = true;
		}else{
			$('#navbarToggle').removeClass('shrinked');
			$('#toggle-btn').addClass('active');
			toggled = false;
		}
	};
};

