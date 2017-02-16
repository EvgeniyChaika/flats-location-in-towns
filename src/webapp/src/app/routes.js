'use strict';

const routers = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('mainPage', {
            url: '/',
            template: '<search-field></search-field>',
            title: 'main',
        })
        .state('listResults', {
            url: '/results/:city',
            template: '<list-results result-data="$resolve.result"></list-results>',
            title: 'results',
            resolve: {
                result: (DataService, $stateParams) => ($stateParams.city) ? DataService.getListTowns($stateParams.city) : null
            }
        });
};

export default routers;