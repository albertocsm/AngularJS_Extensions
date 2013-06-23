var Actors;
(function (Actors) {
    var ActorsDetaillController = (function () {
        function ActorsDetaillController($scope, $routeParams, actorService) {
            actorService.get({ Id: $routeParams.id }, function (data) {
                $scope.name = data.name;
                $scope.image = '../App_Themes/ThemeDefault/' + data.image;
                $scope.character = data.character;
                $scope.description = data.description;
            });
        }
        return ActorsDetaillController;
    })();
    Actors.ActorsDetaillController = ActorsDetaillController;
})(Actors || (Actors = {}));
