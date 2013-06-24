/// <reference path="../Shared/extensions/angular/IMultiDataSourceService.ts" />
/// <reference path="../Shared/typings/angularjs/angular.d.ts" />

module Actors {

    export class ActorsService implements ng.e.IMultiDataSourceService {   
        
        //#region memebers     
        private httpService: ng.IHttpService;        
        //#endregion        
        

        //#region public API        
        constructor($http: ng.IHttpService) {
            this.httpService = $http;            
        }
        
        public list(filters: any):ng.IHttpPromise {            

           return this.httpService.post("/api/Actors/List", filters)
                .success(function (data, status, headers, config) {
					console.log( "service list OK" );
                })
                .error(function (data, status, headers, config) {
					console.log( "service list ERROR" );
                    //do some stuff with the error
                    //switch (data.Message) {
                    //    case "60030":
                    //        console.log(data.Message + " - Unable to get actors list");
                    //        break;
                    //    default:
                    //        console.log("Unable to get actors list");
                    //}

                });
        }                

		public get( filters: any): ng.IHttpPromise {                        

            return this.httpService.post("/api/Actors/Get", filters)
                .success(function (data, status, headers, config) {
					console.log( "service get OK" );                    
                })
                .error(function (data, status, headers, config) {
					console.log( "service get ERROR" );
                    //do some stuff with the error
                    //switch (data.Message) {
                    //    case "60030":
                    //        console.log(data.Message + " - Unable to get actors list");
                    //        break;
                    //    default:
                    //        console.log("Unable to get actors list");
                    //}

                });
        }
        //#endregion        
    }
}
