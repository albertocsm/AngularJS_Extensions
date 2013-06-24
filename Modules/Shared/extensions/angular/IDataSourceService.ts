/// <reference path="../../typings/angularjs/angular.d.ts" />

module ng.e{    
	export interface IDataSourceService
	{
		get( filters: any ): ng.IHttpPromise;
    }
}