'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderAny = function RenderAny(_ref) {
  var children = _ref.children;

  if (typeof children === 'function') {
    return children();
  }
  if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object' && Array.isArray(children)) {
    return _react2.default.createElement(
      'div',
      null,
      children
    );
  }
  return children;
};

RenderAny.propTypes = {
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.node, _react2.default.PropTypes.func])
};

exports.default = RenderAny;