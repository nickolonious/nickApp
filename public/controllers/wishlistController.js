nickApp.controller('wishlistController', function($scope){
  
  var wishRef = firebase.database().ref().child('WishList');

  wishRef.once('value', function(datasnap){
        $scope.wishlist = datasnap.val();
        console.log($scope.wishlist);
        $scope.$apply();
    });
  
  
 /* $scope.wishlist = [
    {
        id: 0,
        title: "Knicks Pullover",
        price: "$59.99",
        size: "XL",
        image: "knickpullover.png",
        description: "Royal Blue Knicks Pullover",
        height: "96px",
        width: "96px"
    },
    {
        id: 1,
        title: "Knicks Zipper Hoodie",
        price: "$59.99",
        size: "XL",
        image: "knicksZipper.png",
        description: "Gray Knicks Zipper Hoodie",
        height: "96px",
        width: "96px"

    },
    {
        id: 2,
        title: "Adidas Neo Shoes",
        price: "65",
        size: "11.5",
        image: "adidasShoe.png",
        height: "100px",
        width: "150px",
        link: "http://www.adidas.com/us/daily-shoes/AW4571.html",
        linkTitle: "Adidas Website"
    },
     {
        id: 3,
        title: "Glossy Black Polarized Wayfarers",
        price: "~$200.00",
        size: "58mm",
        image: "blackRaybans.png",
        height: "96px",
        width: "96px"
    },
    {
        id: 4,
        title: "Star Wars Trilogy Episodes I-III (Blu-ray + DVD)",
        price: "~$35.00",
        image: "StarsWarsPrequel.png",
        height: "96px",
        width: "96px",
        link: "https://www.amazon.com/Star-Trilogy-Episodes-I-III-Blu-ray/dp/B00E9PMML2/ref=sr_1_1?ie=UTF8&qid=1479263395&sr=8-1&keywords=star+wars+trilogy+prequel",
        linkTitle: "Amazon"
},
    {
        id: 5,
        title: "Pain 100% Hot Sauce",
        price: "~$12.00",
        image: "pain100.png",
        height: "96px",
        width: "96px",
        link: "https://www.amazon.com/gp/product/B000LBNUUU/ref=pd_ybh_a_2?ie=UTF8&refRID=0HZVDXPEQ2GYV749KET6&th=1",
        linkTitle: "Amazon"
    },
     {
        id: 6,
        title: "Android Figure",
        price: "~$19.99",
        image: "android.png",
        height: "96px",
        width: "96px",
        link: "https://www.amazon.com/Android-Mini-Collectible-Figure-Green/dp/B007AKXDW0/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1479339058&sr=1-1&keywords=android+green+guy",
        linkTitle: "Amazon"
    },
      {
        id: 7,
        title: "Blair's Mega Death Sauce With Liquid Rage",
        price: "~$14.69",
        image: "blairs.png",
        height: "96px",
        width: "96px",
        link: "https://www.amazon.com/dp/B0000DIX2M/ref=nav_timeline_asin?_encoding=UTF8&th=1",
        linkTitle: "Amazon"
    },
    {
         id: 8,
        title: "Blue Snowball Condenser Microphone",
        price: "~$49.99",
        image: "microphone.png",
        height: "96px",
        width: "96px",
        link: "https://www.amazon.com/Blue-Snowball-iCE-Condenser-Microphone/dp/B014PYGTUQ/ref=sr_1_15?ie=UTF8&qid=1479264522&sr=8-15&keywords=yeti+microphone",
        linkTitle: "Amazon"
    },
       {
        id: 9,
        title: "60W MagSafe power adapter with L style connector",
        price: "~$49.99",
        image: "magsafe.png",
        height: "96px",
        width: "96px",
        //link: "",
        //linkTitle: "Apple"
    }
    ] */
})