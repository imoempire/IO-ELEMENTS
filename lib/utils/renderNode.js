"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var renderNode = function renderNode(Component, content) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (content == null || content === false) {
    return null;
  }
  if ( /*#__PURE__*/_react["default"].isValidElement(content)) {
    return content;
  }
  if (typeof content === 'function') {
    return content();
  }
  // Just in case
  if (content === true) {
    return /*#__PURE__*/_react["default"].createElement(Component, defaultProps);
  }
  if (typeof content === 'string') {
    if (content.length === 0) {
      return null;
    }
    return /*#__PURE__*/_react["default"].createElement(Component, defaultProps, content);
  }
  if (typeof content === 'number') {
    return /*#__PURE__*/_react["default"].createElement(Component, defaultProps, content);
  }
  return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, defaultProps, content));
};
var _default = renderNode;
exports["default"] = _default;