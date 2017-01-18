app.factory('bio', ['$http', function($http) { 
  return $http.get('bio.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);