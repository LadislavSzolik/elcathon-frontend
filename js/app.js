var ctnApp = angular.module('ctnApp', ['ngRoute', 'ngMdIcons', 'BackendService']);

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
        }).when('/myprogress', {
            templateUrl: 'myprogress.html'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);

ctnApp.controller('loginCtrl', ['$scope', '$window', 'SharedBackend', function($scope, $window,SharedBackend) {
  $scope.goSearch = function(){
    $window.location.href = '#/search';
  };
}]);

ctnApp.controller('stepCtrl', ['$scope','SharedBackend', function($scope, SharedBackend) {

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
              }else {
                SharedBackend.listOfHowTo[0].inprogress = false;
                SharedBackend.listOfHowTo[1].isRecommended = true;
                SharedBackend.listOfHowTo[2].isRecommended = true;
                SharedBackend.listOfHowTo[3].isRecommended = false;
                SharedBackend.listOfHowTo[4].isRecommended = false;
              }
              break
          }
      }



    }

    for(var i=0; i<SharedBackend.listOfHowTo.length; i++) {
      if(SharedBackend.currID == SharedBackend.listOfHowTo[i].ID) {
        $scope.listOfTasks = SharedBackend.listOfHowTo[i].listOfTasks;
        $scope.title = SharedBackend.listOfHowTo[i].title;
      }
    }

}]);

ctnApp.controller('searchCtrl', ['$scope', '$window', 'SharedBackend', function($scope, $window, SharedBackend) {
    $scope.recommended = [];
    $scope.otherHowTo = [];
    for(var i=0; i<SharedBackend.listOfHowTo.length; i++) {
      if(SharedBackend.listOfHowTo[i].isRecommended) {
        $scope.recommended.push(SharedBackend.listOfHowTo[i]);
      } else {
        $scope.otherHowTo.push(SharedBackend.listOfHowTo[i]);
      }
    }


    $scope.goOverview = function(selectedId){

      for(var i=0; i< SharedBackend.listOfHowTo.length; i++) {
        if(selectedId == SharedBackend.listOfHowTo[i].ID) {
          SharedBackend.currID = 1;
        }
      }
      $window.location.href = '#/overview';


    };


}]);

ctnApp.controller('myProgressCtrl', ['$scope', function($scope) {
  $scope.taskInProgress = ['Get a driving license in Switzerland'];

  $scope.goOverview = function(selectedId){

    for(var i=0; i< SharedBackend.listOfHowTo.length; i++) {
      if(selectedId == SharedBackend.listOfHowTo[i].ID) {
        SharedBackend.currID = 1;
      }
    }
    $window.location.href = '#/overview';
  };
}]);



ctnApp.controller('overviewCtrl', ['$scope', '$window', 'SharedBackend', function($scope, $window, SharedBackend) {

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

for(var i=0; i<SharedBackend.listOfHowTo.length; i++) {
  if(SharedBackend.currID == SharedBackend.listOfHowTo[i].ID) {
    $scope.listOfTasks = SharedBackend.listOfHowTo[i].listOfTasks;
    $scope.title = SharedBackend.listOfHowTo[i].title;
  }
}

  $scope.start = function() {
    $window.location.href = "#/step";
  }
}]);
