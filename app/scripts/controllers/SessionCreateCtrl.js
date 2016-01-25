"use strict"
angular.module('Blog').controller('SessionCreateCtrl',function($scope,$rootScope,AuthService,$modalInstance) {


$scope.createSession = function() {
	

	AuthService.login($scope.user).then(function(result) {
    $scope.message="";
    $modalInstance.close($scope.message);



}, function(err) {
alert(err);
$scope.message="用户名或密码错误，再试一次";

})


}
})
