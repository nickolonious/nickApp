nickApp.service('fbAuth', ['$firebaseAuth', 'authPass', '$rootScope',
     function($firebaseAuth, authPass, $rootScope) {
    		
// Create a callback which logs the current auth state

    provider = new firebase.auth.FacebookAuthProvider();

    FB.Event.subscribe('auth.authResponseChange', checkLoginState);

    provider.setCustomParameters({
        'display': 'popup'
    });
    
    this.fbSignIn = function() {
        var fbResult = firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        authPass.setAuth(result.user);
        $rootScope.$broadcast('authenticated');
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
        return fbResult;
    };

    this.fbSignOut = function () {
        var fbResult = firebase.auth().signOut().then(function() {
            // Sign-out successful.
            this.user = {
                photoURL: 'icons/accountCircle.svg'
            };
            authPass.setAuth(this.user);
            $rootScope.$broadcast('authenticated');
            }, function(error) {
            // An error happened.
            console.log(error);
        });
        return fbResult;
    };

    function checkLoginState(event) {
        if (event.authResponse) {
        // User is signed-in Facebook.
            var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(event.authResponse, firebaseUser)) {
            // Build Firebase credential with the Facebook auth token.
            var credential = firebase.auth.FacebookAuthProvider.credential(
            event.authResponse.accessToken);
            // Sign in with the credential from the Facebook user.
            firebase.auth().signInWithCredential(credential).catch(function(error) {
            // Handle Errors here.
             var errorCode = error.code;
            var errorMessage = error.message;
             // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            });
        } 
        //else {
        // User is already signed-in Firebase with the correct user.
        //}
        });
    } else {
     // User is signed-out of Facebook.
    firebase.auth().signOut();
  }
}


}]);