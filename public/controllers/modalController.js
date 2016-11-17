nickApp.controller('modalController', ['$scope', '$uibModal', 'AuthFactory', 'authPass', 
    function($scope, $uibModal, AuthFactory, authPass) {
     $scope.openModal = function () {
     $uibModal.open({
      templateUrl: '../templates/login.html',
      controller: ModalLoginController
      
    });
  }
    AuthFactory.$onAuth(function(authData){
            authPass.setAuth(authData);
             $scope.authData = authData;  
		 });
    
  }]);

var ModalLoginController = function ($scope, $uibModalInstance) {
  $scope.dialogTitle = 'Login';
    $scope.cancel = function() {
       $uibModalInstance.close('cancel');
    }; 
};