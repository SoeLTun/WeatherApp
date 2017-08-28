// setup the main module for Weather app
var main = angular.module('main', ['ngRoute', 'ngResource']);

// create controllers for the app
main.controller('mainMenuController', ['$scope', 'cityService', mainMenuController]);
main.controller('forecastController', ['$scope', 'cityService', forecastController]);

// create routes for the app
main.config(['$routeProvider', Routes]);

// create city service for the app 

main.service('cityService', cityService)

// setup the routes for the app
function Routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/mainmenu.html',
            controller: 'mainMenuController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })

}

// city service 

function cityService() {
    this.city = "San Jose, CA";
}


// mainmenu Controller
function mainMenuController($scope, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
}

// forecast Controller
function forecastController($scope, cityService) {
    $scope.city = cityService.city;

}