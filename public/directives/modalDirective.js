 nickApp.directive('modalDialog', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      link: function(scope) {
        scope.cancel = function() {
          scope.$dismiss('cancel');
        };
      },
      template:
        "<div>" +
          "<div class='modal-header'>" +
          "<div title='cancel' id='cancelModal' ng-click='cancel()'>X</div>" +
            "<h3 ng-bind='dialogTitle'></h3>" +
            
          "</div>" +
          "<div class='modal-body' ng-transclude></div>" +
        "</div>"
    };
  });