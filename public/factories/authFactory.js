nickApp.factory("AuthFactory", function($firebaseAuth) {
	    var ref = new Firebase("https://nickapp-359c9.firebaseio.com/");
		return $firebaseAuth(ref);
});
	