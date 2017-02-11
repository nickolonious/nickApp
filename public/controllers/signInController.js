nickApp.controller('signInController' , ['$scope', 'fbAuth', 'authPass',
     function($scope, fbAuth, authPass){  
    
    //Good $watch $destroy example not needed for now
    var w1 = $scope.$watch($scope.authData, function(data){
        $scope.authData = data;
    
        if($scope.authData === null || $scope.authData === undefined)
        {
            $scope.authData = {
                photoURL: 'icons/accountCircle.svg'
            };
        }
    });

    var o1 = $scope.$on('$destroy', function() {
        w1();
        o1();
     });

    $scope.fbSignIn = function() {
        fbAuth.fbSignIn().then(function(data) {
            console.log(data);
            
            $scope.authData = authPass.getAuth();
            $scope.$apply();
            console.log($scope.authData);
        
        }).catch(function(error) {
            $scope.error = error.message;
            console.log($scope.error);
        });
    };

    $scope.fbSignOut = function() {
        fbAuth.fbSignOut().then(function() {
            $scope.authData = authPass.getAuth();
            console.log($scope.authData);
        }).catch(function(error) {
            $scope.error = error.message;
            console.log($scope.error);
        });
    };

    

}]);