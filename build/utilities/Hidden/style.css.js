'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hidden = undefined;

var _util = require('../../util');

var hidden = exports.hidden = function hidden(_ref) {
  var viewport = _ref.viewport;
  var xs = _ref.xs;
  var sm = _ref.sm;
  var md = _ref.md;
  var lg = _ref.lg;
  var breakpoints = _ref.breakpoints;

  var theBreakpoints = breakpoints && breakpoints.length >= 3 ? breakpoints : _util.defaultBreakpoints;

  // xs domain
  if (viewport < theBreakpoints[0]) return xs;

  // sm domain
  if (viewport < theBreakpoints[1]) return sm;

  // md domain
  if (viewport < theBreakpoints[2]) return md;

  // lg domain
  return lg;
};

exports.default = hidden;