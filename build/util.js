'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var getViewPort = exports.getViewPort = function getViewPort(context) {
  var viewport = 1600;
  if (context.tablet) viewport = 768; // iPad portrait width
  if (context.phone) viewport = 375; // iPhone 6 width
  if (typeof window !== 'undefined' && window.innerWidth) {
    viewport = window.innerWidth;
  }
  return viewport;
};

var defaultBreakpoints = exports.defaultBreakpoints = [768, 992, 1200];

var defaultContainerWidths = exports.defaultContainerWidths = [750, 970, 1170];

var defaultGutterWidth = exports.defaultGutterWidth = 30;

var getSize = exports.getSize = function getSize(context) {
  var theBreakpoints = context.breakpoints && context.breakpoints.length >= 3 ? context.breakpoints : defaultBreakpoints;

  var viewport = getViewPort(context);

  if (viewport < theBreakpoints[0]) {
    return 'xs';
  }
  if (viewport < theBreakpoints[1]) {
    return 'sm';
  }
  if (viewport < theBreakpoints[2]) {
    return 'md';
  }
  return 'lg';
};