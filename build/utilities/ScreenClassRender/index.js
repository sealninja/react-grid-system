'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _utils = require('../../utils');

var _RenderAny = require('../../support/RenderAny');

var _RenderAny2 = _interopRequireDefault(_RenderAny);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */

var ScreenClassRender = function (_React$Component) {
  _inherits(ScreenClassRender, _React$Component);

  function ScreenClassRender() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScreenClassRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScreenClassRender.__proto__ || Object.getPrototypeOf(ScreenClassRender)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.setScreenClass();
    }, _this.componentDidMount = function () {
      _this.eventListener = (0, _lodash.throttle)(_this.setScreenClass, 100);
      window.addEventListener('resize', _this.eventListener);
    }, _this.componentWillUnmount = function () {
      window.removeEventListener('resize', _this.eventListener);
    }, _this.setScreenClass = function () {
      _this.setState({ screenClass: (0, _utils.getScreenClass)(_this.context) });
    }, _this.getStyle = function () {
      return _this.props.style(_this.state.screenClass);
    }, _this.render = function () {
      if (_this.props.render) {
        return _react2.default.createElement(
          _RenderAny2.default,
          null,
          _this.props.render(_this.state.screenClass)
        );
      }
      if (_this.props.children && _this.props.style) {
        var clonedElement = _react2.default.cloneElement(_this.props.children, { style: _this.getStyle() });
        return clonedElement;
      }
      return false;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ScreenClassRender;
}(_react2.default.Component);

ScreenClassRender.propTypes = {
  /**
   * Content of the component
   */
  children: _react2.default.PropTypes.element,
  /**
   * A function returning the style for the children.
   * This function gets the screen class as a parameter.
   */
  style: _react2.default.PropTypes.func,
  render: _react2.default.PropTypes.func
};
ScreenClassRender.contextTypes = {
  phone: _react2.default.PropTypes.bool,
  tablet: _react2.default.PropTypes.bool,
  breakpoints: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number)
};
exports.default = ScreenClassRender;