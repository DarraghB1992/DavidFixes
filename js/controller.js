/* add the routing controller first
then add the home, about and contact controllers passing
in the title via $scope.title*/

// Session 2, Added the var mybandApp so we could link the controllers with the service

var mybandApp = angular.module('mybandControllers',[])
.controller('HomeController', function($scope) {

    $scope.title ="Home"
})
.controller('AboutController', function($scope) {

    $scope.title ="About"
})
.controller('MusicController', function($scope) {

    $scope.title ="Music"
})
  
.controller('ThebandController', function($scope) {

    $scope.title ="The Band"
})
.controller('ContactController', function($scope) {

    $scope.title ="Contact"
})

.controller('GigsController' ,function($scope, forecast) {
    $scope.title = "Gigs"
    forecast.success(function(data) {
        $scope.fiveDay = data;
    });
})


.controller('FooterController',function($scope) {
//
$scope.title = 'About Us';

$scope.maps = [{
    address: 'Trinity College Dublin, Dublin',
    zoom: 14,
    width: 400     
},{
    address: '51st Street, New York, New York',
    zoom: 14,
    width: 400      
}];
$scope.map = $scope.maps[0];
});



