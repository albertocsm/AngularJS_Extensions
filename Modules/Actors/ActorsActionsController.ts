/// <reference path="../Shared/typings/angularjs/angular.d.ts" />


module Actors {
    export interface IActorsActionsScope extends ng.IScope {
        cancel: Function;
        close: Function;

        dialogTitle: string;
        actor: string;
    }

    export class ActorsActionsController {
        constructor($scope: IActorsActionsScope, item, dialog) {
            
            $scope.dialogTitle = item.title;
            $scope.actor = item.actor;

            $scope.cancel = function () {
                dialog.close(false);
            }

            $scope.close = function () {
                dialog.close(true);                                
            }
        }
    }
}