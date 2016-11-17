nickApp.controller('changeLogController', function($scope){
  $scope.changes = [
    {
        id: 0,
        version:"0.0.1",
        title: "Hello World!",
        description: "First push to the site! needed to get something out so my family could see the wishlist I created.",
        dateTime: "Tuesday November 15th 8:25pm"
        
    },
    {
        id: 1,
        version:"0.0.2",
        title: "Small Navigation Fixes / Change Log Page",
        description: "Pretty much everyone I talked to informed me that not collapsing the menu after clicking was causing confusion. So I fixed that! Also tweaked the Side Nav links a little to look a little better(will return to that later) and added a change log so people could see if anything has been changed recently.",
        dateTime: "Wednesday November 16th 4:00pm"
       
    }]
});