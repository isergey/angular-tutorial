var tasksApp = angular.module('tasksApp', [
  'ngRoute',
  'taskControllers',
  'taskFilters',
  'taskServices'
]);

tasksApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/tasks', {
        templateUrl: 'partials/task-list.html',
        controller: 'TaskListCtrl'
      }).
      when('/tasks/:taskId', {
        templateUrl: 'partials/task-detail.html',
        controller: 'TaskDetailCtrl'
      }).
      otherwise({
        redirectTo: '/tasks'
      });
  }]);