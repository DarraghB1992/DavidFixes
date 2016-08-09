// mybandApp.factory to link the service to the controllers and also gather the data from the json file 
mybandApp.factory('forecast', ['$http', function($http) { 
  return $http.get('weather.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);