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
  var moreStyle = _ref.moreStyle;

  var theBreakpoints = breakpoints && breakpoints.length >= 3 ? breakpoints : _util.defaultBreakpoints;

  var styles = _extends({
    padding: '0 15px',
    minHeight: '1px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  }, moreStyle);

  var colWidth = xs;
  if (viewport < theBreakpoints[0]) {
    // xs domain, smaller than 768px by default
    styles.width = 100 / 12 * colWidth + '%';
    return styles;
  }

  colWidth = Math.min(colWidth, sm);
  if (viewport < theBreakpoints[1]) {
    // sm domain, smaller than 992px by default
    styles.width = 100 / 12 * colWidth + '%';
    return styles;
  }

  colWidth = Math.min(colWidth, md);
  if (viewport < theBreakpoints[2]) {
    // md domain, smaller than 1200px by default
    styles.width = 100 / 12 * colWidth + '%';
    return styles;
  }

  // lg domain
  colWidth = Math.min(colWidth, lg);
  styles.width = 100 / 12 * colWidth + '%';
  return styles;
};