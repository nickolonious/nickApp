module.exports = function() {
    var client = './';
    var clientApp = client + 'public/';
    
    
    var config = {
    
    //all the js that i want to vet
     alljs: [ 
        './public/controllers/*.js',
        './public/directives/*.js',
        './public/factories/*.js',
        './public/services/*.js'
    ],
    client: client,
    index: 'index.html',
    js: [

    ]

};

config.getWiredepDefaultOptions = function() {
    var options = {
        
    };
};

    return config;
};


