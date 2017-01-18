app.factory('hobbies', ['$http', function($http) { 
  return $http.get('hobbies.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);