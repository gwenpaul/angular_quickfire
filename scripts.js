var firstApp = angular.module('firstApp', []);

firstApp.controller('FirstController', function($scope){
  //'name, month and message define what goes in the text box' and $scope.first
  //scope.last etc are what relate to the html 
  $scope.first = 'Name';
  $scope.last = 'Name';
  $scope.birth = 'Month';
  $scope.heading = ' Message: ';
  $scope.updateMessage = function() {
    $scope.message = 'Hello ' + $scope.first + '' + $scope.last + '!' +
    ' You were born in ' + $scope.birth;
  };
})



// <!doctype html>
// <html ng-app="firstApp">
// <head>
//   <title>
//     Angular Example
//   </title>
// </head>
// <body>
//   <!-- First controller corresponds to -->
//   <div ng-controller="FirstController">
//
//     <input type="text" ng-model="first">
//     <input type="text" ng-model="last">
//     <button ng-click='updateMessage()'>Message</button>
//     <hr>
//     {{heading + message}}
//   </div>
//   <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
//   <script src="scripts.js"></script>
// </body>
// </html>
