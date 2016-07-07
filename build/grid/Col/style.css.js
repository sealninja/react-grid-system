'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
  var xs = _ref.xs;
  var sm = _ref.sm;
  var md = _ref.md;
  var lg = _ref.lg;
  var viewport = _ref.viewport;
  var moreStyle = _ref.moreStyle;

  var styles = _extends({
    padding: '0 15px',
    minHeight: '1px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  }, moreStyle);

  var colWidth = xs;
  if (viewport < 768) {
    // xs domain
    styles.width = 100 / 12 * colWidth + '%';
    return styles;
  }

  colWidth = Math.min(colWidth, sm);
  if (viewport < 992) {
    // sm domain
    styles.width = 100 / 12 * colWidth + '%';
    return styles;
  }

  colWidth = Math.min(colWidth, md);
  if (viewport < 1200) {
    // md domain
    styles.width = 100 / 12 * colWidth + '%';
    return styles;
  }

  // lg domain
  colWidth = Math.min(colWidth, lg);
  styles.width = 100 / 12 * colWidth + '%';
  return styles;
};