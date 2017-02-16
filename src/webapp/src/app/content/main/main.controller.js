'use strict';

let vm;
const _$state = new WeakMap();

class MainController {
    constructor($state, $scope) {
        vm = this;
        _$state.set(vm, $state);
    }

    onSubmit(city) {
        _$state.get(vm).go('listResults',{city});
    }
}

MainController.$inject = ['$state', '$scope'];

const MainComponent = {
    controller: MainController,
    controllerAs: 'mainPage',
    template: require('./main.controller.html')
};

export default MainComponent;