'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */

var Col = function (_React$Component) {
  _inherits(Col, _React$Component);

  function Col() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Col);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Col.__proto__ || Object.getPrototypeOf(Col)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.setViewport();
    }, _this.componentDidMount = function () {
      window.addEventListener('resize', _this.setViewport);
    }, _this.componentWillUnmount = function () {
      window.removeEventListener('resize', _this.setViewport);
    }, _this.setViewport = function () {
      _this.setState({ viewport: (0, _util.getViewPort)(_this.context) });
    }, _this.render = function () {
      var style = (0, _style2.default)({
        xs: _this.props.xs,
        sm: _this.props.sm,
        md: _this.props.md,
        lg: _this.props.lg,
        viewport: _this.state.viewport,
        breakpoints: _this.context.breakpoints,
        moreStyle: _this.props.style
      });
      return _react2.default.createElement(
        'div',
        { style: style },
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Col;
}(_react2.default.Component);

Col.propTypes = {
  /**
   * Content of the component
   */
  children: _react2.default.PropTypes.node,
  xs: _react2.default.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: _react2.default.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: _react2.default.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: _react2.default.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Optional styling
   */
  style: _react2.default.PropTypes.object
};
Col.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12
};
Col.contextTypes = {
  phone: _react2.default.PropTypes.bool,
  tablet: _react2.default.PropTypes.bool,
  breakpoints: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number)
};
exports.default = Col;