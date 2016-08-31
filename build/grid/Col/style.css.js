'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _util = require('../../util');

exports.default = function (_ref) {
  var xs = _ref.xs;
  var sm = _ref.sm;
  var md = _ref.md;
  var lg = _ref.lg;
  var viewport = _ref.viewport;
  var breakpoints = _ref.breakpoints;
  var gutterWidth = _ref.gutterWidth;
  var moreStyle = _ref.moreStyle;

  var theBreakpoints = breakpoints && breakpoints.length >= 3 ? breakpoints : _util.defaultBreakpoints;
  var theGutterWidth = gutterWidth || _util.defaultGutterWidth;

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

  if (viewport >= theBreakpoints[0] && md) {
    styles.width = 100 / 12 * md + '%';
  }

  if (viewport >= theBreakpoints[0] && lg) {
    styles.width = 100 / 12 * lg + '%';
  }

  return styles;
};