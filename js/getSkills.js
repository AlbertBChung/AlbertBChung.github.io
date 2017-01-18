app.factory('skills', ['$http', function($http) { 
  return $http.get('skills.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
