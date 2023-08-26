import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { useState } from "react";
import PhoneInput from "./PhoneInput";
import CountryModals from "./CountryModal";

interface Props {
  isError?: boolean;
  error?: string;
  onChange?: (code: string) => void;
  toggleMenu?: () => void;
  closeMenu?: () => void;
  selected?: string;
  showFlags?: boolean;
  label?: string;
  //   Styles
  height?: number;
  // width?: string | number;
  codeButtonStyles?: StyleProp<Omit<ViewStyle, "height">>;
  InputStyles?: StyleProp<Omit<ViewStyle, "height">>;
  labelContainerStyle?: StyleProp<ViewStyle>;
  InputContainer?: StyleProp<ViewStyle>;
  selectedColor?: string;
  color?: string;
  codeColor?: string
}

const Phone = ({
  InputStyles,
  height,
  labelContainerStyle,
  label,
  onChange,
  codeButtonStyles,
  color,
  InputContainer,
  codeColor
}: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("233");
  const [flag, setFlag] = useState<string>("");

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const onSelectedCodeChange = (code: string) => {
    setSelected(code);
    onChange?.(code);
  };

  const onSelectedFlagChange = (flag: string) => {
    setFlag(flag);
  };

  return (
    <>
      <PhoneInput
        label={label}
        labelContainerStyle={labelContainerStyle}
        InputStyles={InputStyles}
        codeButtonStyles={codeButtonStyles}
        color={color}
        height={height}
        // Inner Props
        toggleMenu={openModal}
        selected={selected}
        flag={flag}
        onChange={onChange}
        InputContainer={InputContainer}
        codeColor={codeColor}
      />
      <CountryModals
        visible={showModal}
        closeModal={closeModal}
        onSection={onSelectedCodeChange}
        onSelectFlag={onSelectedFlagChange}
      />
    </>
  );
};

export default Phone;
