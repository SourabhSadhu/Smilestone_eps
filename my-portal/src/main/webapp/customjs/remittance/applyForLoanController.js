app
		.controller(
				'applyForLoanController',
				[
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
						function($location, $scope, $timeout, $http,
								remittanceService, RemittancePromiseService,
								$window, $cookies, datatable, $rootScope) {

							var apiTokenCookie = $cookies.get('API-TOKEN');
							$scope.isError = false;
							$scope.isWithDrawal = false;
							$scope.loanDays = "";

							// Check access authentication
							/*
							 * var isCreditRequestEnabled = false;
							 * isCreditRequestEnabled =
							 * RemittancePromiseService.getResponse("profile/isCreditRequestEnabled");
							 * isCreditRequestEnabled.then(function(aeps) {
							 * if(!aeps.data){ var urlScheme =
							 * $location.absUrl().split(":")[0]; var url =
							 * urlScheme+"://" + $window.location.host +
							 * "/portal/remittance/login"; $window.location.href =
							 * url; } });
							 */

							// Session timeout issue Start
							chkSession = function(responseData) {
								if (responseData.status === 200
										&& responseData.data.toString()
												.indexOf("<!DOCTYPE") >= 0) {
									var urlScheme = $location.absUrl().split(
											":")[0];
									var url = urlScheme + "://"
											+ $window.location.host
											+ "/portal/remittance/login";
									$window.location.href = url;
								}
							}
							// Session timeout issue End

							$scope.applyLoan = function() {
								var promise = RemittancePromiseService
										.postResponse("loan/apply-loan", null);
								promise
										.then(function(response) {
											chkSession(response);
											console.log(JSON
													.stringify(response));
											var status = response.status;
											$scope.status = status;
											if (status == 200) {
												swal(
														'THANK YOU!',
														'Your request has been captured, our executive will get in touch with you in next 24 hours.',
														'success');
											} else {
												swal(
														'FAILED!',
														'Your request has been failed. Please try again later.',
														'error');
											}
										}, function(error) {
											  swal('Failed!', 'Your request has been failed. Please try again later.', 'error');
										  });

							}
							/* $scope.getLoanDetails = */
							getLoanDetails();
							function getLoanDetails() {
								var promise = RemittancePromiseService
										.getResponse("loan/getLoanDetails");
								promise.then(function(response) {
									chkSession(response);
									if (response.data != null
											|| response.data != ""
											|| response.data != undefined) {
										console.log(response.data);
										var data = response.data;
										var days=[];
										data.forEach(function(item, index, array) {
											  console.log(item.loan_days);
											  days.push(item.loan_days);
											  /*days = item.push(loan_days);*/
										});/*
										for ( var d=0; d <data.length; d++) {console.log(JSON.stringify(d));
											days = d.get(getLoan_days().join(", "))[d];
										}*/
										$scope.loanDays = days.join();
									}
								});
							}
							
						} ]);
