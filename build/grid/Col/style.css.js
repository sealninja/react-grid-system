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
      screenClass = _ref.screenClass,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle;

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

  if (sm && ['sm', 'md', 'lg', 'xl'].indexOf(screenClass) >= 0) {
    styles.width = 100 / 12 * sm + '%';
  }

  if (md && ['md', 'lg', 'xl'].indexOf(screenClass) >= 0) {
    styles.width = 100 / 12 * md + '%';
  }

  if (lg && ['lg', 'xl'].indexOf(screenClass) >= 0) {
    styles.width = 100 / 12 * lg + '%';
  }

  if (xl && ['xl'].indexOf(screenClass) >= 0) {
    styles.width = 100 / 12 * xl + '%';
  }

  return styles;
};