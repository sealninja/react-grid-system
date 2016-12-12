'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var getViewPort = function getViewPort(_ref) {
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

var defaultBreakpoints = exports.defaultBreakpoints = [576, 768, 992, 1200];

var defaultContainerWidths = exports.defaultContainerWidths = [540, 750, 960, 1140];

var defaultGutterWidth = exports.defaultGutterWidth = 30;

var getScreenClass = exports.getScreenClass = function getScreenClass(_ref2) {
  var phone = _ref2.phone,
      tablet = _ref2.tablet,
      breakpoints = _ref2.breakpoints;

  var theBreakpoints = breakpoints && breakpoints.length ? breakpoints : defaultBreakpoints;
  var viewport = getViewPort({ phone: phone, tablet: tablet });

  var screenClass = 'xs';

  if (theBreakpoints[0] && viewport >= theBreakpoints[0]) screenClass = 'sm';
  if (theBreakpoints[1] && viewport >= theBreakpoints[1]) screenClass = 'md';
  if (theBreakpoints[2] && viewport >= theBreakpoints[2]) screenClass = 'lg';
  if (theBreakpoints[3] && viewport >= theBreakpoints[3]) screenClass = 'xl';

  return screenClass;
};

var normalizeColumnWidth = exports.normalizeColumnWidth = function normalizeColumnWidth(width) {
  if (typeof width !== 'number') return undefined;
  return Math.max(0, Math.min(12, width));
};