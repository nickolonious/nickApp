nickApp.controller('profileController', [
       '$scope', '$rootScope', 'AuthFactory', 'authPass', 'rootRef', '$firebaseArray', '$firebaseObject',     
        function($scope, $rootScope, AuthFactory, authPass, rootRef, $firebaseArray, $firebaseObject){
          
          var ref = new Firebase("https://nickapp-359c9.firebaseio.com/");
             
         var authData = ref.getAuth();
         $scope.authData = authData;

         var userDataRef = new Firebase(ref + 'users/' + $scope.authData.uid);
         
         userDataRef.on('value', function(snap) {
           $scope.userData = snap.val();         
         });
         
         var bizDataRef = new Firebase(ref + 'businesses/' + $scope.authData.uid);
           bizDataRef.on('value', function(snap) {
           $scope.bizData = snap.val();         
         });
         
         var medDataRef = new Firebase(ref + 'medicalInfo/' + $scope.authData.uid);     
           medDataRef.on('value', function(snap) {
           $scope.medData = snap.val();         
         });
        
}]);