var serverAddress = 'http://www.mocky.io/v2/5801bd03120000b41a32abe6';
var task = '/task'

var BackendService = angular.module('BackendService', [])

BackendService.factory('SharedBackend', function() {

    this.currID = 0;

    this.listOfHowTo = [{
            title: "Get a driving license in Switzerland",
            ID: 1,
            inprogress: true,
            listOfTasks: [{
                title: "1. Gather documents",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
                isDone: true,
                isCurrent: false
            }, {
                title: "2. Take eye test",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
                isDone: true,
                isCurrent: false
            }, {
                title: "3. Take theoretical test",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
                isDone: true
            }, {
                title: "4. Take practical test",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
                isDone: true
            }, {
                title: "5. Receive the Driving License",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
                isDone: false,
                isCurrent: true
            }]
        }, {
            title: "Buy a new Car",
            ID: 2,
            inprogress: false,
            isRecommended: false,
            listOfTasks: [{
                title: "1. Choose vehicle",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
                isDone: false,
                isCurrent: true
            }, {
                title: "2. Get a license plate",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
                isDone: false,
                isCurrent: false
            }, {
                title: "3. Get and insurance",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
                isDone: false
            }, {
                title: "4. Spend all your dear money",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem I",
                isDone: false
            }]
        }, {
            title: "Apply for car sharing at Mobility",
            ID: 4,
            inprogress: false,
            isRecommended: false
        }, {
            title: "Marry a spouse from outside Switzerland",
            ID: 5,
            inprogress: false,
            isRecommended: true
        }, {
            title: "Choose a good insurance",
            ID: 6,
            inprogress: false,
            isRecommended: true
        }

    ];
    return this;
})

BackendService.factory('Backend', ['$http', function($http) {

    this.getAllTitles = function() {
        return $http.get(serverAddress + "/task");
    };

    this.getTasksPerTitle = function(id) {
        return $http.get(serverAddress + "/task/" + id);
    };

    this.userAuthentification = function(user, password) {
        return $http.get(serverAddress + "/user/" + user + "/" + password)
    }

    this.checkTask = function(user, task, timestap) {
        // TODO:
    }

    this.createTask = function() {

    }

    return this;

}]);
