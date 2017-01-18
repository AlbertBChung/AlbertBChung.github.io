app.factory('work', ['$http', function($http) { 
  return $http.get('work.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
