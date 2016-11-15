nickApp.controller('authController', [
    '$scope', '$rootScope', 'AuthFactory', '$firebaseAuth', 'authPass', '$firebaseArray', '$location', 'alertService', '$timeout', '$mdSidenav', '$log', 
 function($scope, $rootScope, AuthFactory, $firebaseAuth, authPass, $firebaseArray, $location, alertService, $timeout, $mdSidenav, $log) {
	var ref = new Firebase("https://nickapp-359c9.firebaseio.com/");
	var isSignUp = false;  
     
     $scope.isNavCollapsed = true;
     $scope.isCollapsed = false;
     $scope.isCollapsedHorizontal = false;

     $scope.users = $firebaseArray(ref);
     
     $rootScope.closeAlert = alertService.closeAlert; 

        $rootScope.$on('alertPushed', (function() {
             $scope.alerts = $rootScope.alerts;
             $scope.$apply();
        }));
        
     $scope.userData = "";
    
     $scope.signUp = function() {
        if($scope.email === null || $scope.email === "" || $scope.email === undefined) {
            alertService.add("danger", "Email must be entered to Sign Up")
        }
        if($scope.password === null || $scope.password === "" || $scope.password === undefined) {
            alertService.add("danger", "Password must be entered to Sign Up")
        }
        else {
            ref.createUser({
                email    : $scope.email,
                password : $scope.password
            }, function(error, userData) {
            if (error) {
                $scope.userData = userData;
                $scope.error = error;
                alertService.add("danger", error.message);
                $rootScope.$broadcast('alertPushed');     
            }     
            else {     
                $scope.userData = userData; 
                isSignUp = true;    
                $scope.logIn();       
                }
            });
        };
       };       
     
      $scope.logIn = function() {
        if($scope.email === null || $scope.email === "" || $scope.email === undefined) {
            alertService.add("danger", "Email must be entered to login")
        }
        if($scope.password === null || $scope.password === "" || $scope.password === undefined) {
            alertService.add("danger", "Password must be entered to login")
        }
        else {
        ref.authWithPassword({
            email    : $scope.email,
            password : $scope.password
            }, function(error, authData) {
            if (error) {
              alertService.add("danger", error.message);
              $rootScope.$broadcast('alertPushed');     
            } else {
            if (isSignUp == true) {
                return $location.path('/registerUser');
            }else {
                 return $location.path('/profile');
             }
            }
        });
        };
      };                
      
      AuthFactory.$onAuth(function(authData){
         authPass.setAuth(authData);
         $scope.authData = authData;
	  });
      
      $scope.logout = function() {
		 AuthFactory.$unauth();
	  }     

 $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }    
 }]);

   nickApp.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  })
  nickApp.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });
	
    
    
    