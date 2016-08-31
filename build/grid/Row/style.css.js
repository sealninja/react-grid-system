'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAfterStyle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _util = require('../../util');

exports.default = function (_ref) {
  var gutterWidth = _ref.gutterWidth;
  var moreStyle = _ref.moreStyle;

  var theGutterWidth = gutterWidth || _util.defaultGutterWidth;

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