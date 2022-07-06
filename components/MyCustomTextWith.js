import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const MyCustom = (props) => {
    return (
      <View style={{ alignItems: "center", top: 50 }}>
        <Text>Your Frist Name is {props.firstname} and Last name is {props.secondname} </Text>
      </View>
    );
  };

const MyCustomTextWith = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <MyCustom firstname="Disawat" secondname="Srisamran" />
        <MyCustom firstname="Karin" secondname="IDK" />
      </View>
    </SafeAreaView>
  );
};
export default MyCustomTextWith;
