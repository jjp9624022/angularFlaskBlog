"use strict"
Blog.factory('File', function(Restangular) {
    var File;
    File = {
        get: function() {
            return Restangular
                .all('upload').getList();
            
       
        },
        create: function(data) {
            return Restangular
                .one('upload')
                .customPOST(data);
        }
    };

    return File;
})