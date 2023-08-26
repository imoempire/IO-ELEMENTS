import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { lightColors } from "../../../utils/colors";

interface Props {
  isError?: boolean;
  error?: string;
  onChange?: (code: string) => void;
  toggleMenu?: () => void;
  closeMenu?: () => void;
  selected?: string;
  flag: string;
  showFlags?: boolean;
  label?: string;
  //   Styles
  height?: number;
  color?: string;
  codeButtonStyles?: StyleProp<Omit<ViewStyle, "height">>;
  InputStyles?: StyleProp<Omit<ViewStyle, "height">>;
  labelContainerStyle?: StyleProp<ViewStyle>;
  selectedColor?: string;
  InputContainer?: StyleProp<ViewStyle>;
  codeColor?: string;
}

const PhoneInput = ({
  error = "Please provide your phone number",
  isError = false,
  toggleMenu,
  selected,
  flag,
  showFlags = true,
  // Styles
  color,
  height = 45,
  codeButtonStyles,
  InputStyles,
  label = "",
  labelContainerStyle,
  selectedColor = lightColors.primary,
  InputContainer = {},
  codeColor,
}: Props) => {
  let bgColor = color || lightColors.primary;
  let codeTextColor = codeColor || lightColors.white;
  const defaultInputStyles = {
    borderColor: !isError ? lightColors.primary : lightColors.error,
    borderWidth: 2,
    borderRadius: 10,
  };

  const defaultCodeButtonStyle = {
    backgroundColor: bgColor,
    paddingHorizontal: 5,
    borderRadius: 10,
  };

  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <View style={[styles.container, InputContainer]}>
      {label !== "" && (
        <View style={labelContainerStyle}>
          <Text style={{ fontSize: 16, lineHeight: 24 }}>{label}</Text>
        </View>
      )}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={toggleMenu}
          style={[
            {
              height,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            },
            defaultCodeButtonStyle,
            codeButtonStyles,
          ]}
        >
          {showFlags && (
            <Text
              style={{
                fontSize: 20,
              }}
            >
              {flag}
            </Text>
          )}
          <Text
            style={{
              fontSize: 16,
              color: codeTextColor,
            }}
          >
            {selected}
          </Text>
          <MaterialIcons name="expand-more" size={24} color={codeTextColor} />
        </TouchableOpacity>
        <TextInput
          style={[
            {
              flex: 1,
              height,
              marginLeft: 5,
              paddingHorizontal: 10,
              width: "100%",
            },
            defaultInputStyles,
            InputStyles,
          ]}
          keyboardType="number-pad"
          selectionColor={selectedColor}
        />
      </View>
      {isError && (
        <Text
          style={{
            fontSize: 11,
            color: lightColors.error,
            lineHeight: 15,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
