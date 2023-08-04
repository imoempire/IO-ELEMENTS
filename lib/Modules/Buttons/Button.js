"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _renderNode = _interopRequireDefault(require("../../utils/renderNode"));
var _colors = require("../../utils/colors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var positionStyle = {
  top: "column",
  bottom: "column-reverse",
  left: "row",
  right: "row-reverse"
};
var PrimaryButton = function PrimaryButton(_ref) {
  var _ref$onPress = _ref.onPress,
    onPress = _ref$onPress === void 0 ? function () {} : _ref$onPress,
    buttonStyle = _ref.buttonStyle,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Title" : _ref$title,
    _ref$iconPosition = _ref.iconPosition,
    iconPosition = _ref$iconPosition === void 0 ? "left" : _ref$iconPosition,
    _ref$iconRight = _ref.iconRight,
    iconRight = _ref$iconRight === void 0 ? false : _ref$iconRight,
    _ref$buttonColor = _ref.buttonColor,
    buttonColor = _ref$buttonColor === void 0 ? _colors.lightColors.primary : _ref$buttonColor,
    _ref$btnType = _ref.btnType,
    btnType = _ref$btnType === void 0 ? "solid" : _ref$btnType,
    titleStyle = _ref.titleStyle,
    radius = _ref.radius,
    isLoading = _ref.isLoading,
    Icon = _ref.Icon,
    disabledStyle = _ref.disabledStyle,
    _ref$isDisabled = _ref.isDisabled,
    isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? title : _ref$children;
  var flexDirection = positionStyle[iconRight ? "right" : iconPosition] || "row";
  var handleOnPress = (0, _react.useCallback)(function (evt) {
    if (!isLoading && !isDisabled) {
      onPress(evt);
    }
  }, [isLoading, onPress, isDisabled]);
  return /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: handleOnPress,
    disabled: isDisabled
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [styles.container, buttonStyle, {
      borderRadius: radius,
      backgroundColor: btnType === "solid" ? buttonColor : "transparent",
      borderWidth: btnType === "outlined" ? _reactNative.StyleSheet.hairlineWidth : 0,
      borderColor: btnType === "outlined" ? buttonColor : "transparent"
    }, {
      flexDirection: flexDirection
    }, isDisabled && btnType === "solid" && {
      backgroundColor: "hsl(208, 8%, 90%)"
    }, isDisabled && btnType === "outlined" && {
      borderColor: "hsl(208, 8%, 90%)"
    }, isDisabled && disabledStyle]
  }, isLoading && /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.ActivityIndicator, {
    animating: true,
    color: btnType === "solid" ? "white" : buttonColor
  })), !isLoading && Icon && (0, _renderNode["default"])(Icon, Icon, {
    containerStyle: _reactNative.StyleSheet.flatten([styles.iconContainer])
  }), !isLoading && _react["default"].Children.toArray(children).map(function (child, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: index
    }, typeof child === "string" ? (0, _renderNode["default"])(_reactNative.Text, child, {
      style: _objectSpread({}, titleStyle)
    }) : child);
  })));
};
var styles = _reactNative.StyleSheet.create({
  container: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  iconContainer: {
    marginHorizontal: 5
  }
});
var _default = PrimaryButton;
exports["default"] = _default;