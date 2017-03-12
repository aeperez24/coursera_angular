

(function () {
'use strict';
angular.module('MenuApp').controller('MainController',MainController);


MainController.$inject=['items']
function MainController(items)
{
var mController=this;
mController.categories=items.data;
}

})();


