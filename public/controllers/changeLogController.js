nickApp.controller('changeLogController', [ '$scope', '$firebaseObject', '$firebaseArray', 
    function($scope, $firebaseObject, $firebaseArray){
 
  var changeLogRef = firebase.database().ref().child('Changelog');

  changeLogRef.once('value', function(datasnap){
        $scope.changes = $firebaseArray(changeLogRef);
        $scope.$apply();
    });
}]);