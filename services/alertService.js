// don't forget to declare this service module as a dependency in your main app constructor!
 var alertService = angular.module('nickApp');

alertService.factory('alertService', function($rootScope) {
    var alertArray = {};

    // create an array of alerts available globally
    $rootScope.alerts = [];
    
    alertArray.add = function(type, msg) {
      $rootScope.alerts.push({'type': type, 'msg': msg});
    };

    alertArray.closeAlert = function(index) {
      $rootScope.alerts.splice(index, 1);
    };

    return alertArray;
  });