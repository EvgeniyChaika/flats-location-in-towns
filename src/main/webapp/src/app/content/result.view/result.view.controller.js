'use strict';

let vm;
const _$state = new WeakMap();
const _$stateParams = new WeakMap();
const _uiGmapGoogleMapApi = new WeakMap();

class ResultViewController {
    constructor($state, $stateParams, uiGmapGoogleMapApi) {
        vm = this;
        _$state.set(vm, $state);
        _$stateParams.set(vm, $stateParams);
        _uiGmapGoogleMapApi.set(vm, uiGmapGoogleMapApi);
        vm.view = _$stateParams.get(vm).data.item;
        vm.map = null;
        vm.latitude = _$stateParams.get(vm).data.item.latitude;
        vm.longitude = _$stateParams.get(vm).data.item.longitude;
        vm.initMap(uiGmapGoogleMapApi);
    }

    initMap(uiGmapGoogleMapApi) {
        _uiGmapGoogleMapApi.get(vm).then((maps) => {
            vm.map = {center: {latitude: vm.latitude, longitude: vm.longitude}, zoom: 10};
        })

    }

    backToResults() {
        _$state.get(vm).go('listResults', {city: _$stateParams.get(vm).city});
    }
}

ResultViewController.$inject = ['$state', '$stateParams', 'uiGmapGoogleMapApi'];

const ResultViewComponent = {
    controller: ResultViewController,
    controllerAs: 'resultView',
    template: require('./result.view.html')
};

export default ResultViewComponent;