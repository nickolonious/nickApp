//this service passes authData through the app when needed
nickApp.service('authPass', function () {

    var authentication = 'none';

    return {
        getAuth: function () {
            return authentication;
        },
        setAuth: function (authData) {
            authentication = authData;
        }
    };
});