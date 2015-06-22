module.exports = function(config) {
    config.set({
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'imco.js',
            'test/unit/**/*.js'
        ],
        basePath: '../',
        frameworks: ['jasmine'],
        reporters: ['progress'],
        browsers: ['Chrome'],
        autoWatch: false,
        singleRun: true,
        colors: true
    });
};
