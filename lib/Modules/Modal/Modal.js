"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var IoModal = function IoModal(_ref) {
  var children = _ref.children,
    _ref$isVisible = _ref.isVisible,
    isVisible = _ref$isVisible === void 0 ? true : _ref$isVisible,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
    _ref$CloseOnBackdropP = _ref.CloseOnBackdropPress,
    CloseOnBackdropPress = _ref$CloseOnBackdropP === void 0 ? true : _ref$CloseOnBackdropP;
  if (!isVisible) {
    return null;
  }
  var handleBackdropPress = function handleBackdropPress() {
    if (CloseOnBackdropPress) {
      onClose();
    }
    return null;
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.Modal, {
    animationType: "fade",
    transparent: true,
    visible: isVisible
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: handleBackdropPress
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableWithoutFeedback, null, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalContent
  }, children)))));
};
var _default = IoModal;
exports["default"] = _default;
var styles = _reactNative.StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8
  }
});