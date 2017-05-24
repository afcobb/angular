angular // this config file tells angular what pages/controllers to load
		// this template code loads page fragments 
	.module("SpaApp")
	.config(SpaCfg);

SpaCfg.$inject = ["$routeProvider"];

function SpaCfg($routeProvider) {
	$routeProvider
												// in the url at the top of the browser the when functions below will auto-load
		.when('/', {
			templateUrl: 'views/home.view.html' //views is the folder where itll look for the html doc home.view.html to load
		})
		.when ('/about', {
			templateUrl: 'views/about.view.html'
		})
		.when ('/help', {
			templateUrl: 'views/help.view.html'
		})
		.otherwise({ //this says if anythign else is on the url line other than home.view or about.view it goes to the homepage
			redirectTo: '/'
		});
};