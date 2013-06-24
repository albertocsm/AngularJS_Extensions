var ng;
(function (ng) {
    (function (e) {
        var MultiDataSource = (function () {
            function MultiDataSource(service, pageSize, initialize) {
                if (typeof initialize === "undefined") { initialize = true; }
                this.pageSize = pageSize;
                this.pageIndex = 1;
                this.pagesShown = 1;
                this.service = service;

                if (initialize) {
                    this.load();
                }
            }
            MultiDataSource.prototype.hasMore = function () {
                var result = false;
                if (this.items != null) {
                    result = this.pagesShown < (this.totalRows / this.pageSize);
                }

                return result;
            };

            MultiDataSource.prototype.load = function () {
                var _this = this;
                if (this.items == null) {
                    if (!this.isLoading) {
                        this.isLoading = true;

                        return this.getData(false, function () {
                            _this.isLoading = false;
                        });
                    }
                }
            };

            MultiDataSource.prototype.next = function () {
                this.pagesShown++;

                return this.getData(false);
            };

            MultiDataSource.prototype.search = function (value) {
                return this.getData(true, null, value);
            };

            MultiDataSource.prototype.sort = function (sortBy) {
                throw EventException();
                return;
            };

            MultiDataSource.prototype.refresh = function () {
                throw EventException();
                return;
            };

            MultiDataSource.prototype.getData = function (isRefreshing, callBack, search) {
                if (typeof isRefreshing === "undefined") { isRefreshing = false; }
                var _this = this;
                var pageSize = isRefreshing ? _this.pageSize * _this.pagesShown : _this.pageSize;
                var pageIndex = isRefreshing ? 1 : _this.pagesShown;

                return _this.service.list({ PageIndex: pageIndex, PageSize: pageSize, SearchText: search }).success(function (data) {
                    _this.totalRows = data.TotalRows;

                    if (isRefreshing) {
                        _this.items = data.Collection;
                    } else {
                        if (_this.items == null) {
                            _this.items = data.Collection;
                        } else {
                            _this.items = _this.items.concat(data.Collection);
                        }
                    }

                    if (callBack != null) {
                        callBack();
                    }

                    console.log("MultiDataSource sucess-pre-proocessment OK");
                });
            };
            return MultiDataSource;
        })();
        e.MultiDataSource = MultiDataSource;
    })(ng.e || (ng.e = {}));
    var e = ng.e;
})(ng || (ng = {}));
