	var nickApp = angular.module('nickApp', ['ngRoute','firebase', 'ngAnimate', 'ngSanitize', 'firebase','ui.bootstrap', 'ngMaterial']);
    
	// Route Config
	nickApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'templates/home.html',
				controller  : 'homeController'
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
			.when('/profile', {
				templateUrl : 'templates/profile.html',
				controller  : 'profileController'
			})		
			.when('/about', {
				templateUrl : 'templates/searchResults.html',
				controller  : 'searchController'
			})
			.when('/signup', {
				templateUrl : 'templates/signup.html',
				controller  : 'authController'
			})	
            .when('/work', {
				templateUrl : 'templates/work.html',
				controller  : 'workController'
			})	
			.when('/registerUser', {
				templateUrl : 'templates/registerUser.html',
				controller  : 'registerUserController'
			})				
			.when('/registerBiz', {
				templateUrl: 'templates/registerBusiness.html',
				controller: 'registerBusinessController'
			})
		    .when('/registerMed', {
				templateUrl: 'templates/registerMed.html',
				controller: 'registerMedicalController'
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

	
