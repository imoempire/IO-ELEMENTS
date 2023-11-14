import {
  ColorValue,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";

interface Props {
  size?: number;
  width?: number | "full";
  orientation?: "Vertical" | "Horizontal";
  VeriticalHeight?: number | "full";
  color?: ColorValue;
}

const Divider = ({
  size = 10,
  width = 50,
  orientation = "Horizontal",
  color = "#000000",
  VeriticalHeight = 50,
}: Props) => {
  const { width: screenWidth } = useWindowDimensions();
  const defaultWidth = width === "full" ? screenWidth : width;
  const defaultVerticalHeight =
    VeriticalHeight === "full" ? "100%" : VeriticalHeight;

  // if the orientation is "Vertical"

  return (
    <View
      style={[
        styles.container,
        { width: orientation === "Horizontal" ? defaultWidth : size },
        // { height: orientation === "Horizontal" & size },
      ]}
    >
      <View
        style={[
          {
            backgroundColor: color,
          },
          {
            height: orientation === "Horizontal" ? size : defaultVerticalHeight,
          },
          {
            width: orientation === "Horizontal" ? "100%" : size,
          },
        ]}
      />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    position: "relative", // Added this line
    margin: 5,
    backgroundColor: "white",
  },
});
