(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var map = new mapboxgl.Map({
  container: 'map',
  style: './style.json',
  attributionControl: true,
  hash: true
});
var hoverStateId = null;
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});
map.on('mousemove', 'fude', function (e) {
  if (e.features.length > 0) {
    if (hoverStateId) {
      map.setFeatureState({
        source: 'v',
        sourceLayer: 'fude',
        id: hoverStateId
      }, {
        hover: false
      });
    }

    hoverStateId = e.features[0].id;
    map.setFeatureState({
      source: 'v',
      sourceLayer: 'fude',
      id: hoverStateId
    }, {
      hover: true
    });
    map.getCanvas().style.cursor = 'pointer';
    popup.setLngLat(e.lngLat).setHTML(JSON.stringify(e.features[0].properties, null, 2)).addTo(map);
  }
});
map.on('mouseleave', 'fude', function () {
  if (hoverStateId) {
    map.setFeatureState({
      source: 'v',
      sourceLayer: 'fude',
      id: hoverStateId
    }, {
      hover: false
    });
    hoverStateId = null;
  }

  map.getCanvas().style.cursor = '';
  popup.remove();
});

},{}]},{},[1]);
