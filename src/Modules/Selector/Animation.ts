import { LayoutAnimation } from "react-native";

export const ToggleAnimation = {
  duration: 100,
  update: {
    duration: 100,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: 100,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};
