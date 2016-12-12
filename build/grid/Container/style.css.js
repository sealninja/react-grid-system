'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAfterStyle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = function (_ref) {
  var fluid = _ref.fluid,
      screenClass = _ref.screenClass,
      containerWidths = _ref.containerWidths,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle;

  var theContainerWidths = containerWidths && containerWidths.length ? containerWidths : _utils.defaultContainerWidths;
  var theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : _utils.defaultGutterWidth;

  var styles = _extends({
    boxSizing: 'border-box',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: theGutterWidth / 2 + 'px',
    paddingRight: theGutterWidth / 2 + 'px',
    width: 'auto'
  }, moreStyle);

  if (fluid) {
    return styles;
  }

  if (screenClass === 'sm' && theContainerWidths[0]) {
    styles.maxWidth = theContainerWidths[0] + 'px';
  }

  if (screenClass === 'md' && theContainerWidths[1]) {
    styles.maxWidth = theContainerWidths[1] + 'px';
  }

  if (screenClass === 'lg' && theContainerWidths[2]) {
    styles.maxWidth = theContainerWidths[2] + 'px';
  }

  if (screenClass === 'xl' && theContainerWidths[3]) {
    styles.maxWidth = theContainerWidths[3] + 'px';
  }

  return styles;
};

var getAfterStyle = exports.getAfterStyle = function getAfterStyle() {
  return {
    display: 'table',
    clear: 'both'
  };
};