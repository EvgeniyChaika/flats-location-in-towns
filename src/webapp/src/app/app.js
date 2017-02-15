'use strict';

import './styles/main.less';
import _ from "lodash";
import "./../public/img/favicon.ico";

function component() {
    let element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    console.log("Hello");
    return element;
}

document.body.appendChild(component());