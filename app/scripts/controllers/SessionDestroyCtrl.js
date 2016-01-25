"use strict"
angular.module('Blog').controller('SessionDestroyCtrl',function ($scope, AuthService) {
  AuthService.logout();
 }
 )