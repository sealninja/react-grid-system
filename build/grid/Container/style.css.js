'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAfterStyle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = function (_ref) {
  var fluid = _ref.fluid,
      viewport = _ref.viewport,
      breakpoints = _ref.breakpoints,
      containerWidths = _ref.containerWidths,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle;

  var theBreakpoints = breakpoints && breakpoints.length >= 4 ? breakpoints : _utils.defaultBreakpoints;
  var theContainerWidths = containerWidths && containerWidths.length >= 4 ? containerWidths : _utils.defaultContainerWidths;
  var theGutterWidth = gutterWidth || _utils.defaultGutterWidth;

  var styles = _extends({
    boxSizing: 'border-box',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: theGutterWidth / 2 + 'px',
    paddingRight: theGutterWidth / 2 + 'px',
    width: 'auto'
  }, moreStyle);

  if (fluid) {
    return styles;
  }

  if (viewport >= theBreakpoints[0]) {
    // sm domain, bigger than or equal to 768px by default
    styles.maxWidth = theContainerWidths[0] + 'px'; // 750px by default
  }

  if (viewport >= theBreakpoints[1]) {
    // md domain, bigger than or equal to 992px by default
    styles.maxWidth = theContainerWidths[1] + 'px'; // 970px by default
  }

  if (viewport >= theBreakpoints[2]) {
    // lg domain, bigger than or equal to 1200px by default
    styles.maxWidth = theContainerWidths[2] + 'px'; // 1170px by default
  }

  if (viewport >= theBreakpoints[3]) {
    // xl domain, bigger than or equal to 1350px by default
    styles.maxWidth = theContainerWidths[3] + 'px'; // 1320px by default
  }

  return styles;
};

var getAfterStyle = exports.getAfterStyle = function getAfterStyle() {
  return {
    display: 'table',
    clear: 'both'
  };
};