(function () {
  angular.module('taskFilters', []).filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
})();