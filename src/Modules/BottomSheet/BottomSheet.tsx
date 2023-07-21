import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

interface Props {
  // STATES
  show?: boolean;
  enableBackdropDismiss?: boolean;
  // ACTIONS
  setShow?: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  onDismiss?: any;
  // STYLES
  bottomSheetheight?: number;
  headerContainer?: StyleProp<ViewStyle>;
  contentContainer?: StyleProp<ViewStyle>;
  // CHILDEREN
  children?: any;
}

const height = Dimensions.get("window").height * 0.5;
const BottomSheet = ({
  enableBackdropDismiss = true,
  show,
  setShow,
  onDismiss,
  bottomSheetheight = height,
  headerContainer = {
    height: 44,
    backgroundColor: "#ffff",
  },
  contentContainer = {
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    height: "100%",
    paddingBottom: 20,
  },
  children,
}: Props) => {
  const [open, setOpen] = useState(show);
  const width = Dimensions.get("window").width;

  let contentStyles = {
    // @ts-ignore
    ...contentContainer,
    paddingHorizontal: 10,
    height: "100%",
    paddingBottom: 20,
  };
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
    <GestureHandlerRootView>
      <Pressable
        onPress={enableBackdropDismiss ? onDismiss : undefined}
        style={styles.backDrop}
      />
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
          <View style={[headerContainer, { position: "relative" }]}>
            <View
              style={{
                width: 60,
                height: 7,
                borderRadius: 10,
                position: "absolute",
                top: 8,
                left: (width - 60) / 2,
                zIndex: 10,
                backgroundColor: "#ccc",
              }}
            />
            <View
              style={{ position: "absolute", right: 15, top: 10, zIndex: 10 }}
            >
              <TouchableOpacity onPress={onDismiss} activeOpacity={1}>
                <AntDesign name="closecircle" size={26} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </PanGestureHandler>
        <ScrollView style={contentStyles}>{children}</ScrollView>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
    backgroundColor: "rgba(0,0,0, 0.12)",
  },
});
