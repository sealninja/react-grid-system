'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _style = require('./style.css');

var style = _interopRequireWildcard(_style);

var _utils = require('../../utils');

var _RenderAny = require('../../support/RenderAny');

var _RenderAny2 = _interopRequireDefault(_RenderAny);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */

var Visible = function (_React$Component) {
  _inherits(Visible, _React$Component);

  function Visible() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Visible);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Visible.__proto__ || Object.getPrototypeOf(Visible)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.setScreenClass();
    }, _this.componentDidMount = function () {
      _this.eventListener = (0, _lodash.throttle)(_this.setScreenClass, 100);
      window.addEventListener('resize', _this.eventListener);
    }, _this.componentWillUnmount = function () {
      window.removeEventListener('resize', _this.eventListener);
    }, _this.setScreenClass = function () {
      _this.setState({ screenClass: (0, _utils.getScreenClass)(_this.context) });
    }, _this.render = function () {
      if (!style.visible({
        screenClass: _this.state.screenClass,
        xs: _this.props.xs,
        sm: _this.props.sm,
        md: _this.props.md,
        lg: _this.props.lg,
        xl: _this.props.xl
      })) return false;
      return _react2.default.createElement(
        _RenderAny2.default,
        null,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Visible;
}(_react2.default.Component);

Visible.propTypes = {
  /**
   * Content of the component
   */
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.node, _react2.default.PropTypes.func]),
  /**
   * Show on extra small devices
   */
  xs: _react2.default.PropTypes.bool,
  /**
   * Show on small devices
   */
  sm: _react2.default.PropTypes.bool,
  /**
   * Show on medium devices
   */
  md: _react2.default.PropTypes.bool,
  /**
   * Show on large devices
   */
  lg: _react2.default.PropTypes.bool,
  /**
   * Show on xl devices
   */
  xl: _react2.default.PropTypes.bool
};
Visible.contextTypes = {
  phone: _react2.default.PropTypes.bool,
  tablet: _react2.default.PropTypes.bool,
  breakpoints: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number)
};
Visible.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
};
exports.default = Visible;