'use strict';

import "./styles/main.less";
import _ from "lodash";
import "./../public/img/favicon.ico";

import  'jquery';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import './routes';
import './content/main/main.controller';

import MainComponent from "./content/main/main.controller";
import ResultsComponent from "./content/results/results.controller";
import routers from "./routes";

const app = 'departmentsApp';

angular.module(app, [
    uiRouter,
    uiBootstrap
])
    .config(routers)
    .component('searchField', MainComponent)
    .component('listResults', ResultsComponent);


angular.bootstrap(document, [app]);