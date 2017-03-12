(function () {
'use strict';
angular.module('MenuApp').controller('ItemController',ItemController);


ItemController.$inject=['items']
function ItemController(items)
{
	var mController=this;
	mController.items=items.data.menu_items;
		console.log(items.data);
}
})();

