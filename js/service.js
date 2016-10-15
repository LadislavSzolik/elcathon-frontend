var serverAddress = 'http://www.mocky.io/v2/5801bd03120000b41a32abe6';
var task = '/task'

var BackendService = angular.module('BackendService', [])

BackendService.factory('Backend', ['$http', function ($http) {

    this.getAllTitles = function () {
        return $http.get(serverAddress+"/task");
    };

    this.getTasksPerTitle = function(id){
        return $http.get(serverAddress+"/task/"+id);
    };

    this.userAuthentification = function(user, password){
        return $http.get(serverAddress+"/user/" + user + "/" + password)
    }

    this.checkTask = function(user, task, timestap){
      // TODO:
    }

    this.createTask = function(){

    }

    return this;

}]);
