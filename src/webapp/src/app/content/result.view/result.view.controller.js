'use strict';

let vm;
const _$state = new WeakMap();
const _$stateParams = new WeakMap();

class ResultViewController {
    constructor($state, $stateParams) {
        vm = this;
        _$state.set(vm, $state);
        _$stateParams.set(vm, $stateParams);
        vm.view = _$stateParams.get(vm).data.item;
    }

    backToResults() {
        _$state.get(vm).go('listResults', {city: _$stateParams.get(vm).city});
    }
}

ResultViewController.$inject = ['$state', '$stateParams'];

const ResultViewComponent = {
    controller: ResultViewController,
    controllerAs: 'resultView',
    template: require('./result.view.html')
};

export default ResultViewComponent;