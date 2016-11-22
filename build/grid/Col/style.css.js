'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = function (_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      viewport = _ref.viewport,
      breakpoints = _ref.breakpoints,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle;

  var theBreakpoints = breakpoints && breakpoints.length >= 4 ? breakpoints : _utils.defaultBreakpoints;
  var theGutterWidth = gutterWidth || _utils.defaultGutterWidth;

  var styles = _extends({
    boxSizing: 'border-box',
    position: 'relative',
    minHeight: '1px',
    paddingLeft: theGutterWidth / 2 + 'px',
    paddingRight: theGutterWidth / 2 + 'px',
    float: 'left'
  }, moreStyle);

  styles.width = '100%';

  if (xs) {
    styles.width = 100 / 12 * xs + '%';
  }

  if (viewport >= theBreakpoints[0] && sm) {
    styles.width = 100 / 12 * sm + '%';
  }

  if (viewport >= theBreakpoints[1] && md) {
    styles.width = 100 / 12 * md + '%';
  }

  if (viewport >= theBreakpoints[2] && lg) {
    styles.width = 100 / 12 * lg + '%';
  }

  if (viewport >= theBreakpoints[3] && xl) {
    styles.width = 100 / 12 * xl + '%';
  }

  return styles;
};