"use strict"
angular.module('Blog').controller( 'UserCreateCtrl',function($scope, User, $modalInstance) {
$scope.regerCreate=function(){
	User.create($scope.reger).then(function(result) {
		//$scope.$emit('user:logged_in', isin);
// $location.path('./posts/create');
$modalInstance.close($scope.message);
}, function(err) {
alert(err);
   })
}

$scope.closePannle = function() {
      $modalInstance.close($scope.message);

}
}

)