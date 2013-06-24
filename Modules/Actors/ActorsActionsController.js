var Actors;
(function (Actors) {
    var ActorsActionsController = (function () {
        function ActorsActionsController($scope, item, dialog) {
            $scope.dialogTitle = item.title;
            $scope.actor = item.actor;

            $scope.cancel = function () {
                dialog.close(false);
            };

            $scope.close = function () {
                dialog.close(true);
            };
        }
        return ActorsActionsController;
    })();
    Actors.ActorsActionsController = ActorsActionsController;
})(Actors || (Actors = {}));
//@ sourceMappingURL=ActorsActionsController.js.map
