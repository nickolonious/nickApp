nickApp.directive('bootstrapAlert',function(){
  return {
        restrict:'E',
        replace: true,
        templateUrl:'../templates/alert.html',
        scope:{
            options:'='
        },
        transclude:true,
    };
});