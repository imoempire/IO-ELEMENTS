import {
  Modal,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  isVisible?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  CloseOnBackdropPress?: boolean;
}

const IoModal = ({
  children,
  isVisible = true,
  onClose = () => {},
  CloseOnBackdropPress = true,
}: Props) => {
  if (!isVisible) {
    return null;
  }

  const handleBackdropPress = () => {
    if (CloseOnBackdropPress) {
      onClose();
    }
    return null;
  };

  return (
    <Modal animationType="fade" transparent visible={isVisible}>
      <TouchableWithoutFeedback onPress={handleBackdropPress}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default IoModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
  },
});
