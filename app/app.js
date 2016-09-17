'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource', 
  'ui.router', 
  'ui.bootstrap', 
  'highcharts-ng',
  'myApp.version'
]).config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");


});