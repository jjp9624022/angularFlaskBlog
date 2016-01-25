"use strict";
angular.module('Blog').controller("PostCreateCtrl",function($scope,$http, Post, FileUploader) {
	
 $http.get('template/zendaodesign/item.json').success(function(data){
               $scope.mytags=data;
               console.info(data);
            }).error(function(data){
                console.info(data);
               
            });


$scope.uploader = new FileUploader({
            url: globeUrl+'/upload',
            removeAfterUpload:true
            //formData :['title','imageFilter']
        });


        $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
            var data={img:"",title:"",body:"",tag:""};
            data.img=response.filename;
            console.info(fileItem.formData);
            data.title=fileItem.formData[0];
            data.body=fileItem.formData[1];
            data.tag=fileItem.formData[2].title;
            console.info( response.filename );
            console.info(data);
            Post.create(data);
        }
        //过滤文件类型
//uploader.filters.push({
$scope.uploader.filters.push({

            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }


        
    });

$scope.createPost=function(){
 	

 	}

 }
);
