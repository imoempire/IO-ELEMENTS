import React, { useRef, useState, useEffect, useMemo, memo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  FlatList,
  ScrollView,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import { ToggleAnimation } from "./Animation";
import Entypo from "react-native-vector-icons/Entypo";

interface Props {
  Listdata?: { name: string; value: string }[];
  title?: string;
  // Dropdown
  dropdownContainer?: StyleProp<ViewStyle>;
  dropdownTextStyle?: StyleProp<TextStyle>;
  // Container
  containerStyle?: StyleProp<ViewStyle>;
  // Onchange
  onSelect?: ((value: string) => void) | undefined;
  // Icon
  iconStyle?: {
    size?: number;
    color?: string;
  };
}

const listData: { name: string; value: string; }[] | undefined = [];

const carddefaultStyle = {
  borderColor: "gray",
  borderWidth: 1,
  backgroundColor: "#FFFFFF",
};

const DropdownSelector: React.FC<Props> = memo(
  ({
    Listdata = listData,
    title,
    onSelect,
    dropdownContainer = carddefaultStyle,
    iconStyle = {
      size: 30,
      color: "#000000",
    },
    containerStyle = {
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "red",
      width: 200,
    },
    dropdownTextStyle = {
      color: "#000000",
      fontSize: 12,
    },
  }) => {
    const { backgroundColor, width, borderColor, borderWidth } =
      containerStyle || {};

    const buttonStyle = [
      backgroundColor && { backgroundColor },
      borderColor && { borderColor },
      borderWidth && { borderWidth },
    ];

    const buttonContainer = [
      backgroundColor && { backgroundColor },
      width && { width },
      borderColor && { borderColor },
    ];

    const dropCardStyles = [
      backgroundColor && { backgroundColor },
      borderWidth && { borderWidth },
      borderColor && { borderColor },
    ];

    const calculateContainerHeight = (dataLength: number): number => {
      const baseHeight = 340;
      const heightPerItem = 20;
      const minHeight = 200;

      const calculatedHeight = baseHeight + dataLength * heightPerItem;
      return Math.max(calculatedHeight, minHeight);
    };

    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<string | number>("");
    const animatedRef = useRef(new Animated.Value(0)).current;

    const ListDataLength = Listdata.length;
    const containerHeight = useMemo(
      () => calculateContainerHeight(ListDataLength),
      [Listdata]
    );
    const ViewDataHeight = containerHeight / 1.5;

    const toggleDropdownAnimation = () => {
      const config = {
        duration: 500,
        toValue: visible ? 0 : 1,
        useNativeDriver: true,
      };
      Animated.timing(animatedRef, config).start();
      LayoutAnimation.configureNext(ToggleAnimation);
      setVisible((prevVisible) => !prevVisible);
    };

    const renderSelected = useMemo(() => {
      if (ListDataLength > 0) {
        try {
          if (!selected) {
            return "No option selected";
          }
          const selectedOption = Listdata?.find(
            (g) => g.value === selected
          )?.name;
          return selectedOption;
        } catch (error) {
          console.log(error);
        }
      }
      return "No Options";
    }, [ListDataLength, Listdata, selected]);

    const arrowTransform = animatedRef.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "180deg"],
    });

    const handleSelection = (value: any) => {
      setSelected(value);
      onSelect?.(value);
      toggleDropdownAnimation();
    };

    const MemoizedTouchableOpacity = React.memo(TouchableOpacity);
    const MemoizedText = React.memo(Text);

    const renderDropdown = useMemo(() => {
      if (visible) {
        return (
          <View
            key="_"
            style={[styles.dropdown, { height: ViewDataHeight / 2 }]}
          >
            <ScrollView showsVerticalScrollIndicator>
              {Listdata.map((item) => (
                <MemoizedTouchableOpacity
                  onPress={() => handleSelection(item?.value)}
                  key={item?.name + item?.value}
                  style={{
                    flexDirection: "row",
                    height: 40,
                    alignItems: "center",
                  }}
                  testID="dropdown-button"
                >
                  <MemoizedText
                    style={[
                      dropdownTextStyle,
                      {
                        justifyContent: "center",
                        alignItems: "center",
                      },
                    ]}
                  >
                    {item?.name}
                  </MemoizedText>
                </MemoizedTouchableOpacity>
              ))}
            </ScrollView>
          </View>
        );
      }
      return null;
    }, [visible, ViewDataHeight, Listdata, handleSelection]);

    return (
      <>
        {title ? (
          <Text style={[{ marginVertical: 5, marginHorizontal: 2 }]}>
            {title}
          </Text>
        ) : (
          <Text style={[{ marginVertical: 5, marginHorizontal: 2 }]}>
            {"Lable"}
          </Text>
        )}
        <View>
          <TouchableOpacity
            onPress={toggleDropdownAnimation}
            style={[
              styles.button,
              ...buttonStyle,
              {
                borderRadius: !visible ? 14 : 0,
                borderTopStartRadius: 14,
                borderTopEndRadius: 14,
              },
            ]}
          >
            <View>
              <Text style={[styles.buttonText, dropdownTextStyle]}>
                {renderSelected}
              </Text>
            </View>
            <View>
              <Animated.View
                style={{ transform: [{ rotateZ: arrowTransform }] }}
              >
                <Entypo
                  name="chevron-small-down"
                  size={iconStyle?.size}
                  color={iconStyle?.color}
                />
              </Animated.View>
            </View>
          </TouchableOpacity>
          {visible && (
            <View style={[styles.dropdownContainer, ...dropCardStyles]}>
              {ListDataLength === 0 ? (
                <View style={styles.noDataContainer}>
                  <Text>No data found</Text>
                </View>
              ) : (
                renderDropdown
              )}
            </View>
          )}
        </View>
      </>
    );
  }
);

export default DropdownSelector;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 55,
    margin: 2,
    marginBottom: -3,
    marginHorizontal: 2,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "gray",
  },
  buttonText: {
    fontSize: 14,
    color: "black",
  },
  dropdownContainer: {
    flexDirection: "column",
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 2,
    paddingVertical: 10,
    borderBottomEndRadius: 14,
    borderBottomStartRadius: 14,
    // borderRadius: 10,
    borderWidth: 2,
    borderColor: "gray",
  },
  dropdown: {
    width: "100%",
    borderRadius: 10,
  },
  noDataContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
