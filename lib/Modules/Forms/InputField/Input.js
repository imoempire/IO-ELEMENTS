"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DismissKeyboard = function DismissKeyboard(children) {
  /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: function onPress() {
      return _reactNative.Keyboard.dismiss();
    }
  }, children);
};
var Input = function Input(_ref) {
  var _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "type here" : _ref$placeholder,
    _ref$placeholderTextC = _ref.placeholderTextColor,
    placeholderTextColor = _ref$placeholderTextC === void 0 ? "#A9A9AC" : _ref$placeholderTextC,
    _ref$InputborderStyle = _ref.InputborderStyle,
    InputborderStyle = _ref$InputborderStyle === void 0 ? {
      borderWidth: 1,
      borderColor: "#000000",
      borderRadius: 10
    } : _ref$InputborderStyle,
    _ref$TextInputStyle = _ref.TextInputStyle,
    TextInputStyle = _ref$TextInputStyle === void 0 ? {
      backgroundColor: "white",
      height: 50,
      width: "100%"
    } : _ref$TextInputStyle,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Select a label" : _ref$label,
    _ref$labelTextStyle = _ref.labelTextStyle,
    labelTextStyle = _ref$labelTextStyle === void 0 ? {
      fontSize: 20,
      color: "#000000"
    } : _ref$labelTextStyle,
    Icon = _ref.Icon,
    onChangeText = _ref.onChangeText,
    _ref$keyboardType = _ref.keyboardType,
    keyboardType = _ref$keyboardType === void 0 ? "default" : _ref$keyboardType,
    _ref$secureTextEntry = _ref.secureTextEntry,
    secureTextEntry = _ref$secureTextEntry === void 0 ? false : _ref$secureTextEntry;
  var _React$useState = _react["default"].useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var handleTextChange = function handleTextChange(text) {
    setInputValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };
  var dismissKeyboard = function dismissKeyboard() {
    _reactNative.Keyboard.dismiss();
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: dismissKeyboard
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [labelTextStyle, styles.label]
  }, label), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [styles.inputContainer, TextInputStyle, InputborderStyle]
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, {
    placeholderTextColor: placeholderTextColor,
    style: styles.input,
    placeholder: placeholder,
    value: inputValue,
    onChangeText: handleTextChange,
    keyboardType: keyboardType,
    secureTextEntry: secureTextEntry
  }), Icon && /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.iconContainer
  }, Icon))));
};
var styles = _reactNative.StyleSheet.create({
  container: {
    marginBottom: 10
  },
  label: {
    marginVertical: 5
  },
  inputContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  input: {
    fontSize: 20,
    width: "100%",
    height: "100%"
  },
  iconContainer: {
    marginHorizontal: 5
  }
});
var _default = Input;
exports["default"] = _default;