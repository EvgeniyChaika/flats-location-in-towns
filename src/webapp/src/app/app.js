'use strict';

import "./styles/main.less";
import "./../public/img/favicon.ico";
import "jquery";
import "lodash";
import angular from "angular";
import uiRouter from "angular-ui-router";
import uiBootstrap from "angular-ui-bootstrap";
import "angular-simple-logger";
import "angular-google-maps";
import DataService from "./content/utils/data.service";
import MainComponent from "./content/main/main.controller";
import ResultsComponent from "./content/results/results.controller";
import ResultViewComponent from "./content/result.view/result.view.controller";
import routers from "./routes";

const app = 'flatsApp';

angular.module(app, [
    uiRouter,
    uiBootstrap,
    'uiGmapgoogle-maps'
])
    .config(routers)
    .config((uiGmapGoogleMapApiProvider) => {
        uiGmapGoogleMapApiProvider.configure({
            key: 'KEY_API',
            v: '3', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        })
    })
    .service('DataService', DataService)
    .component('searchField', MainComponent)
    .component('listResults', ResultsComponent)
    .component('resultView', ResultViewComponent);

angular.bootstrap(document, [app]);