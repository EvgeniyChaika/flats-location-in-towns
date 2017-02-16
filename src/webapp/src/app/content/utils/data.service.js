'use strict';

let vm;
const _$http = new WeakMap();
const _$q = new WeakMap();

class DataService {
    constructor($http, $q) {
        vm = this;
        _$http.set(vm, $http);
        _$q.set(vm, $q);
    }

    getListTowns(searchTown) {
        return _$q.get(vm)((resolve, reject) => {
                _$http.get(vm)({
                    crossDomain: true,
                    method: "GET",
                    contentType: 'application/json',
                    url: "http://api.nestoria.co.uk/api?country=" +
                    "uk&pretty=1&action=search_listings&encoding=json" +
                    "&listing_type=buy&page=1&place_name=" + searchTown,
                    params: {searchTown}
                }).then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
            }
        )
    }
}

DataService.$inject = ['$http', '$q'];

export default DataService;