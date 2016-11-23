nickApp.controller('changeLogController', function($scope, $firebaseObject, $firebaseRef){
 


 const rootRef = firebase.database().ref().child('angular');
 const ref = rootRef.child('object');
 this.object = $firebaseObject(ref);
 this.sayHello
 
 
 
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
        description: "In an effort to fill my site with content before bed, I added information about my degree and skills I have been acquiring lately. Once this project is finished, you should see a combination of nearly all of them. This project is a Frankenstein's monster consisting of the Angular Material starter app, and an other app I had abandoned. The best part about failing in development is at least you have alot of code leftover and you know exactly how it works.",
        dateTime: "Wednesday Nov 16th 9:00pm" 
    },
    {
        id: 3,
        version:"0.4",
        title:"Logos",
        description:"I added logos to the about me page, makes the page easier to look at but not quite perfect in terms of the logos perfectly aligned and the same size. Will work on fixing that later.",
        dateTime:"Thursday Nov 17th 10:15pm"
    },
    {
        id: 4,
        version:"0.5",
        title: "Nav Icons / Code Cleanup",
        description: "There are now nav icons on the side nav, side nav font color changed from blue to black, deletion of unecessary code for smallest code possible",
        dateTime:"Saturday Nov 19 7:52pm"
    }  
    ];
});