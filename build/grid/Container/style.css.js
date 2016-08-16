'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('../../util');

exports.default = function (_ref) {
  var fluid = _ref.fluid;
  var viewport = _ref.viewport;
  var breakpoints = _ref.breakpoints;
  var containerWidths = _ref.containerWidths;

  var theBreakpoints = breakpoints && breakpoints.length >= 3 ? breakpoints : _util.defaultBreakpoints;
  var theContainerWidths = containerWidths && containerWidths.length >= 3 ? containerWidths : _util.defaultContainerWidths;

  var styles = {
    boxSizing: 'border-box',
    position: 'relative'
  };

  if (fluid) {
    return styles;
  }

  styles.padding = '0 15px';
  styles.margin = '0 auto';
  styles.maxWidth = '100%';

  if (viewport < theBreakpoints[0]) {
    // xs domain, smaller than 768px by default
    styles.width = 'auto';
    return styles;
  }

  if (viewport < theBreakpoints[1]) {
    // sm domain, smaller than 992px by default
    styles.width = theContainerWidths[0] + 'px'; // 750px by default
    return styles;
  }

  if (viewport < theBreakpoints[2]) {
    // md domain, smaller than 1200px by default
    styles.width = theContainerWidths[1] + 'px'; // 970px by default
    return styles;
  }

  // lg domain
  styles.width = theContainerWidths[2] + 'px'; // 1170px by default
  return styles;
};