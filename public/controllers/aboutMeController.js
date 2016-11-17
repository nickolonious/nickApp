nickApp.controller('aboutMeController', function($scope){ 
    
    $scope.title='About Me';

    $scope.education = [
        {
            id: 0,
            title: "Education",
            degree:"Computer Information Systems",
            school: "Arizona State University",
            type: "Bachelors of Science",
            year: 2014
        }
    ];

    $scope.skills = [
        {
            id: 0,
            skill: "HTML",
            experience: "5 years",
        },
        {
            id: 1,
            skill: "Javascript",
            experience: "3 years"
        },
        {
            id: 2,
            skill: "C#",
            experience: "3 years"
        },
        {
            id: 3,
            skill: "SQL",
            experience: "3 years"
        },
        {
            id: 4,
            skill: "Angular",
            experience: "2 years"
        },
        {
            id: 5,
            skill: "Firebase",
            experience: "1 year",
        },
        {
            id: 6,
            skill: "Test Driven Development",
            experience: "1 year"
        }
    ];
    

})