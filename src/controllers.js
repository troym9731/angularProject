var angular = require('angular');
var tdServices = require('./services');
var tdApp = require('./app');

var tdControllers = angular.module('tdControllers', []);

tdControllers.controller('UserListCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.users = User.query();
  }
])

tdControllers.controller('CarListCtrl', ['$scope', 'Car',
  function($scope, Car) {
    $scope.cars = Car.query();
  }
])

tdControllers.controller('UserFormCtrl', ['$scope', '$routeParams', 'User', 
  function($scope, $routeParams, User) {
    User.get({ id: $routeParams.id }, function(user) {
      $scope.user = user;
    })
  }
])

tdControllers.controller('CarFormCtrl', ['$scope', '$routeParams', 'Car',
  function($scope, $routeParams, Car) {
    Car.get({ id: $routeParams.id }, function(car) {
      $scope.car = car;
    })
  }
])

tdControllers.controller('SubmitUserCtrl', ['$scope', '$routeParams', '$location', 'User',
  function($scope, $routeParams, $location, User) {
    $scope.update = function(user) {
      if (!!$routeParams.id) {
        User.update(user, function() {
          $location.path('/users');
        });
      } else {
        user.img = 'http://robohash.org/'+ Date.now().toString(16) + '.png';
        User.save(user, function() {
          $location.path('/users');
        });
      }
    }
  }
])

tdControllers.controller('SubmitCarCtrl', ['$scope', '$routeParams', '$location', 'Car',
  function($scope, $routeParams, $location, Car) {
    $scope.update = function(car) {
      if (!!$routeParams.id) {
        Car.update(car, function() {
          $location.path('/products');
        });
      } else {
        Car.save(car, function() {
          $location.path('/products');
        });
      }
    }
  }
])

tdControllers.controller('DeleteUserCtrl', ['$scope', '$routeParams', '$location', 'User',
  function($scope, $routeParams, $location, User) {
    $scope.delete = function(user) {
      User.delete(user, function() {
        $location.path('/users');
      })
    }
  }
])

tdControllers.controller('DeleteCarCtrl', ['$scope', '$routeParams', '$location', 'Car',
  function($scope, $routeParams, $location, Car) {
    $scope.delete = function(car) {
      Car.delete(car, function() {
        $location.path('/products');
      })
    }
  }
])

module.exports = tdControllers;
