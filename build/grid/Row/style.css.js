'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAfterContentStyle = exports.getAfterStyle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = function (_ref) {
  var gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle;

  var theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : _utils.defaultGutterWidth;

  return _extends({
    marginLeft: '-' + theGutterWidth / 2 + 'px',
    marginRight: '-' + theGutterWidth / 2 + 'px'
  }, moreStyle);
};

var getAfterStyle = exports.getAfterStyle = function getAfterStyle() {
  return {
    display: 'table',
    clear: 'both'
  };
};

var getAfterContentStyle = exports.getAfterContentStyle = function getAfterContentStyle() {
  return {
    display: 'none'
  };
};