(function () {
	'use strict';

	angular
		.module('reverseVisionContact')
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/main/main.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'app/contact/contact.html',
				controller: 'ContactController',
				controllerAs: 'vm',
				css: 'app/contact/contact.css'
			});

		$urlRouterProvider.otherwise('/');
	}

})();
