(function () {
  'use strict';
  var taskControllers = angular.module('taskControllers', []);

  taskControllers.controller('TaskListCtrl', ['$scope', 'Task',
    function ($scope, Task) {
      $scope.name = 'Список важных задач';
      $scope.tasks = Task.query();
      $scope.orderProp = 'id';
    }]);

  taskControllers.controller('TaskDetailCtrl', ['$scope', '$http', '$routeParams', 'Task',
    function ($scope, $http, $routeParams, Task) {
      var taskId = $routeParams.taskId;
      Task.get({
        taskId: taskId
      }, function (task) {
        $scope.task = task;
      });

      $scope.alert = function (text) {
        alert(text);
      };
    }]);

})();

