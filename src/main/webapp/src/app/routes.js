'use strict';

const routers = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('mainPage', {
            url: '/',
            template: '<search-field></search-field>',
            title: 'Main',
        })
        .state('listResults', {
            url: '/results/:city',
            template: '<list-results result-data="$resolve.result"></list-results>',
            title: 'Results',
            resolve: {
                result: (DataService, $stateParams) => ($stateParams.city) ? DataService.getListTowns($stateParams.city) : null
            }
        })
        .state('resultsView', {
            url: '/results/:city/results-view',
            template: '<results-view list-results="$resolve.list"></results-view>',
            title: 'Results View',
            params: {
                items: []
            }
        })
        .state('resultView', {
            url: '/results/:city/view',
            template: '<result-view city-data="$resolve.item"></result-view>',
            title: 'Result View',
            params: {
                data: {}
            }
        });
};

export default routers;