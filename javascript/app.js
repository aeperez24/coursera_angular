(function () {
	// body...
'use strict'
angular.module('BoughtListChecker',[])
.controller('NotBoughtListController',NotBoughtListController)
.controller('BoughtListController',BoughtListController)
.service('ItemsBoughtService',ItemsBoughtService);

NotBoughtListController.$inject=['$scope','ItemsBoughtService'];
BoughtListController.$inject=['$scope','ItemsBoughtService'];


//prototype funtion for item
function Item(name,quantity)
{
  this.name=name;
  this.quantity=quantity
}


function NotBoughtListController($scope,ItemsBoughtService)
{	var notBought=this;
	notBought.notBoughtList=[new Item("cookies","10 bags"),new Item("apple juice","1 Lt"), new Item("nuts","1 bags"),new Item("chocolate","4 boxes"),new Item("coke","1 bottle")];
	console.log("controller 1 init");
	notBought.toBoughtList=function(index)
	{
		var itemBought=notBought.notBoughtList[index];
		notBought.notBoughtList.splice(index,1);
		ItemsBoughtService.addItem(itemBought);
	}


}


function ItemsBoughtService()
{	

	var items=[];
	this.addItem=function(item)
	{
		items.push(item);

	console.log("adding  item:"+item.name+" in service");
	}
	this.getItems=function()
	{
		return items;
	}
	

}


function BoughtListController($scope,ItemsBoughtService)
{	
	console.log("controller 2 init");
	var bought=this;
	this.getBoughtList=function () {
		console.log("refreshing list 2");
		return ItemsBoughtService.getItems();
		
	}
}



})();
