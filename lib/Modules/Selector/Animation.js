"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleAnimation = void 0;
var _reactNative = require("react-native");
var ToggleAnimation = {
  duration: 100,
  update: {
    duration: 100,
    property: _reactNative.LayoutAnimation.Properties.opacity,
    type: _reactNative.LayoutAnimation.Types.easeInEaseOut
  },
  "delete": {
    duration: 100,
    property: _reactNative.LayoutAnimation.Properties.opacity,
    type: _reactNative.LayoutAnimation.Types.easeInEaseOut
  }
};
exports.ToggleAnimation = ToggleAnimation;