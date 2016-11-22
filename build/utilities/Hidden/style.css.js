'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hidden = exports.hidden = function hidden(_ref) {
  var screenClass = _ref.screenClass,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl;

  if (screenClass === 'xl') return xl;
  if (screenClass === 'lg') return lg;
  if (screenClass === 'md') return md;
  if (screenClass === 'sm') return sm;
  return xs;
};

exports.default = hidden;