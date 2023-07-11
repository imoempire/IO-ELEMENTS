import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

interface Props {
  show?: boolean;
  setShow?: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  onDismiss?: any;
  bottomSheetheight?: number;
  children?: any;
}

const height = Dimensions.get("window").height * 0.5;
const BottomSheet = ({
  show,
  setShow,
  onDismiss,
  bottomSheetheight = height,
  children,
}: Props) => {
  const [open, setOpen] = useState(show);
  const width = Dimensions.get("window").width;

  const buttonRef = useRef(new Animated.Value(-bottomSheetheight)).current;

  const onGesture = (event: any) => {
    if (event.nativeEvent.translationY > 0) {
      buttonRef.setValue(-event.nativeEvent.translationY);
    }
  };

  const onGestureEnd = (event: any) => {
    if (event.nativeEvent.translationY > bottomSheetheight / 2) {
      onDismiss();
    } else {
      buttonRef.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(buttonRef, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(buttonRef, {
        toValue: -bottomSheetheight,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);

  if (!open) {
    return null;
  }

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            height: bottomSheetheight,
            bottom: buttonRef,
          },
        ]}
      >
        <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
          <View style={[styles.header, { position: "relative" }]}>
            <View
              style={{
                width: 50,
                height: 5,
                position: "absolute",
                top: 8,
                zIndex: 10,
                left: (width - 40) / 2,
                backgroundColor: "red",
                borderRadius: 5,
              }}
            />
            <View
              style={{ position: "absolute", right: 10, top: 5, zIndex: 10 }}
            >
              <TouchableOpacity onPress={onDismiss} activeOpacity={1}>
                <AntDesign name="closecircle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </PanGestureHandler>
        <View
          style={{
            padding: 20,
            backgroundColor: "red",
            height: "100%",
          }}
        >
          {children}
        </View>
      </Animated.View>
    </>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: "hidden",
  },
  header: {
    height: 33,
    backgroundColor: "#ccc",
    justifyContent: "center",
    elevation: 2,
  },
});
