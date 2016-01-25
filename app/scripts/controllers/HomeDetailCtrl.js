"use strict";
angular.module('Blog').controller('HomeDetailCtrl', function($scope, Post) {
	$scope.picsize = 150;
	var index = 0;
	//$scope.posts = Post.get().$object; 

	$scope.posts = [];

	var ps = [];
	Post.get().then(function(response) {
		for (var x in response) {

			ps.push(getPost(response[x]));

		}

	});

	function getPost(re) {
		//等后端建立后启用
		// response.id = num;
		// response.size = Math.random()*2%1+1;
		re.size = "1";
		re.base = "150";
		re.description = re.body;
		re.img = "static/" + re.img;
		return re;

		//$scope.posts.push(response);

	}



	$scope.getNextPost = function() {

		if (ps && index < ps.length) {
			
			$scope.posts.push(ps[index]);
			index++;
		}

	};



});