app.controller('MainController', ['$scope', 'skills', 'clubs', 'work', 'bio','hobbies', function($scope, skills, clubs, work, bio,hobbies) {
	//param: name of service that exists, new name for variable

  bio.success(function(data) {
    $scope.bio = data;
  });
  skills.success(function(data) {
    $scope.skillList = data;
  });
  clubs.success(function(data) {
    $scope.clubList = data;
  });
  work.success(function(data) {
    $scope.workList = data;
  });
  hobbies.success(function(data) {
    $scope.hobbyList = data;
  });



}]);

