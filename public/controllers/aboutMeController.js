nickApp.controller('aboutMeController', function($scope){ 
    
    $scope.title='About Me';

    $scope.education = [
        {
            id: 0,
            title: "Education",
            degree:"Computer Information Systems",
            school: "Arizona State University",
            type: "Bachelors of Science",
            year: 2014,
            image:"http://www.fortefoundation.org/images/content/pagebuilder/asu.png",
            alt:"W.P Carey School of Business Logo",
            title:"W.P. Care School of Busines Logo"
        }
    ];

    $scope.skills = [
        {
            id: 0,
            skill: "HTML",
            experience: "5 years",
            image:"http://www.css-jquery-design.com/wp-content/uploads/2012/05/html5-logo.png",
            alt:"HTML5",
            title:"HTML5"
        },
        {
            id: 1,
            skill: "Javascript",
            experience: "3 years",
            image:"https://www.bram.us/wordpress/wp-content/uploads/2016/06/javascript-logo-banner.jpg",
            alt:"Javascript",
            title:"Javascript"
        },
        {
            id: 2,
            skill: "C#",
            experience: "3 years",
            image:"http://blog.orhanturk.com.tr/wp-content/uploads/2015/09/c.png",
            alt:"C Sharp Logo",
            title:"C# Logo"
        },
        {
            id: 3,
            skill: "SQL",
            experience: "3 years",
            image: "http://www.jammer.biz/wp-content/uploads/2010/07/tlp-sql-server-logo.png",
            alt:"SQL Logo",
            title:"SQL Logo"
        },
        {
            id: 4,
            skill: "Angular",
            experience: "2 years",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/AngularJS_logo.svg",
            alt: "Angular Logo",
            title:"Angular Logo",
        },
        {
            id: 5,
            skill: "Firebase",
            experience: "1 year",
            image: "https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png",
        }
        
    ];


})