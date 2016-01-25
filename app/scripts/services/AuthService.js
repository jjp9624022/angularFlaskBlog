"use strict";

Blog.service("AuthService", function($q, localStorageService, $rootScope,Session) {
 //估计以后链接微信时也会拓展这个服务，这个服务主要管理登陆者状态，与cookie合作管理权限服务
    this.login = function(credentials) {
        var me = this;
        var deferred = $q.defer()
        Session.create(credentials, true).then(function(user) {
            me.setToken(credentials);
            $rootScope.theUserLogin=user;
            console.info(user);
            return deferred.resolve(user);

        }, function(response) {
            if (response.status == 401) {
                return deferred.reject(false);
            }
            throw new Error('No handler for status code ' + response.status);
        });
        return deferred.promise
    };
 
    this.logout = function() {
        localStorageService.clearAll();
        $rootScope.theUserLogin=false;
    };
 
    this.isAuthenticated = function() {
        var token = this.getToken();
        if (token) {
             $rootScope.theUserLogin=doUser();
             function doUser(){

                var theUser=[];
                theUser=atob(token).split(":");
                return {email:theUser[0]}}

            console.info($rootScope.theUserLogin);
            return true;
        }
        return false;
    };
 
    this.setToken = function(credentials) {
        localStorageService.set('token', btoa(credentials.email + ':' + credentials.password));
    };
 
    this.getToken = function() {
        return localStorageService.get('token');
    };

    
 
    return this;
})