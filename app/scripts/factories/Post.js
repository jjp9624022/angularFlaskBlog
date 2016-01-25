"use strict"
Blog.factory('Post', function(Restangular) {
    var Post;
    Post = {
        get: function() {
            return Restangular
                .all('posts').getList();
            
       
        },
        delete: function(index) {
            return Restangular
                .one('posts',index).remove();
            
       
        },
        create: function(data) {
            return Restangular
                .one('posts')
                .customPOST(data);
        },

        getOne: function(index){
            return Restangular
                  .one('posts',index).get(); 
        }
    };

    return Post;
})