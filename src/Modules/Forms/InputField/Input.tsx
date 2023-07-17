import React, { ReactElement } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
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
  placeholderTextColor?: string;
  label?: string;
  labelTextStyle?: StyleProp<TextStyle>;
  Icon?: ReactElement;
  onChangeText?: (text: string) => void;
}

const Input = ({
  placeholder = "type here",
  placeholderTextColor = "blue",
  InputborderStyle = {
    borderWidth: 2,
    borderColor: "pink",
    borderRadius: 10,
  },
  TextInputStyle = {
    backgroundColor: "white",
    height: 50,
    width: "100%",
  },
  label = "Select a label",
  labelTextStyle = {
    fontSize: 30,
    color: "green",
  },
  Icon,
  onChangeText,
}: Props) => {
  const [inputValue, setInputValue] = React.useState("");
  const handleTextChange = (text: string) => {
    setInputValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[labelTextStyle, styles.label]}>{label}</Text>
      <View style={[styles.inputContainer, TextInputStyle, InputborderStyle]}>
        <TextInput
          placeholderTextColor={placeholderTextColor}
          style={styles.input}
          placeholder={placeholder}
          value={inputValue}
          onChangeText={handleTextChange}
        />
        {Icon && <View style={styles.iconContainer}>{Icon}</View>}
      </View>
    </View>
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
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  input: {
    fontSize: 20,
    width: "100%",
    height: "100%",
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default Input;
