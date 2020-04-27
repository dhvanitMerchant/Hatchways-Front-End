var myApp = angular.module('myApp', [
  'ngRoute',
  'myControllers',
  'firebase'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/partials/searchUsers.html',
      controller: 'SearchController'
    })
    .when('/details/:itemId', {
      templateUrl: 'js/partials/userDetails.html',
      controller: 'DetailsController'
    });
}]);
