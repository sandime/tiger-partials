/**
 * Created by SHERRI on 3/14/15.
 */
//ngRoute for navbar
var app = angular.module("myApp", ["ngRoute"])
app.config(function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: "./main.html",
     controller: "MainController"
  });

  $routeProvider.when('/about', {
    templateUrl: "./about.html",
     controller: "MainController"
  });

  $routeProvider.when("/budgetForm", {
    templateUrl: "./budgetForm.html",
    controller: "MainController"
  });

  $routeProvider.when("/contact", {
    templateUrl: "./contact.html",
    controller: "MainController"
  });

  $routeProvider.when("/tracking", {
    templateUrl: "./tracking.html",
    controller: "MainController"
  });
  $routeProvider.otherwise({
    redirectTo: "/"
  });
});

app.controller( 'MainController', function ( $scope ) {

});

//view2 controllers for the budget form, FormController
//connecting to firebase

app.controller("FormController", function($scope, $firebase) {
  var ref = new Firebase("https://tigerapp.firebaseio.com");
  var app = angular.module('myApp.budgetForm', [
    'ngRoute',
    "firebase"

]);
  var sync = $firebase(ref);
  // download the data into a local object
  var syncObject = sync.$asObject();
  syncObject.$bindTo($scope, "user");
});

/*
var app = angular.module("myApp", ['firebase']);

app.controller("FormController", function($scope, $firebase) {
  var ref = new Firebase("https://tigerapp.firebaseio.com");
  var sync = $firebase(ref);
  // download the data into a local object
  var syncObject = sync.$asObject();
  syncObject.$bindTo($scope, "user");
}); */