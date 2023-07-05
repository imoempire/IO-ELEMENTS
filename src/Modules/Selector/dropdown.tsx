import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  FlatList,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { ToggleAnimation } from "./Animation";
// import { Entypo } from "@expo/vector-icons";
import Entypo from 'react-native-vector-icons/Entypo';

const calculateContainerHeight = (dataLength: number): number => {
  // Define your logic to calculate the desired height based on data length
  // For example:
  const baseHeight = 200;
  const heightPerItem = 30;
  const minHeight = 200;

  const calculatedHeight = baseHeight + dataLength * heightPerItem;
  return Math.max(calculatedHeight, minHeight);
};

interface Props {
  Listdata: { name: string; value: string }[];
  select: string;
  title: string;
  onChange: React.Dispatch<React.SetStateAction<any>> | ((value: any) => void);
}

const DropDown = ({ Listdata, select, title, onChange }: Props) => {
  // STATES
  const [visible, setVisible] = useState(false);
  const animatedRef = useRef(new Animated.Value(0)).current;
  const [ListDataLength, SetListDataLength] = useState<number>(0);
  const [ViewDataHeight, SetViewDataHeight] = useState<number>(0);

  useEffect(() => {
    let heightView = calculateContainerHeight(Listdata?.length);
    SetListDataLength(Listdata?.length);
    SetViewDataHeight(heightView);
  }, [Listdata]);

  let List = [...(Listdata ?? {})];

  //   FUNCTIONS
  const toggleDropdownAnimation = () => {
    const config = {
      duration: 500,
      toValue: visible ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animatedRef, config).start();
    LayoutAnimation.configureNext(ToggleAnimation);
    setVisible(!visible);
  };

  const renderSelected = (selected: string) => {
    if (ListDataLength > 0) {
      try {
        if (!selected) {
          return null;
        }
        let selectedOption = List?.find((g) => g?.value === select)?.["name"];
        return selectedOption;
      } catch (error) {
        return selected;
      }
    }
  };

  const arrowTransform = animatedRef.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  //   RENDER COMPONENTS & FUNCTIONS
  const HandleSelection = (value: React.SetStateAction<string>) => {
    onChange(value);
    // setSelected(value);
    toggleDropdownAnimation();
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <>
          <View
            key={"_"}
            style={[styles.dropdown, { height: ViewDataHeight * 0.5 }]}
          >
            <FlatList
              data={Listdata}
              renderItem={({
                item,
              }: {
                item: {
                  name: any;
                  value: any;
                };
              }) => (
                <TouchableOpacity
                  key={item?.name}
                  onPress={() => HandleSelection(item?.value)}
                  style={{
                    flexDirection: "row",
                    height: 50,
                    paddingVertical: 10,
                  }}
                >
                  <Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "black",
                      }}
                    >
                      {item?.name}
                    </Text>
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </>
      );
    }
  };

  // add onChange

  //   console.log(ListDataLength, Listdata?.length);

  return (
    <View
      style={{
        backgroundColor: "#F4F4F6",
        flexDirection: "column",
        borderRadius: 10,
      }}
    >
      <View style={{ padding: 0.5 }}>
        <TouchableOpacity
          onPress={toggleDropdownAnimation}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 55,
            margin: 2,
            marginBottom: 3,
            // backgroundColor: visible ? "#FFFFFF" : "#F4F4F6",
            marginHorizontal: 2,
            borderTopStartRadius: 14,
            borderTopEndRadius: 14,
            paddingHorizontal: 10,
          }}
        >
          <View>
            <View style={{ marginHorizontal: 5 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                }}
              >
                {renderSelected(select) || title}
              </Text>
            </View>
          </View>
          <View>
            <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
              <Entypo name="chevron-small-down" size={30} color="black" />
            </Animated.View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
            backgroundColor: "#FFFFFF",
            marginHorizontal: 2,
            borderBottomEndRadius: 14,
            borderBottomStartRadius: 14,
          }}
        >
          {visible && (
            <View
              style={{
                width: "100%",
                height: ViewDataHeight * 0.5,
              }}
            >
              {renderDropdown()}
              {ListDataLength === 0 && (
                <View
                  style={{
                    height: 100,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>No data found</Text>
                </View>
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    width: "100%",
    borderRadius: 14,
    paddingHorizontal: 5,
  },
  dropdown: {
    position: "absolute",
    borderColor: "gray",
    width: "100%",
    flexDirection: "column",
    // height: 100,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
