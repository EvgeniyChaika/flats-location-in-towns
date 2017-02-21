'use strict';

let vm;
const _$state = new WeakMap();
const _$stateParams = new WeakMap();
const _uiGmapGoogleMapApi = new WeakMap();

class ResultsViewController {
    constructor($state, $stateParams, uiGmapGoogleMapApi, $scope) {
        vm = this;
        _$state.set(vm, $state);
        _$stateParams.set(vm, $stateParams);
        _uiGmapGoogleMapApi.set(vm, uiGmapGoogleMapApi);
        vm.items = _$stateParams.get(vm).items;
        vm.latitude = _$stateParams.get(vm).items[0].latitude;
        vm.longitude = _$stateParams.get(vm).items[0].longitude;
        vm.map = {
            center: {
                latitude: vm.latitude,
                longitude: vm.longitude
            },
            zoom: 10,
            bounds: {}
        };
        vm.options = {
            scrollwheel: false
        };
        vm.markers = [];
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
        vm.createMarker = function (i, latitude, longitude, bounds, idKey) {
            if (idKey == null) {
                idKey = "id";
            }

            let ret = {
                latitude: latitude,
                longitude: longitude,
                title: 'flat' + i,
                show: false
            };
            ret[idKey] = i;
            return ret;
        };
        vm.onClick = (marker, eventName, model) => {
            console.log("Clicked!");
            vm.windowOptions.content = "latitude: " + model.latitude + ",\nlongitude : " + model.longitude;
            model.show = !model.show;
            vm.activeModel = model;
        };

        // Get the bounds from the map once it's loaded
        $scope.$watch(function () {
            return vm.map.bounds;
        }, function (nv, ov) {
            // Only need to regenerate once
            if (!ov.southwest && nv.southwest) {
                let list = [];
                for (let index = 0; index < vm.items.length; index++) {
                    list.push(vm.createMarker(index, vm.items[index].latitude, vm.items[index].longitude, vm.map.bounds));
                }
                vm.markers = list;
            }
        }, true);
    }

    backToResults() {
        _$state.get(vm).go('listResults', {city: _$stateParams.get(vm).city});
    }
}

ResultsViewController.$inject = ['$state', '$stateParams', 'uiGmapGoogleMapApi', '$scope'];

const ResultsViewComponent = {
    controller: ResultsViewController,
    controllerAs: 'resultsView',
    template: require('./results.view.html')
};

export default ResultsViewComponent;