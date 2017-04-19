(function()
{

	'use strict';
	angular.module('public')
	.component('infoComponent',
	{	
/*		controller:CategoryController,
*/		
		

		templateUrl:'src/public/info/info.html',
		controller:InfoController,
		bindings:{
		}
		
	});
InfoController.$inject = ['UserInfoService','MenuService'];
function InfoController(UserInfoService,MenuService) {
  var $ctrl = this;
  $ctrl.valid=true;
  $ctrl.procesing=false;
  $ctrl.item=null;
//  $ctrl.menuCategories = menuCategories;
  $ctrl.saveUser=function(user)
  {	 
  	user.favorite=$ctrl.item;
  	UserInfoService.saveUser(user);
  };
  $ctrl.getUser=function()
  {
	return UserInfoService.getUser();
  }
  $ctrl.validate=function(sname)
  {
  	console.log("la validacion");
  	console.log("---"+sname+"---");
  	if(!emptyString(sname))
  	{
  		$ctrl.getItem(sname);
  	}
  	else
  	{
  		$ctrl.procesing=false;
  		$ctrl.valid=true;
  		$ctrl.item=null;
  	}
  }


   $ctrl.getItem=function(shortName)
   {$ctrl.procesing=true;

   var promise = MenuService.getItem(shortName);
   		promise.success(function(variable)
   		{	$ctrl.valid=true;
   			$ctrl.procesing=false;
   			$ctrl.item=variable;
   			console.log(variable);
   		}).catch(function (error) {
   			$ctrl.valid=false;
   			$ctrl.procesing=false;
      console.log(error);
    });
   }
	}

	function emptyString(string)
	{
		return (null==string||0===string.length);
	}


})();