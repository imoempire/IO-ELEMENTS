import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Modal } from "react-native";
import { TextInput } from "react-native";
import CountryList from "country-list-with-dial-code-and-flag";

interface Props {
  visible: boolean;
  closeModal: () => void;
  onSection?: (item: string) => void;
  onSelectFlag?: (item: string) => void;
  defaultCountry?: string;
}

const CountryModals = ({
  visible,
  closeModal,
  onSection = (code) => console.log(code),
  onSelectFlag = (flag: string) => console.log(flag),
  defaultCountry = "GH",
}: Props) => {
  let countries = CountryList.getAll();

  const textInputRef = useRef<TextInput | null>(null);

  const [allCountry, setAllCountry] = useState<any>();
  const [filteredCountry, setFilteredCountry] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCountry(allCountry);
    } else {
      const filtered = allCountry?.filter((item: any) => {
        return (
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.dial_code.includes(searchTerm)
        );
      });

      setFilteredCountry(filtered);
    }
  }, [searchTerm, allCountry]);

  useEffect(() => {
    const countries = CountryList.getAll();
    setAllCountry(countries);
    setFilteredCountry(countries);
  }, []);

  const onSelection = useCallback(
    (item: { code: string; flag: string }) => {
      onSection?.(item?.code);
      onSelectFlag?.(item?.flag);
      closeModal?.();
    },
    [onSection, onSelectFlag, closeModal]
  );

  function findCountryByCodeOrName(query: string) {
    return countries.find((country: any) => {
      const data = country?.data;
      return (
        data.code === query || data.name.toLowerCase() === query.toLowerCase()
      );
    });
  }

  useEffect(() => {
    const defaultSelectedCountry = findCountryByCodeOrName(defaultCountry);
    if (defaultSelectedCountry) {
      onSection?.(defaultSelectedCountry?.dial_code);
      onSelectFlag?.(defaultSelectedCountry?.flag);
    }
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 20 }} onPress={closeModal}>
            Select a country
          </Text>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={closeModal}
          >
            <Text style={{ color: "#ffffff", fontSize: 20 }}>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            //   ref={textInputRef}
            style={{
              width: "100%",
              height: 40,
              borderRadius: 10,
              borderWidth: 1,
              paddingHorizontal: 10,
              // borderColor: lightColors.primary,
            }}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search"
            //   onBlur={handleBlur}
          />
          {/* </View> */}
          <FlatList
            data={filteredCountry}
            numColumns={3}
            renderItem={({ item }) => {
              let itemObject = {
                flag: item?.flag,
                code: item?.dial_code,
              };
              return (
                <TouchableOpacity
                  // @ts-ignore
                  onPress={() => onSelection(itemObject)}
                  style={{
                    backgroundColor: "#ffffff",
                    marginVertical: 20,
                    borderWidth: 1,
                    height: 100,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30%",
                    marginHorizontal: 5,
                  }}
                >
                  <Text style={{ fontSize: 20, textAlign: "center" }}>
                    {item?.dial_code}
                  </Text>
                  <Text style={{ textAlign: "center" }}>{item?.flag}</Text>
                  <Text style={{ textAlign: "center" }}>{item?.name}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.code}
            onEndReachedThreshold={0}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CountryModals;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 30,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
});
