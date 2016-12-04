nickApp.controller('aboutMeController', ['$scope', '$firebaseObject', '$firebaseArray',
    function($scope, $firebaseObject, $firebaseArray){ 
    
    $scope.title='About Me';

    var aboutMeRef = firebase.database().ref().child('Education');
    var skillsRef = firebase.database().ref().child('Skills');
    var projectRef = firebase.database().ref().child('Projects');

    aboutMeRef.once('value', function(datasnap){
        $scope.education = datasnap.val();
        $scope.$apply();
    });

    skillsRef.once('value', function(datasnap){
        $scope.skills = datasnap.val();
        $scope.$apply();
    });

    projectRef.once('value', function(datasnap){
        $scope.projects = datasnap.val();
        $scope.$apply();
    });

}]);