var angular = require('angular');
var angular_route = require('angular-route');
var tdServices = require('./services');
var tdControllers = require('./controllers')

// App

var tdApp = angular.module('tdApp',
  ['ngRoute', 'tdControllers', 'tdServices']);

tdApp.config(
  ['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './src/partials/home.html'
      })
      .when('/users', {
        templateUrl: './src/partials/list-users.html',
        controller: 'UserListCtrl'
      })
      .when('/products', {
        templateUrl: './src/partials/list-cars.html',
        controller: 'CarListCtrl'
      })
      .when('/user/add', {
        templateUrl: './src/partials/user-form.html'
      })
      .when('/user/:id/edit', {
        templateUrl: './src/partials/user-form.html',
        controller: 'UserFormCtrl'
      })
      .when('/user/:id/delete', {
        controller: 'DeleteUserCtrl'
      })
      .when('/car/add', {
        templateUrl: './src/partials/car-form.html'
      })
      .when('/car/:id/edit', {
        templateUrl: './src/partials/car-form.html',
        controller: 'CarFormCtrl'
      })
      .when('/car/:id/delete', {
        controller: 'DeleteCarCtrl'
      })
      .when('/login', {
        templateUrl: './src/partials/login.html'
      })
  }]
)