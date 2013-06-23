/// <reference path="ActorsService.ts" />
/// <reference path="../Shared/typings/angularjs/angular.d.ts" />

module Actors {

    export interface IActorsDetailScope extends ng.IScope {
        
        //#region Members
        name: string;
        image: string;
        character: string;
        description: string;
        //#endregion
    }
    
    export class ActorsDetaillController {
        
        //#region public API
        constructor($scope: IActorsDetailScope, $routeParams:any, actorService: Actors.ActorsService) {

            //initialize controller
            actorService.get({ Id: $routeParams.id}, function (data)
            {
                $scope.name = data.name;
                $scope.image = '../App_Themes/ThemeDefault/'  + data.image;
                $scope.character = data.character;
                $scope.description = data.description;
            });
                                                           
        }
        //#endregion
    }
}