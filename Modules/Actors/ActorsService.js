var Actors;
(function (Actors) {
    var ActorsService = (function () {
        function ActorsService($http) {
            this.httpService = $http;
        }
        ActorsService.prototype.list = function (filters, callback) {
            return this.httpService.post("/api/Actors/List", filters).success(function (data, status, headers, config) {
                console.log("service list OK");
                callback(data);
            }).error(function (data, status, headers, config) {
                console.log("service list ERROR");
            });
        };

        ActorsService.prototype.get = function (filters, callback) {
            this.httpService.post("/api/Actors/Get", filters).success(function (data, status, headers, config) {
                callback(data);
            }).error(function (data, status, headers, config) {
            });
        };
        return ActorsService;
    })();
    Actors.ActorsService = ActorsService;
})(Actors || (Actors = {}));
