nickApp.controller('wishlistController', function($scope){
  $scope.wishlist = [
    {
        id: 0,
        title: "Adidas Neo Shoes",
        price: "$65",
        size: "11.5",
        image: "knickpullover.png",
        description: "Royal Blue Knicks Pullover"
    },
    {
        id: 1,
        title: "Knicks Zipper Hoodie",
        price: "$59.99",
        size: "XL",
        image: "knicksZipper.png",
        description: "Gray Knicks Zipper Hoodie"

    },
    {
        id: 2,
        title: "Knicks Pullover Hoodie",
        price: "$59.99",
        size: "XL",
        image: "adidasShoe.png"
    },
     {
        id: 3,
        title: "Glossy Black Polarized Wayfarers",
        price: "~$200.00",
        size: "55",
        image: "blackRaybans.png"
    }
    ]
})