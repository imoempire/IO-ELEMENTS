// MyContext.js
import React, { useState } from "react";
import {
  Keyboard,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

// @ts-ignore
const MyContext = React?.createContext();

const DismissKeyboard = ({ children }: { children: any }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={{ flex: 1 }}>{children}</View>
  </TouchableWithoutFeedback>
);

const IoElementsProvider = ({
  children,
  style,
}: {
  children?: any;
  style?: StyleProp<ViewStyle>;
}) => {
  const [sharedState, setSharedState] = useState<any>(/* initial state */);

  return (
    <MyContext.Provider value={{ sharedState, setSharedState }}>
      <DismissKeyboard>
        <View style={style}>{children}</View>
      </DismissKeyboard>
    </MyContext.Provider>
  );
};

export { IoElementsProvider };
