app.factory('RemittancePromiseService',function($http, $window, $location) {
	return {
		isSessionExpired : function(){
			var promise = $http.get('dashboard/getWalletLimit');
			promise.then(
				function(responseData) {
					//if(responseData.status===200 && responseData.data.toString().includes("<!DOCTYPE")){
					if(responseData.status===200 && responseData.data.toString().indexOf("<!DOCTYPE") >= 0){
						var urlScheme = $location.absUrl().split(":")[0];
						var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
						$window.location.href = url;
						return true;
					}						    			    
				 },		
				 function(error) {
				    	console.log("Failure to get wallet "+error );
				});
			return false;
		},
		
		getResponseWithSession: function(urlString, successCallback, errorCallback){
			var promise = $http.get(urlString);
			promise.then(
				function(responseData) {
					if(responseData.status===200 && responseData.data.toString().indexOf("<!DOCTYPE") >= 0){
						var urlScheme = $location.absUrl().split(":")[0];
						var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
						$window.location.href = url;
					}else{
						successCallback(responseData);
					}						    			    
				 },		
				 function(error) {
					 errorCallback(error);
				});
		},
		
		postResponseWithSession: function(urlString, requestBody, successCallback, errorCallback){
			var promise = $http.post(urlString, requestBody);
			promise.then(
				function(responseData) {
					if(responseData.status===200 && responseData.data.toString().indexOf("<!DOCTYPE") >= 0){
						var urlScheme = $location.absUrl().split(":")[0];
						var url = urlScheme+"://" + $window.location.host + "/portal/remittance/login";
						$window.location.href = url;
					}else if(responseData.status===200 && responseData.data !== null && responseData.data !== undefined  ){
						successCallback(responseData);
					}						    			    
				 },		
				 function(error) {
					 errorCallback(error);
				});
		},
		
		getResponse : function(urlString){
			if(!this.isSessionExpired()){
				return $http.get(urlString);
			}			
		},
		postResponse : function(urlString,jsonData){
			if(!this.isSessionExpired()){
				return $http.post(urlString,jsonData);
			}
		},
		postResponseWithoutSession : function(urlString,jsonData){
			return $http.post(urlString,jsonData);
		},
		putResponse : function(urlString) {
			return $http.put(urlString);
		},
		parseError : function(errorPayload){
			return JSON.parse(angular.toJson(errorPayload));
		},
		isEmpty : function(val){
			return (val === undefined || val == null || val.length <= 0) ? true : false;
		},
		dateSplit : function(data,splitChar){
			return data.split(splitChar);
		},
		dateRangeCheck : function(date1,date2,dateRange){
			var today = new Date();
			if(this.isEmpty(date1)){
				return false;
			}else if(this.isEmpty(date2) && this.isEmpty(dateRange)){
				date1 = new Date(date1);
				return (date1 > today) ? false : true;
			}else {
				date1 = new Date(date1);
				date2 = new Date(date2);
				if(date2 < date1) return false;
				return date2 > (date1 + dateRange) ? false : true;
			}
		},
		timeStampToDate : function(timeStamp){
			function pad(s) { return (s < 10) ? '0' + s : s; }
			var date = new Date(timeStamp);
			var day = [pad(date.getDate()),pad(date.getMonth()+1),pad(date.getFullYear())].join('/');
			var time = [pad(date.getHours()),pad(date.getMinutes()),pad(date.getSeconds())].join(':');
			return day + " " + time;
		},
		dateDiffInDays : function(startDate, endDate) {			
			var _MS_PER_DAY = 1000 * 60 * 60 * 24;
			// Discard the time and time-zone information.
			var utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
			var utc2 = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
			
			return Math.floor((utc2 - utc1) / _MS_PER_DAY);
		},
		resendOtpTimeoutInSec : function(){
			return {
				timeoutInSeconds : 60
			} 
		}
	}
});