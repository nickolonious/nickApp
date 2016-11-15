  nickApp.controller("registerUserController", ['$scope', '$rootScope', '$firebaseArray', '$interval' ,'$firebaseObject','AuthFactory' , 'authPass', '$location', 'alertService',
  function($scope, $rootScope, $firebaseArray, $interval, $firebaseObject, AuthFactory, authPass, $location, alertService) {
  	AuthFactory.$onAuth(function(authData){
    	authPass.setAuth(authData);
     	$scope.authData = authData;
		});
						
		var ref = new Firebase("https://nickapp-359c9.firebaseio.com/users");
          	  
		var tick = function() {
			$scope.clock = Date.now();
		}
		tick();
		$interval(tick,1000);

  	// add new items to the array
  	$scope.addUserInfo = function(authData) {			
     if($scope.firstname === null || $scope.firstname === "" || $scope.firstname === undefined) {
				alertService.add("danger", "First Name Must be filled in");
		 }
	   if($scope.lastname === null || $scope.lastname === "" || $scope.lastname === undefined) {
				alertService.add("danger", "Last Name Must be filled in");
		 }
		 else {
     ref.child($scope.authData.uid).set({
		  	uid: $scope.authData.uid,
            firstName: $scope.firstname,
			lastName: $scope.lastname,
		  	dateTime: $scope.clock	  	  		
		  });
      
       return $location.path('/registerBiz');
       }
  	};
  }]);  
