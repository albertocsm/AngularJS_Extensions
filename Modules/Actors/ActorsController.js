var Actors;
(function (Actors) {
    var ActorsController = (function () {
        function ActorsController($scope, $dialog, actorService) {
            this.actorCollection = new ng.e.MultiDataSource(actorService, 3);

            this.initializeScope($scope, $dialog);
        }
        ActorsController.prototype.initializeScope = function (scope, dialog) {
            var controller = this;

            scope.allActors = function () {
                return controller.actorCollection.items;
            };

            scope.searchActors = function () {
                controller.actorCollection.search(scope.searchText);
            };
            scope.hasMoreActors = function () {
                return controller.actorCollection.hasMore();
            };

            scope.showMoreActors = function () {
                controller.actorCollection.next();
            };

            scope.totalActors = function () {
                return controller.actorCollection.totalRows;
            };

            scope.showDetails = function (obj) {
                var opts = {
                    backdrop: true,
                    keyboard: true,
                    backdropClick: false,
                    templateUrl: ('modules/actors/actorDetailTemplate.htm?' + Math.floor(Math.random() * 12)),
                    controller: 'Actors.ActorsActionsController',
                    resolve: {
                        item: function () {
                            return obj;
                        }
                    }
                };

                dialog.dialog(opts).open().then(function (ret) {
                    console.log("dialog closed");
                });
            };
        };
        return ActorsController;
    })();
    Actors.ActorsController = ActorsController;
})(Actors || (Actors = {}));
