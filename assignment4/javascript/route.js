(function()	{

'use strict';

angular.module('MenuApp').config(RoutesConfig);
	
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
	function RoutesConfig($stateProvider,$urlRouterProvider)
	{


		  $urlRouterProvider.otherwise('/');
		$stateProvider.state('home',
			{
				url:'/',
				templateUrl:'javascript/templates/home.template.html',

				
			})
		.state('tab1',
			{
				url:'/categories',
				templateUrl:'javascript/templates/main-categories.template.html',
				controller:'MainController as controller',

				resolve: {
			      items: ['MenuDataService', function (MenuDataService) {

			       return MenuDataService.downloadCategories();
			      }]
			    }
			}).state('tab2',
			{
				url:'/items/{id}',
				templateUrl:'javascript/templates/main-item.template.html',
				controller:'ItemController as controller',

				resolve: {
			      items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {

			       return MenuDataService.getItemsForCategory($stateParams.id);
			      }]
			    }
			})



	}
	
})()


