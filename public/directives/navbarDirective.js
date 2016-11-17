nickApp.directive('bootstrapNavbar',function(){
  return {
        restrict:'E',
        templateUrl:'templates/navbar.html',
        scope:{
            options:"="
        },
        transclude:true,
    };
});