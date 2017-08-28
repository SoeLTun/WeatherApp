// setup the main module for Weather app
var main = angular.module('main', ['ngRoute', 'ngResource']);

// create controllers for the app
main.controller('mainMenuController', ['$scope', mainMenuController]);
main.controller('forecastController', ['$scope', forecastController]);

// create routes for the app
main.config(function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'pages/mainmenu.html',
            controller: 'mainMenuController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
});

// mainmenu Controller
function mainMenuController($scope) {

}

// forecast Controller
function forecastController($scope) {

}