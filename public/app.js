	var nickApp = angular.module('nickApp', ['ngRoute','firebase', 'ngAnimate', 'ngSanitize', 'firebase','ui.bootstrap', 'ngMaterial']);
    
	// Route Config
	nickApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'templates/home.html',
				controller  : 'homeController'
			})
			.when('/aboutMe', {
				templateUrl : 'templates/aboutMe.html',
				controller  : 'aboutMeController'
			})	
			.when('/changelog', {
				templateUrl : 'templates/changelog.html',
				controller  : 'changeLogController'
			})		
            .when('/home', {
				templateUrl : 'templates/home.html',
				controller  : 'homeController'
			})	
			.when('/login', {
				templateUrl : 'templates/login.html',
				controller  : 'authController'
			})	
			.when('/contact', {
				templateUrl : 'templates/contact.html',
				controller  : 'contactController'
			})	
			.when('/signup', {
				templateUrl : 'templates/signup.html',
				controller  : 'authController'
			})		
			 .when('/wishlist', {
				templateUrl: 'templates/wishlist.html',
				controller: 'wishlistController'
			})
			.when('/404', {
				templateUrl: 'templates/404.html',
				controller: '404Controller'
			})
			.otherwise('/404');		
	});

	
