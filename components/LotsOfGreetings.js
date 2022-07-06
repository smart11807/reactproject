import React from "react";
import { Text, View } from "react-native";

const Greetings = (props) => {
  return (
    <View style={{ alignItems: "center", top: 50 }}>
      <Text>Hello {props.name}</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <view style={{ alignItems: "center", top: 50 }}>
      <Greetings name="Marry Christmas" date='25-DEC-2022' />
      <Greetings name="Happy New Year" date='31-DEC-2022' />
      <Greetings name="Songkran Festival" date='13-APR-2022' />
    </view>
  );
};

export default LotsOfGreetings;
