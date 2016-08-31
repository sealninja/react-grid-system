'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAfterStyle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _util = require('../../util');

exports.default = function (_ref) {
  var fluid = _ref.fluid;
  var viewport = _ref.viewport;
  var breakpoints = _ref.breakpoints;
  var containerWidths = _ref.containerWidths;
  var gutterWidth = _ref.gutterWidth;
  var moreStyle = _ref.moreStyle;

  var theBreakpoints = breakpoints && breakpoints.length >= 3 ? breakpoints : _util.defaultBreakpoints;
  var theContainerWidths = containerWidths && containerWidths.length >= 3 ? containerWidths : _util.defaultContainerWidths;
  var theGutterWidth = gutterWidth || _util.defaultGutterWidth;

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

  return styles;
};

var getAfterStyle = exports.getAfterStyle = function getAfterStyle() {
  return {
    display: 'table',
    clear: 'both'
  };
};