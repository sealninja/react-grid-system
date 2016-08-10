'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleCss = require('./style.css.js');

var style = _interopRequireWildcard(_styleCss);

var _util = require('../../util');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hidden = function (_React$Component) {
  _inherits(Hidden, _React$Component);

  function Hidden() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Hidden);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Hidden)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.setViewport();
    }, _this.componentDidMount = function () {
      window.addEventListener('resize', _this.setViewport);
    }, _this.componentWillUnmount = function () {
      window.removeEventListener('resize', _this.setViewport);
    }, _this.setViewport = function () {
      _this.setState({ viewport: (0, _util.getViewPort)(_this.context) });
    }, _this.render = function () {
      if (style.hidden({
        viewport: _this.state.viewport,
        xs: _this.props.xs,
        sm: _this.props.sm,
        md: _this.props.md,
        lg: _this.props.lg
      })) return false;
      return _this.props.children;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Hidden;
}(_react2.default.Component);

Hidden.propTypes = {
  /**
   * Content of the component
   */
  children: _react2.default.PropTypes.element,
  /**
   * Hide on extra small devices
   */
  xs: _react2.default.PropTypes.bool,
  /**
   * Hide on small devices
   */
  sm: _react2.default.PropTypes.bool,
  /**
   * Hide on medium devices
   */
  md: _react2.default.PropTypes.bool,
  /**
   * Hide on large devices
   */
  lg: _react2.default.PropTypes.bool
};
Hidden.contextTypes = {
  phone: _react2.default.PropTypes.bool,
  tablet: _react2.default.PropTypes.bool
};
Hidden.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false
};
exports.default = Hidden;