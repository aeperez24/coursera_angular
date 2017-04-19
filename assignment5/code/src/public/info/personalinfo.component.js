(function()
{

	'use strict';
	angular.module('public')
	.component('personalinfoComponent',
	{	
/*		controller:CategoryController,
*/		
		

		templateUrl:'src/public/info/personalinfo.html',
		controller:InfoController,
		bindings:{
		}
		
	});
InfoController.$inject = ['UserInfoService'];
function InfoController(UserInfoService) {
  var $ctrl = this;
//  $ctrl.menuCategories = menuCategories;
	this.user=null;

  $ctrl.getUser=function()
  {
  	return UserInfoService.getUser();
  }

   this.$onInit = function() {
      this.user=UserInfoService.getUser();
      console.log("user loaded is:");
      console.log(this.user);
      };
	

	}




})();