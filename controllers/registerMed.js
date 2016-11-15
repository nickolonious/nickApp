  nickApp.controller("registerMedicalController", ['$scope', '$rootScope', '$firebaseArray', '$interval' , 'AuthFactory' , 'authPass', '$location', 'alertService',
     function($scope, $rootScope, $firebaseArray, $interval, AuthFactory, authPass, $location, alertService) {
            AuthFactory.$onAuth(function(authData){
                authPass.setAuth(authData);
                $scope.authData = authData;
		    });
  var ref = new Firebase("https://nickapp-359c9.firebaseio.com/medicalInfo");
  //var ref = new Firebase("https://potstop.firebaseIO.com/medicalInfo");

   $scope.medInfo = $firebaseArray(ref);  
      
		var tick = function() {
		$scope.clock = Date.now();
	}
	tick();
	$interval(tick,1000);

  // add new items to the array
  	$scope.addMedInfo = function(authData) {					  
     if($scope.stateLicenseNumber === null || $scope.stateLicenseNumber === "" || $scope.stateLicenseNumber === undefined) {
				alertService.add("danger", "State License Number Must be filled in");
		  }
     if($scope.federalTaxId === null || $scope.federalTaxId === "" || $scope.federalTaxId === undefined) {
				alertService.add("danger", "Federal Tax ID Must be filled in");
		  }
     if($scope.accountType === null || $scope.accountType === "" || $scope.accountType === undefined) {
				alertService.add("danger", "Account Type Must be filled in");
		  }
     if($scope.medName === null || $scope.medName === "" || $scope.medName === undefined) {
				alertService.add("danger", "Medical Name Must be filled in");
		  }
     if($scope.serialNumber === null || $scope.serialNumber === "" || $scope.serialNumber === undefined) {
				alertService.add("danger", "Serial Number Must be filled in");
		  }
      else {
        ref.child($scope.authData.uid).set({   
		  	    uid: $scope.authData.uid,
            stateLicenseNumber: $scope.stateLicenseNumber,
			      federalTaxId: $scope.federalTaxId,
		  	    accountType: $scope.accountType,
            lastModified: $scope.clock	  	  
		      });
       return $location.path('/profile');     
  	  };
    };
      
    $scope.skipToProfile = function() {
        $location.path('/profile');
    }
  }]);  