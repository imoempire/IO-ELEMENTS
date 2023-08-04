// MyContext.js
import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

// @ts-ignore
const MyContext = React?.createContext();

const IoElementsProvider = ({ children }: { children: any }) => {
  const [sharedState, setSharedState] = useState<any>(/* initial state */);

  const DismissKeyboard = ({ children }: { children: any }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>{children}</View>
    </TouchableWithoutFeedback>
  );

  return (
    <MyContext.Provider value={{ sharedState, setSharedState }}>
      <DismissKeyboard>{children}</DismissKeyboard>
    </MyContext.Provider>
  );
};

export { IoElementsProvider };
