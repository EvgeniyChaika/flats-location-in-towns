'use strict';

let vm;
const _$state = new WeakMap();

class ResultsController {
    constructor($state, $scope) {
        vm = this;
        _$state.set(vm, $state);
        vm.items = $scope.$parent.$resolve.result.response.listings;
        vm.totalPages= $scope.$parent.$resolve.result.response.total_pages;
    }
    viewPage(index) {
        console.log("go Third Page -> property");
    }

    backToMain() {
        _$state.get(vm).go('mainPage');
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