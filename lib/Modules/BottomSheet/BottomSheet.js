"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _AntDesign = _interopRequireDefault(require("react-native-vector-icons/AntDesign"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var height = _reactNative.Dimensions.get("window").height * 0.5;
var BottomSheet = function BottomSheet(_ref) {
  var _ref$enableBackdropDi = _ref.enableBackdropDismiss,
    enableBackdropDismiss = _ref$enableBackdropDi === void 0 ? true : _ref$enableBackdropDi,
    show = _ref.show,
    setShow = _ref.setShow,
    onDismiss = _ref.onDismiss,
    _ref$bottomSheetheigh = _ref.bottomSheetheight,
    bottomSheetheight = _ref$bottomSheetheigh === void 0 ? height : _ref$bottomSheetheigh,
    _ref$headerContainer = _ref.headerContainer,
    headerContainer = _ref$headerContainer === void 0 ? {
      height: 44,
      backgroundColor: "#ffff"
    } : _ref$headerContainer,
    _ref$contentContainer = _ref.contentContainer,
    contentContainer = _ref$contentContainer === void 0 ? {
      backgroundColor: "#ffffff",
      paddingHorizontal: 10,
      height: "100%",
      paddingBottom: 20
    } : _ref$contentContainer,
    children = _ref.children;
  var _useState = (0, _react.useState)(show),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var width = _reactNative.Dimensions.get("window").width;
  var contentStyles = _objectSpread(_objectSpread({}, contentContainer), {}, {
    paddingHorizontal: 10,
    height: "100%",
    paddingBottom: 20
  });
  var buttonRef = (0, _react.useRef)(new _reactNative.Animated.Value(-bottomSheetheight)).current;
  var onGesture = function onGesture(event) {
    if (event.nativeEvent.translationY > 0) {
      buttonRef.setValue(-event.nativeEvent.translationY);
    }
  };
  var onGestureEnd = function onGestureEnd(event) {
    if (event.nativeEvent.translationY > bottomSheetheight / 2) {
      onDismiss();
    } else {
      buttonRef.setValue(0);
    }
  };
  (0, _react.useEffect)(function () {
    if (show) {
      setOpen(show);
      _reactNative.Animated.timing(buttonRef, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start();
    } else {
      _reactNative.Animated.timing(buttonRef, {
        toValue: -bottomSheetheight,
        duration: 300,
        useNativeDriver: false
      }).start(function () {
        setOpen(false);
      });
    }
  }, [show]);
  if (!open) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement(_reactNativeGestureHandler.GestureHandlerRootView, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Pressable, {
    onPress: enableBackdropDismiss ? onDismiss : undefined,
    style: styles.backDrop
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.Animated.View, {
    style: [styles.container, {
      height: bottomSheetheight,
      bottom: buttonRef
    }]
  }, /*#__PURE__*/_react["default"].createElement(_reactNativeGestureHandler.PanGestureHandler, {
    onGestureEvent: onGesture,
    onEnded: onGestureEnd
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [headerContainer, {
      position: "relative"
    }]
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: {
      width: 60,
      height: 7,
      borderRadius: 10,
      position: "absolute",
      top: 8,
      left: (width - 60) / 2,
      zIndex: 10,
      backgroundColor: "#ccc"
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: {
      position: "absolute",
      right: 15,
      top: 10,
      zIndex: 10
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: onDismiss,
    activeOpacity: 1
  }, /*#__PURE__*/_react["default"].createElement(_AntDesign["default"], {
    name: "closecircle",
    size: 26,
    color: "black"
  }))))), /*#__PURE__*/_react["default"].createElement(_reactNative.ScrollView, {
    style: contentStyles
  }, children)));
};
var _default = BottomSheet;
exports["default"] = _default;
var styles = _reactNative.StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden"
  },
  backDrop: _objectSpread(_objectSpread({}, _reactNative.StyleSheet.absoluteFillObject), {}, {
    zIndex: 80,
    backgroundColor: "rgba(0,0,0, 0.12)"
  })
});