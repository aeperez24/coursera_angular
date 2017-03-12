//MenuDataService.$inject=['HttpCallPromise'];
(function(){
'use strict';
angular.module('Data')
.service('MenuDataService',MenuDataService)

.service('HttpCallPromiseCategories',HttpCallPromiseCategories)

.constant('ApiBasePathCategories', "https://davids-restaurant.herokuapp.com/categories.json")
/*.constant('ApiBasePathItems', "https://davids-restaurant.herokuapp.com")
*/.constant('ApiBasePathItems', "https://davids-restaurant.herokuapp.com/menu_items.json")

;
 MenuDataService.$inject=['HttpCallPromiseCategories','$q','$http','ApiBasePathCategories','ApiBasePathItems']
 function MenuDataService(HttpCallPromiseCategories,$q,$http,ApiBasePathCategories,ApiBasePathItems){

	//this.categories=[{"id":81,"short_name":"L","name":"Lunch","special_instructions":"Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.","url":"https://davids-restaurant.herokuapp.com/categories/81.json"},{"id":82,"short_name":"A","name":"Soup","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/82.json"},{"id":83,"short_name":"B","name":"Appetizers","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/83.json"},{"id":84,"short_name":"SP","name":"Chef's Recommendations","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/84.json"},{"id":85,"short_name":"C","name":"Chicken","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/85.json"},{"id":86,"short_name":"F","name":"Beef","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/86.json"},{"id":87,"short_name":"V","name":"Veal","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/87.json"},{"id":88,"short_name":"DK","name":"Duck","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/88.json"},{"id":89,"short_name":"VG","name":"Vegetables","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/89.json"},{"id":90,"short_name":"CU","name":"Curry","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/90.json"},{"id":91,"short_name":"NL","name":"Noodles (Lo Mein)","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/91.json"},{"id":92,"short_name":"NF","name":"Mei Fan (Very Fine Noodles)","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/92.json"},{"id":93,"short_name":"PF","name":"Pan Fried Noodles","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/93.json"},{"id":94,"short_name":"FR","name":"Fried Rice","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/94.json"},{"id":95,"short_name":"CM","name":"Chow Mein","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/95.json"},{"id":96,"short_name":"FY","name":"Egg Foo Young","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/96.json"},{"id":97,"short_name":"SO","name":"Side Orders","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/97.json"},{"id":98,"short_name":"DS","name":"Desserts","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/98.json"},{"id":99,"short_name":"D","name":"Dinner Combo","special_instructions":"Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll.","url":"https://davids-restaurant.herokuapp.com/categories/99.json"},{"id":100,"short_name":"SR","name":"Sushi Menu","special_instructions":"Contains raw ingredients. Consuming raw or undercooked meat, poultry, or seafood may increase your risk of food borne illness.","url":"https://davids-restaurant.herokuapp.com/categories/100.json"}];
	this.categories=[]
	var service=this;
/*	service.categories=[{"id":81,"short_name":"L","name":"Lunch","special_instructions":"Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.","url":"https://davids-restaurant.herokuapp.com/categories/81.json"},{"id":82,"short_name":"A","name":"Soup","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/82.json"},{"id":83,"short_name":"B","name":"Appetizers","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/83.json"},{"id":84,"short_name":"SP","name":"Chef's Recommendations","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/84.json"},{"id":85,"short_name":"C","name":"Chicken","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/85.json"},{"id":86,"short_name":"F","name":"Beef","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/86.json"},{"id":87,"short_name":"V","name":"Veal","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/87.json"},{"id":88,"short_name":"DK","name":"Duck","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/88.json"},{"id":89,"short_name":"VG","name":"Vegetables","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/89.json"},{"id":90,"short_name":"CU","name":"Curry","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/90.json"},{"id":91,"short_name":"NL","name":"Noodles (Lo Mein)","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/91.json"},{"id":92,"short_name":"NF","name":"Mei Fan (Very Fine Noodles)","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/92.json"},{"id":93,"short_name":"PF","name":"Pan Fried Noodles","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/93.json"},{"id":94,"short_name":"FR","name":"Fried Rice","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/94.json"},{"id":95,"short_name":"CM","name":"Chow Mein","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/95.json"},{"id":96,"short_name":"FY","name":"Egg Foo Young","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/96.json"},{"id":97,"short_name":"SO","name":"Side Orders","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/97.json"},{"id":98,"short_name":"DS","name":"Desserts","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/98.json"},{"id":99,"short_name":"D","name":"Dinner Combo","special_instructions":"Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll.","url":"https://davids-restaurant.herokuapp.com/categories/99.json"},{"id":100,"short_name":"SR","name":"Sushi Menu","special_instructions":"Contains raw ingredients. Consuming raw or undercooked meat, poultry, or seafood may increase your risk of food borne illness.","url":"https://davids-restaurant.herokuapp.com/categories/100.json"}];
*/
/*
	service.getAllCategories=function()
	{	
		service.refreshCategories();

		
	}*/


	

	service.downloadCategories=function()
	{	

/*		var promise=httpCallPromiseCategories.ajaxCall();
*/		
		
		 var deferred = $q.defer();
	
	 		var response = $http({
		      method: "GET",
		      url: (ApiBasePathCategories),
		      
		    });

	 		 deferred.resolve(response);
	 		 return  deferred.promise;


	 
	}


	service.getAllCategories=function()
	{	
		//service.downloadCategories();
		//console.log(service.categories);
	}
	service.getItemsForCategory=function(categoryShortName)
	{


/*		var promise=httpCallPromiseCategories.ajaxCall();
*/		
		

		 var deferred = $q.defer();
	

	 		var response = $http({
		      method: "GET",
		      url: (ApiBasePathItems),
		      params:
		      {
		      	'category':categoryShortName
		      }
		      
		    });

	 		 deferred.resolve(response);
	 		 return  deferred.promise;


	 


	}


	function httpRequest()
	{


	}

}
//promise for http request
HttpCallPromiseCategories.$inject=['$q','$http','ApiBasePathCategories'];
function HttpCallPromiseCategories($q,$http,ApiBasePathCategories){
	 var deferred = $q.defer();
	 var service = this;
	 var result=[];
	 service.ajaxCall=function()
	 {	
	 		var response = $http({
		      method: "GET",
		      url: (ApiBasePathCategories),
		      
		    });

	 		 deferred.resolve(response);
	 		 return  deferred.promise;


	 }
	//TODO change for  actually  http request	 
	
	

}




})();