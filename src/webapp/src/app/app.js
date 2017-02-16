'use strict';

import "./styles/main.less";
import "./../public/img/favicon.ico";
import "jquery";

import angular from "angular";
import uiRouter from "angular-ui-router";
import uiBootstrap from "angular-ui-bootstrap";

import DataService from "./content/utils/data.service";
import MainComponent from "./content/main/main.controller";
import ResultsComponent from "./content/results/results.controller";
import routers from "./routes";

const app = 'flatsApp';

angular.module(app, [
    uiRouter,
    uiBootstrap
])
    .config(routers)
    .service('DataService', DataService)
    .component('searchField', MainComponent)
    .component('listResults', ResultsComponent);

angular.bootstrap(document, [app]);