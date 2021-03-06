//Added 'formDirectives to line 2 , without this our diretives were being ignored and the
//information needed to render the map was never sent!

angular.module('mybandApp', ['ngRoute','mybandControllers', 'formDirectives'])
// configure our routes
.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'HomeController'
		})
		// route for the about page
		.when('/about', {
			templateUrl : 'templates/about.html',
			controller  : 'AboutController'
		})
		// route for the music page
		.when('/music', {
			templateUrl : 'templates/music.html',
			controller  : 'MusicController'
		})
		// route for the gigs page
		.when('/gigs', {
			templateUrl : 'templates/gigs.html',
			controller  : 'GigsController'
		})
		// route for the theband page
		.when('/theband', {
			templateUrl : 'templates/theband.html',
			controller  : 'ThebandController'
		})
		// route for the contact page
		.when('/contact', {
			templateUrl : 'templates/contact.html',
			controller  : 'ContactController'
		})
		// route for the Find page
		.when('/footer', {
			templateUrl : 'templates/footer.html',
			controller  : 'FooterController'
		})

		
		.otherwise({redirectTo: '/'}); //if not above path
	});