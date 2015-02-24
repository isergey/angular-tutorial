(function () {
  'use strict';
  var taskServices = angular.module('taskServices', ['ngResource']);
  taskServices.factory('Task', ['$resource',
    function($resource){
      return $resource('data/tasks/:taskId.json', {}, {
        query: {method:'GET', params:{taskId:'tasks'}, isArray:true}
      });
    }]);
})();