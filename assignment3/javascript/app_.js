(function () {
	// body...
'use strict'
angular.module('MenuListFilter',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('GetItemsMenuService',GetItemsMenuService)
.service('HttpCallPromise',HttpCallPromise)
.controller('DirectiveController',DirectiveController)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('menuItems',MenuItems);
;

//prototype funtion for item
function Item(name,desc)
{
  this.name=name;
  this.desc=desc
}


// main controller
NarrowItDownController.$inject=['$scope','GetItemsMenuService'];
function NarrowItDownController($scope,GetItemsMenuService)
{	var contrl=this;
	var showMessage=false;
	contrl.getFilteredItems= function(){

		return GetItemsMenuService.getItems();
	}
	contrl.search=function(desc)
	{	
		GetItemsMenuService.refresh(desc);
		showMessage=GetItemsMenuService.getItems().length==0;
		
	}
	contrl.removeItem=function(number)
	{

		GetItemsMenuService.removeItem(number);
	}
	
	contrl.isShowMessage=function()
	{
		console.log(showMessage);
		return showMessage;
	}





}


//function GetItemsMenuService(HttpCallPromise)
GetItemsMenuService.$inject=['HttpCallPromise'];
function GetItemsMenuService(HttpCallPromise)
{
	var found=[];
	var service=this;
	service.refresh=function(desc)
	{
		var promise=HttpCallPromise.ajaxCall(desc);
		promise.then(function(result)
			{
				found=[];
				for(var i=0;i<result.data["menu_items"].length;++i)
				{
					var description=result.data["menu_items"][i]['description'];
					if(description.includes(desc))
					{
						found.push(result.data["menu_items"][i]);

					}
				}


		 	});
	}

	service.getItems=function()
	{
		return found;
	}
	service.removeItem=function(index)
	{
		found.splice(index,1);
	}


}

//promise for http request
HttpCallPromise.$inject=['$q','$http','ApiBasePath'];
function HttpCallPromise($q,$http,ApiBasePath)
{	 var deferred = $q.defer();
	 var service = this;
	 var result=[];
	 service.ajaxCall=function(descKey)
	 {	
	 		var response = $http({
		      method: "GET",
		      url: (ApiBasePath + "/menu_items.json"),
		      
		    });

	 		 deferred.resolve(response);
	 		 return  deferred.promise;


	 }
	//TODO change for  actually  http request	 
	


}



function MenuItems()
{
	var ddo=	{

		templateUrl:'itemsMenu.html',
		scope: {
			items:'<',
			showMessage:'<',
			onRemove:'&'
		},
		controller: DirectiveController,
		controllerAs:'list',
		bindToController:true
	}

	return ddo;
}

function DirectiveController()
{

}





})();