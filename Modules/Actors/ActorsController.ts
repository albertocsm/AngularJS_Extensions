/// <reference path="ActorsService.ts" />
/// <reference path="../Shared/typings/angularjs/angular.d.ts" />
/// <reference path="../Shared/extensions/angular/MultiDataSource.ts" />


module Actors {

    export interface IActorsScope extends ng.IScope {

        //#region  API
        allActors: Function;
        searchActors: Function;
        hasMoreActors: Function;
        showMoreActors: Function;

        showDetails: Function;
        totalActors: Function;
        //#endregion

        //#region Members
        searchText: string;
        //#endregion
    }

    export class ActorsController {

		//#region members        
		private actorCollection: ng.e.MultiDataSource;
		//#endregion


		//#region public API
		constructor( $scope: IActorsScope, $dialog: any, actorService: Actors.ActorsService) {

			//initialize controller            
			this.actorCollection = new ng.e.MultiDataSource( actorService, 3 );
			
			//// If MultiDataSource was created with "Initialize" to false, you need to load manually
			//// optionally, you can tap on .sucess (or .error) and do some other stuff with the response
			////example:
			//this.actorCollection.load().then( ( response ) => {
			//	console.log( response );
			//});

            //initialize Scope
            this.initializeScope($scope, $dialog);
        }
        //#endregion


        //#region internal API
        private initializeScope(scope: IActorsScope, dialog: any) {

            var controller = this;
		
            scope.allActors = function () {				
                return controller.actorCollection.items;
            }

            scope.searchActors = function () {
                controller.actorCollection.search(scope.searchText);
            }
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
                    resolve:
                    {
                        item: function () {
                            return obj;
                        }
                    }
                };

                //open dialog
                dialog.dialog(opts).open().then(function (ret) {
                    // do something when dialog closes...                    
                    console.log("dialog closed");
                });
            };
        }
        //#endregion
    }
}