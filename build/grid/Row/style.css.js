'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
  var moreStyle = _ref.moreStyle;
  return _extends({
    margin: '0 -15px',
    display: 'flex',
    flexWrap: 'wrap'
  }, moreStyle);
};

var getBeforeStyle = exports.getBeforeStyle = function getBeforeStyle() {
  return {
    display: 'table'
  };
};

var getAfterStyle = exports.getAfterStyle = function getAfterStyle() {
  return {
    display: 'table',
    clear: 'both'
  };
};