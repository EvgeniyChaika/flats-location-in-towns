'use strict';

let vm;
const _$state = new WeakMap();
const _$stateParams = new WeakMap();
const _uiGmapGoogleMapApi = new WeakMap();

class ResultViewController {
    constructor($state, $stateParams, uiGmapGoogleMapApi, $scope) {
        vm = this;
        _$state.set(vm, $state);
        _$stateParams.set(vm, $stateParams);
        _uiGmapGoogleMapApi.set(vm, uiGmapGoogleMapApi);
        vm.view = _$stateParams.get(vm).data;
        vm.latitude = _$stateParams.get(vm).data.latitude;
        vm.longitude = _$stateParams.get(vm).data.longitude;
        vm.map = {
            center: {
                latitude: vm.latitude,
                longitude: vm.longitude
            },
            zoom: 14,
            bounds: {}
        };
        vm.options = {
            scrollwheel: false
        };
        vm.markers = [];
        vm.marker = {
            id: 1,
            latitude: vm.latitude,
            longitude: vm.longitude,
            title: 'Flat',
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            show: false
        };
        vm.activeModel = {};
        vm.windowOptions = {
            boxClass: "infobox",
            boxStyle: {
                backgroundColor: "white",
                border: "1px solid red",
                borderRadius: "1px",
                width: "150px",
                height: "50px",
                padding: "5px"
            },
            content: "latitude: " + vm.latitude + ",\nlongitude : " + vm.longitude,
            disableAutoPan: true,
            maxWidth: 0,
            zIndex: null,
            closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        };
        vm.onClick = (marker, eventName, model) => {
            console.log("Clicked!");
            model.show = !model.show;
            vm.activeModel = model;
        };

        // Get the bounds from the map once it's loaded
        $scope.$watch(function () {
            return vm.map.bounds;
        }, function (nv, ov) {
            // Only need to regenerate once
            if (!ov.southwest && nv.southwest) {
                let markers = [];
                markers.push(vm.marker);
                vm.markers = markers;
            }
        }, true);
    }

    backToResults() {
        _$state.get(vm).go('listResults', {city: _$stateParams.get(vm).city});
    }
}

ResultViewController.$inject = ['$state', '$stateParams', 'uiGmapGoogleMapApi', '$scope'];

const ResultViewComponent = {
    controller: ResultViewController,
    controllerAs: 'resultView',
    template: require('./result.view.html')
};

export default ResultViewComponent;