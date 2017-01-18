app.controller('MainController', ['$scope', 'skills', 'clubs', 'work', '$timeout', function($scope, skills, clubs, work, $timeout) {
	//param: name of service that exists, new name for variable

  skills.success(function(data) {
    $scope.skillList = data;
  });
  clubs.success(function(data) {
    $scope.clubList = data;
  });
  work.success(function(data) {
    $scope.workList = data;
  });


}]);

