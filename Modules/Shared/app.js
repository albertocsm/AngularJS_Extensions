'use strict';

var actorApp = angular.module('actorApp', ['ngResource', 'ngSanitize', 'ui.bootstrap', 'sharedService']);

actorApp.service('actorService', Actors.ActorsService);

actorApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: 'modules/actors/actors.html',
            controller: "Actors.ActorsController"
        })
        .when('/modules/actor/actordetails/:id',
        {
            templateUrl: 'modules/actors/actordetails.html',
            controller: "Actors.ActorsDetaillController"
        })
        .otherwise(
        {
            template: 'nao ha rota para ai!!!'
        });
    //$routeProvider.when('/actordetails', { templateUrl: '/pages/actordetails.html', controller: AboutController });
    //$routeProvider.otherwise({ redirectTo: '/' });
});





