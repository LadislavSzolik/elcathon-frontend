var ctnApp = angular.module('ctnApp', ['ngRoute', 'ngMdIcons']);

ctnApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
            templateUrl: 'login.html'
        })
        .when('/search', {
            templateUrl: 'search.html'
        })
        .when('/overview', {
            templateUrl: 'overview.html'
        }).when('/step', {
            templateUrl: 'step.html'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);

ctnApp.controller('loginCtrl', ['$scope', function($scope) {

}]);

ctnApp.controller('stepCtrl', ['$scope', function($scope) {



    $scope.listOfTasks = [{
        title: "1. Choose the bank",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
        isDone: true,
        isCurrent: false
    }, {
        title: "2. Go to the bank",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
        isDone: false,
        isCurrent: true
    }, {
        title: "3. Choosse your plan",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
        isDone: false
    }];
    $scope.showPrevious = function() {
        for (var i = 0; i < $scope.listOfTasks.length; i++) {
            if ($scope.listOfTasks[i].isCurrent == true) {
                if ($scope.listOfTasks[i - 1] != null) {
                    $scope.listOfTasks[i].isCurrent = false;
                    $scope.listOfTasks[i - 1].isCurrent = true;
                    break
                }
            }
        }
    }

    $scope.showNext = function() {
        for (var i = 0; i < $scope.listOfTasks.length; i++) {
            if ($scope.listOfTasks[i].isCurrent == true) {
                if ($scope.listOfTasks[i + 1] != null) {
                    $scope.listOfTasks[i].isCurrent = false;
                    $scope.listOfTasks[i + 1].isCurrent = true;
                    break
                }
            }
        }
    }

    $scope.setDone = function () {
      for (var i = 0; i < $scope.listOfTasks.length; i++) {
          if ($scope.listOfTasks[i].isCurrent == true) {
            $scope.listOfTasks[i].isDone = true;
              if ($scope.listOfTasks[i + 1] != null) {
                  $scope.listOfTasks[i].isCurrent = false;
                  $scope.listOfTasks[i + 1].isCurrent = true;
              }
              break
          }
      }
    }



}]);

ctnApp.controller('searchCtrl', ['$scope', function($scope) {
    $scope.howtos = ['Take out the Trash', 'Play a good game', 'Buy a new house'];
}]);

ctnApp.controller('overviewCtrl', ['$scope', function($scope) {

  $scope.editEnabled = false;

  $scope.enableEdit = function() {
    if($scope.editEnabled) {
      $scope.editEnabled = false;
    } else {
      $scope.editEnabled = true;
    }
  }

$scope.restartSteps = function() {
  for(var i=0; i<$scope.listOfTasks.length; i++) {
    $scope.listOfTasks[i].isDone = false;
  }
}

    $scope.listOfTasks = [{
        title: "1. Choose the bank",
        desc: "",
        isDone: true
    }, {
        title: "2. Go to the bank",
        desc: "",
        isDone: true
    }, {
        title: "3. Choosse your plan",
        desc: "",
        isDone: false
    }];
}]);
