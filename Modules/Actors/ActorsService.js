var Actors;
(function (Actors) {
    var ActorsService = (function () {
        function ActorsService($http) {
            this.httpService = $http;
        }
        ActorsService.prototype.list = function (filters) {
            return this.httpService.post("/api/Actors/List", filters).success(function (data, status, headers, config) {
                console.log("service list OK");
            }).error(function (data, status, headers, config) {
                console.log("service list ERROR");
            });
        };

        ActorsService.prototype.get = function (filters) {
            return this.httpService.post("/api/Actors/Get", filters).success(function (data, status, headers, config) {
                console.log("service get OK");
            }).error(function (data, status, headers, config) {
                console.log("service get ERROR");
            });
        };
        return ActorsService;
    })();
    Actors.ActorsService = ActorsService;
})(Actors || (Actors = {}));
//@ sourceMappingURL=ActorsService.js.map
