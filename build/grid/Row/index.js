'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prefer-stateless-function: "off" */

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Row.__proto__ || Object.getPrototypeOf(Row)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          style = _this$props.style,
          otherProps = _objectWithoutProperties(_this$props, ['children', 'style']);

      var theStyle = (0, _style2.default)({
        gutterWidth: _this.context.gutterWidth,
        moreStyle: style
      });
      return _react2.default.createElement(
        'div',
        _extends({ style: theStyle }, otherProps),
        children,
        _react2.default.createElement(
          'div',
          { style: (0, _style.getAfterStyle)() },
          _react2.default.createElement(
            'span',
            { style: (0, _style.getAfterContentStyle)() },
            '\xA0'
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Row;
}(_react2.default.Component);

Row.propTypes = {
  /**
   * Content of the element
   */
  children: _react2.default.PropTypes.node.isRequired,
  /**
   * Optional styling
   */
  style: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]))
};
Row.defaultProps = {
  style: {}
};
Row.contextTypes = {
  gutterWidth: _react2.default.PropTypes.number
};
exports.default = Row;