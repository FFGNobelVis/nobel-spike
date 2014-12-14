'use strict';

/**
 * @ngdoc overview
 * @name nobelLaureateSpike
 * @description
 * # nobelLaureateSpike
 *
 * Main module of the application.
 */
angular
  .module('nobelLaureateSpike', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'datatables'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
