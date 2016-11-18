'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var visible = exports.visible = function visible(_ref) {
  var screenClass = _ref.screenClass,
      orientation = _ref.orientation,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      portrait = _ref.portrait,
      landscape = _ref.landscape;

  if (screenClass === 'lg') return lg;
  if (screenClass === 'md') return md;
  if (screenClass === 'sm') return sm;
  return xs;
};

exports.default = visible;