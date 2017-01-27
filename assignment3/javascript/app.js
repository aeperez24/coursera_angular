(function () {
	// body...
'use strict'
angular.module('MenuListFilter',[])
.controller('MyItemsListController',MyItemsListController)
.service("GetItemsMenuService",GetItemsMenuService)
.service("HttpCallPromise",HttpCallPromise);

MyItemsListController.$inject=['$scope','HttpCallPromise'];
GetItemsMenuService.$inject["HttpCallPromise",HttpCallPromise];

//prototype funtion for item
function Item(name,desc)
{
  this.name=name;
  this.desc=desc
}


// main controller
function MyItemsListController($scope,GetItemsMenuService)
{	var contrl=this;
	contrl.getFilteredItems= function()
	{
		return GetItemsMenuService.getItems();
	}
	contrl.search=funtion(desc)
	{
		GetItemsMenuService.refresh(desc);
	}
	





}

//service to get the  menu items 
function GetItemsMenuService(HttpCallPromise)
{
	var found=[];
	var service=this;
	service.refresh=function(desc)
	{
		var promise=HttpCallPromise.ajaxCall(desc);
		promise.then(function(result)
			{
				//console.log("exito");
				found.push(result);
				//console.log(found);


			});
	}
	service.getItems=function()
	{
		console.log("llamandooo al get");
		return found;
	}



}
//function to make the http rest service call
function HttpCallPromise($q)
{	 var deferred = $q.defer();
	 var service = this;
	 var result=[];
	 service.ajaxCall=function(descKey)
	 {

	 		 result.add(new Item("item1","cuantity1"));
	 		 deferred.resolve(result);

	 }
	//TODO change for  actually  http request	 
	 return  deferred.promise;



}

})();