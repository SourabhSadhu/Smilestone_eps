app.controller("profileCtrl", profileCtrl);

function profileCtrl($scope, $http, $cookies, $rootScope, $location, $window, RemittancePromiseService,remittanceService) {
	
	var toggled = false;
	$scope.logoView = true;
	$scope.dataURL;

	var userDetails = RemittancePromiseService.getResponse('dashboard/getUserDetails');
	userDetails.then(function(user) {
		var data = user.data;
		$scope.name = data.firstName + " " + data.lastName;
		$scope.delno = data.delNo;
		$scope.mobile = data.mobileNumber;
		var status = data.status;
		if(status == 'A'){
			$scope.status = 'Active';
		}else
			$scope.status = 'Inactive'
		$scope.shopName = data.shopName;
		
	}, function(error) {
		console.log("Failure to get user details " + error);
	});
	
	$scope.upload = function() {
		swal({
			title: 'Select Receipt',
			input: 'file',
			inputAttributes: {
				'accept': 'image/*',
				'aria-label': 'Upload your profile picture'
			},
			confirmButtonText: 'Proceed',
			showLoaderOnConfirm: true,
			preConfirm: (file) => {
				if(file){
					return new Promise((resolve) => {
						var data = new FormData();
						var type = file.type;
						data.append('image', file);
						var config = {
								transformRequest: angular.identity,
								transformResponse: angular.identity,
								headers : {
									'Content-Type': undefined
								}
						}
						
						var promise = $http.post('profile/uploadIEOimage?image=' + data, data, config);
						promise.then(function(payload) {
							if (payload.data != null) {
								var status = payload.data.status;
								if (status === 200) {
									resolve(status);
								}
								else {
									resolve(payload.data);
								}
							}
						}, function(error) {
							console.log("Errror:: " + error);
							swal.close();
						});
					})
				}
			},
			allowOutsideClick: () => !swal.isLoading()
		}).then((result) => {
			if (result.value) {
				swal('Success', 'Image Uploaded Successfully', 'success');
			}
			else {
				swal('Failed!', result.value.desc, 'error');
			}
		});
	}
	
	
	var distDetails = RemittancePromiseService.getResponse('profile/getDistributorDetails');
	distDetails.then(function(user) {
		var dist = user.data;
		$scope.distName = dist.name;
		$scope.distDelno = dist.delno;
	}, function(error) {
		console.log("Failure to get user details " + error);
	});
	
}
