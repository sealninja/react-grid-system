'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleCss = require('./style.css.js');

var _styleCss2 = _interopRequireDefault(_styleCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var children = _ref.children;
  var style = _ref.style;
  return _react2.default.createElement(
    'div',
    { style: (0, _styleCss2.default)({ moreStyle: style }) },
    _react2.default.createElement(
      'span',
      { style: (0, _styleCss.getBeforeStyle)() },
      ' '
    ),
    children,
    _react2.default.createElement(
      'span',
      { style: (0, _styleCss.getAfterStyle)() },
      ' '
    )
  );
};

Row.propTypes = {
  /**
   * Content of the element
   */
  children: _react2.default.PropTypes.node,
  /**
   * Optional styling
   */
  style: _react2.default.PropTypes.object
};

exports.default = Row;