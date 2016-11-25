nickApp.controller('wishlistController', function($scope){
  
  var wishRef = firebase.database().ref().child('WishList');

  wishRef.once('value', function(datasnap){
        $scope.wishlist = datasnap.val();
        console.log($scope.wishlist);
        $scope.$apply();
    });
});