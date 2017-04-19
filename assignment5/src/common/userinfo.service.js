(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);


function UserInfoService() {
  var service = this;
  this.usuario=null;
  service.getUser = function () {
    return service.usuario;
  };


  service.saveUser = function (auxusuario) {
    service.usuario=auxusuario;
    console.log("saving");
    console.log(auxusuario);

  };

}



})();
