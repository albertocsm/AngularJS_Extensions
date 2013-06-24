/// <reference path="IMultiDataSourceService.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />

module ng.e{    
    export class MultiDataSource{

        //#region members
        public totalRows: number;
        public items: any[];

        private pageSize: number;
        public pageIndex: number;
        public pagesShown: number;        
        private isLoading: boolean;
        private searchText: string;        

		private service: ng.e.IMultiDataSourceService;    
        //#endregion


        //#region public API
        constructor(service: ng.e.IMultiDataSourceService, pageSize: number, initialize:boolean = true) {          
            this.pageSize = pageSize;
            this.pageIndex = 1;
			this.pagesShown = 1;
			this.service = service;  
			
			if ( initialize )
			{
				this.load();
			}          
        }

        public hasMore():boolean {
			var result = false;
			if (this.items != null) {
                result = this.pagesShown < (this.totalRows / this.pageSize);                
            }

            return result;
        }

		public load(): ng.IHttpPromise {			
			if ( this.items == null )
			{
				if ( !this.isLoading )
				{
					this.isLoading = true;
					
					return this.getData( false, () => {
						this.isLoading = false;
					});
				}
			}
		}

        public next(): ng.IHttpPromise{
            this.pagesShown++;
            
            return this.getData(false);        
        }

        public search(value: string): ng.IHttpPromise {
            return this.getData(true, null, value);
		}      

		public sort( sortBy: number ): ng.IHttpPromise {
			throw EventException();
			return;
		}

		public refresh(): ng.IHttpPromise{ 
			throw EventException();
			return;
        }

        public insert(): ng.IHttpPromise{ 
			throw EventException();
			return;
        }

        public update(): ng.IHttpPromise{ 
			throw EventException();
			return;
        }

        public delete(): ng.IHttpPromise{ 
			throw EventException();
			return;
        }
        //#endregion


        //#region internal API      
        private getData(isRefreshing: bool = false, callBack?: Function, search?: string): ng.IHttpPromise {
            
            var _this = this;
            var pageSize = isRefreshing ? _this.pageSize * _this.pagesShown : _this.pageSize;
            var pageIndex = isRefreshing ? 1 : _this.pagesShown;					

			return _this.service.list( { PageIndex: pageIndex, PageSize: pageSize, SearchText: search }).success(function(data){				
                _this.totalRows = data.TotalRows;

                if (isRefreshing) {
                    _this.items = data.Collection;
                }
                else {
                    if (_this.items == null) {
                        _this.items = data.Collection;
                    }
                    else {
                        _this.items = _this.items.concat(data.Collection);
                    }
                }


                if (callBack != null) {
                    callBack();
				}
				
				console.log( "MultiDataSource sucess-pre-proocessment OK" );
			});

        }      
        //#endregion
    }
}