"use strict"
angular.module('Blog').controller('ApplicationCtrl', function ($scope,AuthService) {
	
AuthService.isAuthenticated();
}
);