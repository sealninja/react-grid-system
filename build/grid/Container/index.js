'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleCss = require('./style.css.js');

var _styleCss2 = _interopRequireDefault(_styleCss);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.setViewport();
    }, _this.componentDidMount = function () {
      window.addEventListener('resize', _this.setViewport);
    }, _this.componentWillUnmount = function () {
      window.removeEventListener('resize', _this.setViewport);
    }, _this.setViewport = function () {
      _this.setState({ viewport: (0, _util.getViewPort)(_this.context) });
    }, _this.render = function () {
      var style = (0, _styleCss2.default)({
        fluid: _this.props.fluid,
        viewport: _this.state.viewport,
        breakpoints: _this.context.breakpoints,
        containerWidths: _this.context.containerWidths
      });
      return _react2.default.createElement(
        'div',
        { style: _extends({}, style, _this.props.style) },
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Container;
}(_react2.default.Component);

Container.propTypes = {
  /**
   * Content of the component
   */
  children: _react2.default.PropTypes.node,
  /**
   * True makes the container full-width, false fixed-width
   */
  fluid: _react2.default.PropTypes.bool,
  /**
   * Optional styling
   */
  style: _react2.default.PropTypes.object
};
Container.contextTypes = {
  phone: _react2.default.PropTypes.bool,
  tablet: _react2.default.PropTypes.bool,
  breakpoints: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
  containerWidths: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number)
};
Container.defaultProps = {
  fluid: false
};
exports.default = Container;