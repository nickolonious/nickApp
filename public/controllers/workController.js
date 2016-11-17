nickApp.controller('workController', function($scope){ 
   	var ref = new Firebase("https://nickapp-359c9.firebaseio.com/");
    
    $scope.message='Work';
    
    var bizDataRef = new Firebase(ref + 'businesses/');
           bizDataRef.on('value', function(snap) {
           $scope.businesses = snap.val();         
    });
})