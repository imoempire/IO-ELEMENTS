import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../../utils/colors";

interface Props {
  size?: number | "lg" | "md" | "sm";
  raduis?: number | "full" | "lg" | "md" | "sm";
  borderSize?: number | "lg" | "md" | "sm";
  //   Text
  text?: string;
  textStyle?: StyleProp<{
    color?: string;
    fontSize?: number;
    fontWeight?:
      | "normal"
      | "bold"
      | "100"
      | "200"
      | "300"
      | "400"
      | "500"
      | "600"
      | "700"
      | "800"
      | "900";
  }>;
  //   Image
  source?: string;
}

const radiusDefaults: Record<NonNullable<Props["raduis"]>, number> = {
  full: 100,
  lg: 14,
  md: 12,
  sm: 8,
};

const Sizes: Record<NonNullable<Props["size"]>, number> = {
  lg: 60,
  md: 30,
  sm: 20,
};

const BorderSize: Record<NonNullable<Props["borderSize"]>, number> = {
  lg: 3,
  md: 2,
  sm: 1,
};

const Avatar = ({
  size = 80,
  source = "",
  raduis = "md",
  borderSize = "sm",
  textStyle,
  text= "Avatar",
}: Props) => {
  const { Components, Context } = Colors;

  const defaultRadius =
    raduis === "full"
      ? size
      : typeof raduis === "number"
      ? raduis
      : radiusDefaults[raduis] || radiusDefaults.md;

  const defaultSize =
    typeof size === "number"
      ? size
      : Sizes[size as "lg" | "md" | "sm"] || Sizes.md;

  const defaultBorderSize =
    typeof borderSize === "number"
      ? borderSize
      : BorderSize[borderSize as "lg" | "md" | "sm"] || BorderSize.md;

  return (
    <View
      style={[
        {
          width: defaultSize,
          height: defaultSize,
        },
        {
          borderRadius: typeof defaultRadius === "number" ? defaultRadius : 0,
          borderWidth: defaultBorderSize,
          borderColor: Components.defaultBorder,
        },
        {
          backgroundColor: Components.ZincBg,
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      {source && (
        <>
          {typeof source === "string" ? (
            <Image
              // @ts-ignore
              style={{
                width: "99%",
                height: "99%",
                borderRadius:
                  typeof defaultRadius === "number" ? defaultRadius : 0,
              }}
              source={{ uri: source }}
            />
          ) : (
            <Image
              // @ts-ignore
              style={{
                width: "99%",
                height: "99%",
                borderRadius:
                  typeof defaultRadius === "number" ? defaultRadius : 0,
              }}
              source={source}
            />
          )}
        </>
      )}
      {source === "" && (
        <Text
          style={[
            {
              fontSize: defaultSize * 0.25,
              color: Context.text,
              fontWeight: "200",
            },
            textStyle,
          ]}
        >
          {text}
        </Text>
      )}
    </View>
  );
};

export default Avatar;
