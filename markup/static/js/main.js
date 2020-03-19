'use strict';

// LazyLoad init
import LazyLoad from 'vanilla-lazyload';

const lazyLoadOptions = {
    elements_selector: '.lazy'
};

const createLazyLoadInstance = () => {
    return new LazyLoad(lazyLoadOptions);
};

document.addEventListener('DOMContentLoaded', createLazyLoadInstance);
// end LazyLoad init


import objectFitImages from 'object-fit-images';

import ready from './documentReady.js';

ready(
    function () {
        // Polyfill for object-fit init
        objectFitImages();

        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector;
        }

        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }

    }
);

// Imports components

import 'components/example/example';
