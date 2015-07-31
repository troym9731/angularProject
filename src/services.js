var angular = require('angular');
var angular_resource = require('angular-resource');

var tdServices = angular.module('tdServices', ['ngResource']);

tdServices.factory('User', ['$resource', 
  function($resource) {
    return $resource('http://localhost:3000/users/:id', {}, {
      query: {
        method:'GET',
        params: {
          id: '',
        },
        isArray: true
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    })
  }
])

tdServices.factory('Car', ['$resource', 
  function($resource) {
    return $resource('http://localhost:3000/products/:id', {}, {
      query: {
        method: 'GET',
        params: {
          id: '',
        },
        isArray: true
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    })
  }
])

module.exports = tdServices;