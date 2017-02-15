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
            url: '/results',
            template: '<list-results></list-results>',
            title: 'results',
        });
};

export default routers;