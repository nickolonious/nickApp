nickApp.controller('signInController', function($scope){  


    if($scope.user == null || $scope.user == undefined)
    {
        $scope.user = {
            image: "icons/accountCircle.svg"
        };
    }
    provider = new firebase.auth.FacebookAuthProvider();

    provider.setCustomParameters({
     'display': 'popup'
    });

    $scope.$watch('user', function(user){
        $scope.user = user;
    });  

    $scope.fbSignIn = function() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        $scope.user.fullName = result.user.displayName;
        $scope.user.email = result.user.email;
        $scope.user.image = result.user.photoURL;
        $scope.$digest();
         // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
         // ...
        });

    };

    $scope.fbSignOut = function () {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            $scope.user = {
                image: "icons/accountCircle.svg"
            };
            console.log($scope.user);
            }, function(error) {
            // An error happened.
            console.log(error);
        });
    };
});