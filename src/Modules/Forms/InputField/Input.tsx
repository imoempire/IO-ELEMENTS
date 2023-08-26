import React, { Children, ReactElement, useEffect, useMemo } from "react";
import {
  Keyboard,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

interface Props {
  placeholder?: string;
  InputborderStyle?: {
    borderWidth: number;
    borderColor: string;
    borderRadius: number;
  };
  TextInputStyle?: StyleProp<
    Omit<ViewStyle, "borderWidth" | "borderColor" | "borderRadius">
  >;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password";
  placeholderTextColor?: string;
  label?: string;
  labelTextStyle?: StyleProp<TextStyle>;
  Icon?: ReactElement;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  InputContainer?: StyleProp<ViewStyle>;
  TextInputFontSize?: undefined | any;
}

const DismissKeyboard = (children: any) => {
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>;
};

const Input = ({
  placeholder = "type here",
  placeholderTextColor = "#A9A9AC",
  InputborderStyle = {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  TextInputStyle = {
    backgroundColor: "white",
    height: 50,
    width: "100%",
  },
  label = "",
  labelTextStyle = {
    fontSize: 20,
    color: "#000000",
  },
  Icon,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  InputContainer = {},
  TextInputFontSize = "10",
}: Props) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleTextChange = (text: string) => {
    setInputValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={InputContainer}>
        {label !== "" && (
          <Text style={[labelTextStyle, styles.label]}>{label}</Text>
        )}
        <View style={[styles.inputContainer, TextInputStyle, InputborderStyle]}>
          <TextInput
            placeholderTextColor={placeholderTextColor}
            style={[styles.input, { fontSize: TextInputFontSize }]}
            placeholder={placeholder}
            value={inputValue}
            onChangeText={handleTextChange}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
          />
          {Icon && <View style={styles.iconContainer}>{Icon}</View>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    marginVertical: 5,
  },
  inputContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  input: {
    width: "100%",
    height: "100%",
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default Input;
