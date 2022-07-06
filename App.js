import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import User from "./components/User";
import LotsOfGreetings from "./components/LotsOfGreetings";
import MyCustomTextWith from "./components/MyCustomTextWith";

const App = () => {
  return (
    <view>
    {/*   <Logo />
      <User />
      <LotsOfGreetings /> */}
      <MyCustomTextWith/>
    </view>
  );
};

export default App;
