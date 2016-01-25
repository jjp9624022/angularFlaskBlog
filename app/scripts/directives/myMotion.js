"use strict"
//登陆指令
Blog.directive('login', function () {
    return {
        require: 'ngModel',
        restrict: 'AE',
        templateUrl:function (){if (true){return('template/zendaodesign/userModel.html')}},
        replace:'true',
        
    };
})
//主面板指令
Blog.directive('mainitem', function () {
    return {
        restrict: 'AE',
        templateUrl:'template/zendaodesign/item.html'
    };
})
//标签选择器
Blog.directive('tagselector', function () {
    return {
        restrict: 'AE',
        templateUrl:'template/zendaodesign/tag.html'
    };
})

Blog.directive('mymotion', ['$animate', function($animate) {
  return function(scope, element, attrs) {
    element.on('mouseenter', function() {
      if(element.hasClass('path')) {
        $animate.removeClass(element, 'path');
      } else {
        $animate.addClass(element, 'path');
      }
    });
  };
}])

Blog.directive('itemclick', function($modal) {
  return {
        scope:{post:'=',theUser:'=',posts:'='},
        restrict: 'AE',
        link:function(scope, element, attrs) {
          console.info(scope);
    // element.on('click', function() {
    //   if(element.hasClass('path')) {
    //     $animate.removeClass(element, 'path');
    //   } else {
    //     $animate.addClass(element, 'path');
    //   }
    // });
element.on('click', function() {
       

    var modalInstance = $modal.open({
      templateUrl: 'template/zendaodesign/bigmodel.html',
      controller: 'BigmodelCtrl',
      size: 'lg',
      scope:scope,
      resolve: {
        

      }
    });

})
  }
}})