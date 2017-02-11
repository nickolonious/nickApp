nickApp.controller('recordsController', function($scope){
  
  var wishRef = firebase.database().ref().child('DadsVinyl');
  var imageRef = 'http://www.diamond-cutting-stylus.com/s/cc_images/cache_2438499211.jpg?t=1369689975';

  wishRef.once('value', function(datasnap){
        $scope.records = datasnap.val();
        console.log($scope.records);
        angular.forEach($scope.records, function(record) {
            record.image = record.image ?  record.image: imageRef;
        });
        $scope.$apply();
    });
});