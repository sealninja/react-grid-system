"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var main = exports.main = function main(_ref) {
  var moreStyle = _ref.moreStyle;
  return _extends({}, moreStyle);
};

var hidden = exports.hidden = function hidden(_ref2) {
  var viewport = _ref2.viewport;
  var xs = _ref2.xs;
  var sm = _ref2.sm;
  var md = _ref2.md;
  var lg = _ref2.lg;

  // xs domain
  if (viewport < 768) return xs;

  // sm domain
  if (viewport < 992) return sm;

  // md domain
  if (viewport < 1200) return md;

  // lg domain
  return lg;
};