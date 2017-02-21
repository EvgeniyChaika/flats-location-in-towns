'use strict';

let vm;
const _$state = new WeakMap();

class ResultsController {
    constructor($state, $scope) {
        vm = this;
        _$state.set(vm, $state);
        vm.items = $scope.$parent.$resolve.result.response.listings;
        vm.totalPages = $scope.$parent.$resolve.result.response.total_pages;
        vm.city = $scope.$parent.$resolve.result.response.searchTown;
    }

    viewPage(item) {
        _$state.get(vm).go('resultView', {
            city: vm.city,
            data: item
        });
    }

    backToMain() {
        _$state.get(vm).go('mainPage');
    }

    toResultsView() {
        _$state.get(vm).go('resultsView', {
                city: vm.city,
                items: vm.items
            }
        );
    }
}

ResultsController.$inject = ['$state', '$scope'];

const ResultsComponent = {
    controller: ResultsController,
    controllerAs: 'listResults',
    template: require('./results.html'),
    bindings: {
        resultData: '<'
    }
};

export default ResultsComponent;