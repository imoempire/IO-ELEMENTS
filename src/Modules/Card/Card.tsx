import {
    View,
    Platform,
    StyleSheet,
    StyleProp,
    ViewStyle,
  } from "react-native";
  import React from "react";
  
  interface Props {
    children?: any;
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
  }
  
  const Card = ({ children, containerStyle, wrapperStyle, ...rest }: Props) => {
    return (
      <View
        {...rest}
        style={StyleSheet.flatten([
          {
            backgroundColor: "white",
            borderWidth: 1,
            padding: 15,
            margin: 15,
          //   marginBottom: 10,
            borderColor: "grey",
            ...Platform.select({
              android: {
                elevation: 1,
              },
              default: {
                shadowColor: "rgba(0,0,0, .2)",
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 1,
              },
            }),
          },
          containerStyle && containerStyle,
        ])}
      >
        <View
          style={StyleSheet.flatten([
            styles.wrapper,
            wrapperStyle && wrapperStyle,
          ])}
        >
          {children}
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: "transparent",
    },
  });
  
  export default Card;
  