nickApp.controller('changeLogController', function($scope){
  $scope.changes = [
    {
        id: 0,
        version:"0.1",
        title: "Hello World!",
        description: "First push to the site! needed to get something out so my family could see the wishlist I created.",
        dateTime: "Tuesday Nov 15th 8:25pm"
        
    },
    {
        id: 1,
        version:"0.2",
        title: "Small Navigation Fixes / Change Log Page",
        description: "Pretty much everyone I talked to informed me that not collapsing the menu after clicking was causing confusion. So I fixed that! Also tweaked the Side Nav links a little to look a little better(will return to that later) and added a change log so people could see if anything has been changed recently.",
        dateTime: "Wednesday Nov 16th 4:00pm"
       
    },
    {
        id: 2,
        version:"0.3",
        title: "Education & Skills Page / Throwing out some garabage",
        description: "In an effort to fill my site with content before bed, I added information about my degree and skills I have been acquiring lately. By the end you should see the culmination of nearly all of them. This project is a Frankenstein's monster consisting of the Angular Material starter app, and an other app I had abandoned. The best part about failing in development is at least you have alot of code leftover and you know exactly how it works.",
        dateTime: "Wednesday Nov 16th 9:00pm" 
    }  
    ];
});