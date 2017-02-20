'use strict';

let vm;
const _$http = new WeakMap();
const _$q = new WeakMap();

class MapsConnectService {
    constructor($http, $q) {
        vm = this;
        _$http.set(vm, $http);
        _$q.set(vm, $q);
       vm.http = $http;
    }

    getKeyApi() {
        console.log("key");
        return vm.http.get('/getMapsApiKey');
        // return 'key'
    }
}

MapsConnectService.$inject = ['$http', '$q'];

export default MapsConnectService;