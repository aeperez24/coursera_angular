(function()
{

	'use strict';
	angular.module('MenuApp')
	.component('categoriesComponent',
	{	
/*		controller:CategoryController,
*/		
		

		templateUrl:'javascript/templates/categories.template.html',
		bindings:{
			categories:'<'
		}
		
	});


	function CategoryController()
	{

	}
})();