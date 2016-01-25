"use strict";
angular.module('Blog').controller('CarouselCtrl', function ($scope,$http) {
  $scope.myInterval = 2000;
  
  $http.get('template/zendaodesign/item.json').success(function(data){
               $scope.items=data;
            }).error(function(data){
                console.info(data);
               
            })

  
});
//此处弹出框类型定义控制器
angular.module('Blog').controller('ModalCtrl', function ($scope, $modal) {
//$scope.theUserLogin=false;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'template/zendaodesign/loginModel.html',
      controller: 'SessionCreateCtrl',
      size: size,
      resolve: {
        //items: function () {
         // return $scope.items;
        //}
      }
    });

}

$scope.openCreate = function (size) {

    var modalInstance = $modal.open({
      templateUrl: "views/user/create.html",
      controller: 'UserCreateCtrl',
      size: size,
      resolve: {
        //items: function () {
         // return $scope.items;
        //}
      }
    });

}


});
//弹出框实例控制器

angular.module('Blog').controller('WorksCtrl',function($scope,$routeParams,$http) {

 
 $http.get('template/zendaodesign/'+$routeParams.id+'.json').success(function(data){
               $scope.work=data;
            }).error(function(data){
                console.info(data);
               
            })

}
)

//图片框控制器
angular.module('Blog').controller('BigmodelCtrl',function($scope,$modalInstance,Post) {

$scope.createWindow = function() {
      $modalInstance.close($scope.message);
      console.info($scope.posts);

}
$scope.deleteItem=function(){
  Post.delete($scope.post.id);
  $scope.posts.splice($scope.post.listid);
   console.info($scope.post.listid);
      $modalInstance.close();
}
}
)