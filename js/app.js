var ctnApp = angular.module('ctnApp',['ngRoute']);

ctnApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/login', {
    templateUrl: 'login.html'
  })
  .when('/search',{
    templateUrl: 'search.html'
  })
  .when('/overview', {
    templateUrl: 'overview.html'
  })
  .otherwise({
    redirectTo: '/login'
  });
}]);

ctnApp.controller('dayScheduleCtrl', ['$scope', function($scope){


  $scope.tasks = ['Take out the Trash', 'Play a good game', 'Buy a new house'];

}]);
