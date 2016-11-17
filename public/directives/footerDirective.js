nickApp.directive('bootstrapFooter',function(){
  return {
        restrict:'E',
        templateUrl:'templates/footer.html',
        scope:{
            options:"="
        },
        transclude:true,
    };
});