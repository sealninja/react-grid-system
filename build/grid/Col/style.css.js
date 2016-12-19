'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

var getWidth = function getWidth(width) {
  var colWidth = (0, _utils.normalizeColumnWidth)(width);
  if (colWidth) return 100 / 12 * colWidth + '%';
  return undefined;
};

exports.default = function (_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? {} : _ref$offset,
      screenClass = _ref.screenClass,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle;

  var theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : _utils.defaultGutterWidth;

  var styles = _extends({
    boxSizing: 'border-box',
    position: 'relative',
    minHeight: '1px',
    paddingLeft: theGutterWidth / 2 + 'px',
    paddingRight: theGutterWidth / 2 + 'px',
    float: 'left'
  }, moreStyle);

  var width = null;
  var marginLeft = null;

  if (['xl'].indexOf(screenClass) >= 0) {
    width = width || getWidth(xl);
    marginLeft = marginLeft || getWidth(offset.xl);
  }

  if (['lg', 'xl'].indexOf(screenClass) >= 0) {
    width = width || getWidth(lg);
    marginLeft = marginLeft || getWidth(offset.lg);
  }

  if (['md', 'lg', 'xl'].indexOf(screenClass) >= 0) {
    width = width || getWidth(md);
    marginLeft = marginLeft || getWidth(offset.md);
  }

  if (['sm', 'md', 'lg', 'xl'].indexOf(screenClass) >= 0) {
    width = width || getWidth(sm);
    marginLeft = marginLeft || getWidth(offset.sm);
  }

  width = width || getWidth(xs) || '100%';
  marginLeft = marginLeft || getWidth(offset.xs) || '0%';

  styles.width = width;
  styles.marginLeft = marginLeft;

  return styles;
};