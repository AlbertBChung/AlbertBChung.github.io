app.factory('clubs', ['$http', function($http) { 
  return $http.get('clubs.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
