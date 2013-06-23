/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var requestCount = 0;

angular.module('sharedService', []).config(function ($httpProvider) {
    $httpProvider.responseInterceptors.push('myHttpInterceptor');
    
    var spinnerFunction = function (data, headersGetter) {                
        if (requestCount == 0) {
            $('#loading').show();
        }
        requestCount++;

        return data;
    };

    $httpProvider.defaults.transformRequest.push(spinnerFunction);
})
// register the interceptor as a service, intercepts ALL angular ajax http calls
    .factory('myHttpInterceptor', function ($q, $window) {
        return function (promise) {
            return promise.then(

            // on sucess
            function (response) {
                                
                requestCount--;
                if (requestCount <= 0) {
                    $('#loading').fadeOut('slow', function () { });
                };

                return response;

            },

            //on error
            function (response) {
                
                //hide spinner                
                requestCount--;
                if (requestCount <= 0) {
                    $('#loading').fadeOut('slow', function () { });
                };

                //treat errors
                switch (response.status) {
                    case 401:
                        //user authentication expired, reload page and let it handle the redirect                        
                        setTimeout(function () {
                            window.location.href = window.location.href;                            
                        }, 2000);
                        break;
                    default:
                }

                return $q.reject(response);
            });
        };
    })