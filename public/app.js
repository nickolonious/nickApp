	var nickApp = angular.module('nickApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'firebase', 'ui.bootstrap', 'ngMaterial', ])

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
			})	
			.when('/contact', {
				templateUrl : 'templates/contact.html',
				controller  : 'contactController'
			})	
			.when('/signup', {
				templateUrl : 'templates/signup.html',
			})		
			 .when('/wishlist', {
				templateUrl: 'templates/wishlist.html',
				controller: 'wishlistController'
			})
			.when('/signIn', {
				templateUrl: 'templates/signIn.html',
				controller: 'signInController'

			})
			.when('/records', {
				templateUrl: 'templates/records.html',
				controller: 'recordsController'
			})
			.when('/404', {
				templateUrl: 'templates/404.html',
				controller: '404Controller'
			})
			.otherwise('/404');		
	});

	(function() {
		  // Initialize Firebase
  		var config = {
    		apiKey: "AIzaSyDE2B3GTOGU_jJFoYKp0Ruc-RmOTheXO6g",
    		authDomain: "nickapp-359c9.firebaseapp.com",
    		databaseURL: "https://nickapp-359c9.firebaseio.com",
    		storageBucket: "nickapp-359c9.appspot.com",
    		messagingSenderId: "434217548999"
  		};
		  firebase.initializeApp(config);
	}());

