'use strict';

let vm;
const _$state = new WeakMap();

class ResultsController {
    constructor($state, $scope) {
        vm = this;
        _$state.set(vm, $state);
    }

    backToMain() {
        _$state.get(vm).go('mainPage');
    }
}

ResultsController.$inject = ['$state', '$scope'];

const ResultsComponent = {
    controller: ResultsController,
    controllerAs: 'listResults',
    template: require('./results.html')
};

export default ResultsComponent;