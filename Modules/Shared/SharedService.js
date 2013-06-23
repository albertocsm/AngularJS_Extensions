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
}).factory('myHttpInterceptor', function ($q, $window) {
    return function (promise) {
        return promise.then(function (response) {
            requestCount--;
            if (requestCount <= 0) {
                $('#loading').fadeOut('slow', function () {
                });
            }
            ;

            return response;
        }, function (response) {
            requestCount--;
            if (requestCount <= 0) {
                $('#loading').fadeOut('slow', function () {
                });
            }
            ;

            switch (response.status) {
                case 401:
                    setTimeout(function () {
                        window.location.href = window.location.href;
                    }, 2000);
                    break;
                default:
            }

            return $q.reject(response);
        });
    };
});
//@ sourceMappingURL=SharedService.js.map
