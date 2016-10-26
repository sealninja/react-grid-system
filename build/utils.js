'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var getViewPort = exports.getViewPort = function getViewPort(_ref) {
  var phone = _ref.phone,
      tablet = _ref.tablet;

  var viewport = 1600;
  if (tablet) viewport = 768; // iPad portrait width
  if (phone) viewport = 375; // iPhone 6 width
  if (typeof window !== 'undefined' && window.innerWidth) {
    viewport = window.innerWidth;
  }
  return viewport;
};

var defaultBreakpoints = exports.defaultBreakpoints = [768, 992, 1200];

var defaultContainerWidths = exports.defaultContainerWidths = [750, 970, 1170];

var defaultGutterWidth = exports.defaultGutterWidth = 30;

var getScreenClass = exports.getScreenClass = function getScreenClass(_ref2) {
  var phone = _ref2.phone,
      tablet = _ref2.tablet,
      breakpoints = _ref2.breakpoints;

  var theBreakpoints = breakpoints && breakpoints.length >= 3 ? breakpoints : defaultBreakpoints;

  var viewport = getViewPort({ phone: phone, tablet: tablet });

  if (viewport >= theBreakpoints[2]) {
    return 'lg';
  }
  if (viewport >= theBreakpoints[1]) {
    return 'md';
  }
  if (viewport >= theBreakpoints[0]) {
    return 'sm';
  }
  return 'xs';
};