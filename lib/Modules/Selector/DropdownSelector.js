"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Animation = require("./Animation");
var _Entypo = _interopRequireDefault(require("react-native-vector-icons/Entypo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var listData = [];
var carddefaultStyle = {
  borderColor: "gray",
  borderWidth: 1,
  backgroundColor: "#FFFFFF"
};
var DropdownSelector = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var _ref$Listdata = _ref.Listdata,
    Listdata = _ref$Listdata === void 0 ? listData : _ref$Listdata,
    title = _ref.title,
    onSelect = _ref.onSelect,
    _ref$dropdownContaine = _ref.dropdownContainer,
    dropdownContainer = _ref$dropdownContaine === void 0 ? carddefaultStyle : _ref$dropdownContaine,
    _ref$iconStyle = _ref.iconStyle,
    iconStyle = _ref$iconStyle === void 0 ? {
      size: 30,
      color: "#000000"
    } : _ref$iconStyle,
    _ref$containerStyle = _ref.containerStyle,
    containerStyle = _ref$containerStyle === void 0 ? {
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "red",
      width: 200
    } : _ref$containerStyle,
    _ref$dropdownTextStyl = _ref.dropdownTextStyle,
    dropdownTextStyle = _ref$dropdownTextStyl === void 0 ? {
      color: "#000000",
      fontSize: 12
    } : _ref$dropdownTextStyl;
  var _ref2 = containerStyle || {},
    backgroundColor = _ref2.backgroundColor,
    width = _ref2.width,
    borderColor = _ref2.borderColor,
    borderWidth = _ref2.borderWidth;
  var buttonStyle = [backgroundColor && {
    backgroundColor: backgroundColor
  }, borderColor && {
    borderColor: borderColor
  }, borderWidth && {
    borderWidth: borderWidth
  }];
  var buttonContainer = [backgroundColor && {
    backgroundColor: backgroundColor
  }, width && {
    width: width
  }, borderColor && {
    borderColor: borderColor
  }];
  var dropCardStyles = [backgroundColor && {
    backgroundColor: backgroundColor
  }, borderWidth && {
    borderWidth: borderWidth
  }, borderColor && {
    borderColor: borderColor
  }];
  var calculateContainerHeight = function calculateContainerHeight(dataLength) {
    var baseHeight = 340;
    var heightPerItem = 20;
    var minHeight = 200;
    var calculatedHeight = baseHeight + dataLength * heightPerItem;
    return Math.max(calculatedHeight, minHeight);
  };
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var animatedRef = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  var ListDataLength = Listdata.length;
  var containerHeight = (0, _react.useMemo)(function () {
    return calculateContainerHeight(ListDataLength);
  }, [Listdata]);
  var ViewDataHeight = containerHeight / 1.5;
  var toggleDropdownAnimation = function toggleDropdownAnimation() {
    var config = {
      duration: 500,
      toValue: visible ? 0 : 1,
      useNativeDriver: true
    };
    _reactNative.Animated.timing(animatedRef, config).start();
    _reactNative.LayoutAnimation.configureNext(_Animation.ToggleAnimation);
    setVisible(function (prevVisible) {
      return !prevVisible;
    });
  };
  var renderSelected = (0, _react.useMemo)(function () {
    if (ListDataLength > 0) {
      try {
        var _Listdata$find;
        if (!selected) {
          return "No option selected";
        }
        var selectedOption = Listdata === null || Listdata === void 0 || (_Listdata$find = Listdata.find(function (g) {
          return g.value === selected;
        })) === null || _Listdata$find === void 0 ? void 0 : _Listdata$find.name;
        return selectedOption;
      } catch (error) {
        console.log(error);
      }
    }
    return "No Options";
  }, [ListDataLength, Listdata, selected]);
  var arrowTransform = animatedRef.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"]
  });
  var handleSelection = function handleSelection(value) {
    setSelected(value);
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(value);
    toggleDropdownAnimation();
  };
  var MemoizedTouchableOpacity = /*#__PURE__*/_react["default"].memo(_reactNative.TouchableOpacity);
  var MemoizedText = /*#__PURE__*/_react["default"].memo(_reactNative.Text);
  var renderDropdown = (0, _react.useMemo)(function () {
    if (visible) {
      return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
        key: "_",
        style: [styles.dropdown, {
          height: ViewDataHeight / 2
        }]
      }, /*#__PURE__*/_react["default"].createElement(_reactNative.ScrollView, {
        showsVerticalScrollIndicator: true
      }, Listdata.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(MemoizedTouchableOpacity, {
          onPress: function onPress() {
            return handleSelection(item === null || item === void 0 ? void 0 : item.value);
          },
          key: (item === null || item === void 0 ? void 0 : item.name) + (item === null || item === void 0 ? void 0 : item.value),
          style: {
            flexDirection: "row",
            height: 40,
            alignItems: "center"
          },
          testID: "dropdown-button"
        }, /*#__PURE__*/_react["default"].createElement(MemoizedText, {
          style: [dropdownTextStyle, {
            justifyContent: "center",
            alignItems: "center"
          }]
        }, item === null || item === void 0 ? void 0 : item.name));
      })));
    }
    return null;
  }, [visible, ViewDataHeight, Listdata, handleSelection]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, title ? /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [{
      marginVertical: 5,
      marginHorizontal: 2
    }]
  }, title) : /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [{
      marginVertical: 5,
      marginHorizontal: 2
    }]
  }, "Lable"), /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: toggleDropdownAnimation,
    style: [styles.button].concat(buttonStyle, [{
      borderRadius: !visible ? 14 : 0,
      borderTopStartRadius: 14,
      borderTopEndRadius: 14
    }])
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [styles.buttonText, dropdownTextStyle]
  }, renderSelected)), /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Animated.View, {
    style: {
      transform: [{
        rotateZ: arrowTransform
      }]
    }
  }, /*#__PURE__*/_react["default"].createElement(_Entypo["default"], {
    name: "chevron-small-down",
    size: iconStyle === null || iconStyle === void 0 ? void 0 : iconStyle.size,
    color: iconStyle === null || iconStyle === void 0 ? void 0 : iconStyle.color
  })))), visible && /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [styles.dropdownContainer].concat(dropCardStyles)
  }, ListDataLength === 0 ? /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.noDataContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "No data found")) : renderDropdown)));
});
var _default = DropdownSelector;
exports["default"] = _default;
var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 10
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 55,
    margin: 2,
    marginBottom: -3,
    marginHorizontal: 2,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "gray"
  },
  buttonText: {
    fontSize: 14,
    color: "black"
  },
  dropdownContainer: {
    flexDirection: "column",
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 2,
    paddingVertical: 10,
    borderBottomEndRadius: 14,
    borderBottomStartRadius: 14,
    // borderRadius: 10,
    borderWidth: 2,
    borderColor: "gray"
  },
  dropdown: {
    width: "100%",
    borderRadius: 10
  },
  noDataContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  }
});