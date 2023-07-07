import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextStyle,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  StyleProp,
  TextProps,
  ViewStyle,
  Platform,
  TouchableNativeFeedback,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState, ReactElement, useCallback } from "react";
import renderNode from "../../utils/renderNode";
import { lightColors } from "../../utils/colors";

interface Props extends TouchableOpacityProps, TouchableNativeFeedbackProps {
  // Title
  title?: string | React.ReactElement<{}>;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;

  // Style properties
  buttonColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  btnType?: "solid" | "outlined";
  ContainerStyle?: StyleProp<ViewStyle>;
  radius?: number;

  // DISABLE STYLES
  disabledStyle?: StyleProp<ViewStyle>;
  isDisabled?: boolean;

  // Loader properties
  isLoading?: boolean;

  // Icon properties
  iconRight?: boolean;
  Icon?: ReactElement;
  iconPosition?: "left" | "right" | "top" | "bottom";
}

const positionStyle = {
  top: "column",
  bottom: "column-reverse",
  left: "row",
  right: "row-reverse",
};

const PrimaryButton = ({
  onPress = () => {},
  buttonStyle,
  title = "Title",
  iconPosition = "left",
  iconRight = false,
  buttonColor = lightColors.primary,
  btnType = "solid",
  titleStyle,
  radius,
  isLoading,
  Icon,
  disabledStyle,
  isDisabled = false,
  children = title,
}: Props) => {
  let flexDirection =
    positionStyle[iconRight ? "right" : iconPosition] || "row";

  const handleOnPress = useCallback(
    (evt: any) => {
      if (!isLoading && !isDisabled) {
        onPress(evt);
      }
    },
    [isLoading, onPress, isDisabled]
  );

  return (
    <TouchableOpacity onPress={handleOnPress} disabled={isDisabled}>
      <View
        style={[
          styles.container,
          buttonStyle,
          {
            borderRadius: radius,
            backgroundColor: btnType === "solid" ? buttonColor : "transparent",
            borderWidth: btnType === "outlined" ? StyleSheet.hairlineWidth : 0,
            borderColor: btnType === "outlined" ? buttonColor : "transparent",
          },
          { flexDirection },
          isDisabled &&
            btnType === "solid" && {
              backgroundColor: "hsl(208, 8%, 90%)",
            },
          isDisabled &&
            btnType === "outlined" && {
              borderColor: "hsl(208, 8%, 90%)",
            },
          isDisabled && disabledStyle,
        ]}
      >
        {isLoading && (
          <View>
            <ActivityIndicator
              animating={true}
              color={btnType === "solid" ? "white" : buttonColor}
            />
          </View>
        )}
        {!isLoading &&
          Icon &&
          renderNode(Icon, Icon, {
            containerStyle: StyleSheet.flatten([styles.iconContainer]),
          })}

        {!isLoading &&
          React.Children.toArray(children).map((child, index) => (
            <React.Fragment key={index}>
              {typeof child === "string"
                ? renderNode(Text, child, {
                    style: {
                      ...titleStyle,
                    },
                  })
                : child}
            </React.Fragment>
          ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default PrimaryButton;
