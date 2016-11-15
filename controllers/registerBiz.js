  nickApp.controller("registerBusinessController", ['$scope', '$rootScope', '$firebaseArray', '$interval' , 'AuthFactory' , 'authPass', '$location', 'alertService',
  function($scope, $rootScope, $firebaseArray, $interval, AuthFactory, authPass, $location, alertService) {
            AuthFactory.$onAuth(function(authData){
            authPass.setAuth(authData);
            $scope.authData = authData;
		    });
      
  var ref = new Firebase("https://nickapp-359c9.firebaseio.com/");
    
  $scope.bizInfo = $firebaseArray(ref);
    
	var tick = function() {
		$scope.clock = Date.now();
	}
	tick();
	$interval(tick,1000);

  // add new items to the array
    	$scope.addBizInfo = function(authData) {					  
      if($scope.bizName === null || $scope.bizName === "" || $scope.bizName === undefined) {
				alertService.add("danger", "Name Must be filled in");
		  }
      if($scope.bizAddress === null || $scope.bizAddress === "" || $scope.bizAddress === undefined) {
				alertService.add("danger", "Address Must be filled in");
		  }
      if($scope.bizCity === null || $scope.bizCity === "" || $scope.bizCity === undefined) {
				alertService.add("danger", "City Must be filled in");
		  }
      if($scope.bizState === null || $scope.bizState === "" || $scope.bizState === undefined) {
				alertService.add("danger", "State Must be filled in");
		  }
      if($scope.bizZip === null || $scope.bizZip === "" || $scope.bizZip === undefined) {
				alertService.add("danger", "Zip Must be filled in");
		  }
   
      else {
      //fixes error when bizAddress2 is empty
      if($scope.bizAddress2 === null || $scope.bizAddress2 === undefined) {
        $scope.bizAddress2 = null;
      }
        
      ref.child($scope.authData.uid).set({       
		  	    uid: $scope.authData.uid,
            bizName: $scope.bizName,
			      bizAddress: $scope.bizAddress,
            bizAddress2: $scope.bizAddress2,
		  	    bizCity: $scope.bizCity,
            bizState: $scope.bizState,
            bizZip: $scope.bizZip,
            lastModified: $scope.clock,  	  
		   });
       return $location.path('/registerMed');     
      };	
    };
    
      
    $scope.skipToProfile = function() {
        $location.path('/profile');
    }
  }]);  
