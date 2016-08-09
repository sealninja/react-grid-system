"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hidden = exports.hidden = function hidden(_ref) {
  var viewport = _ref.viewport;
  var xs = _ref.xs;
  var sm = _ref.sm;
  var md = _ref.md;
  var lg = _ref.lg;

  // xs domain
  if (viewport < 768) return xs;

  // sm domain
  if (viewport < 992) return sm;

  // md domain
  if (viewport < 1200) return md;

  // lg domain
  return lg;
};