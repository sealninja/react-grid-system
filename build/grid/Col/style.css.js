'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

var getWidth = function getWidth(width) {
  var defaultWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

  if (typeof width !== 'number') return undefined;
  var colWidth = (0, _utils.normalizeColumnWidth)(width);
  if (colWidth === defaultWidth) return undefined;
  return 100 / 12 * colWidth + '%';
};

exports.default = function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? {} : _ref$width,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? {} : _ref$offset,
      screenClass = _ref.screenClass,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle;

  var theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : _utils.defaultGutterWidth;

  var styles = _extends({}, moreStyle, {
    boxSizing: 'border-box',
    minHeight: '1px',
    paddingLeft: theGutterWidth / 2 + 'px',
    paddingRight: theGutterWidth / 2 + 'px',
    float: 'left'
  });

  styles.width = '100%';
  styles.marginLeft = '0%';

  _utils.screenClasses.forEach(function (size, index) {
    if (_utils.screenClasses.indexOf(screenClass) >= index) {
      styles.width = getWidth(width[size]) || styles.width;
      styles.marginLeft = getWidth(offset[size]) || styles.marginLeft;
    }
  });

  return styles;
};