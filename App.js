import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import Stysheet from "./components/Stysheet";
import TextInputExample from "./components/TestInputExample";
import Cat from "./components/cat";
import Cafe from "./components/Cafe";

const App = () => {
  return (
    <View style={styles.container}>
      {<Text style={[styles.title, styles.warning]}>Hello React Native</Text>}
      {<Logo />}
      {/* <Stysheet/> */}
      {/* <TextInputExample/> */}
      {/* <Cafe /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignContent: "top",
  },
  title: {
    fontSize: 20,
  },
  warning: {
    color: "blue",
  },
});
