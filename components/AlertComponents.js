import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";

const AlertComponet = () => {
  const simplealertHandler = () => {
    alert("Hello HELOO");
  };
  const twoOptionAlertHandler = () => {
    Alert.alert("Hello", "I am two optin alert from React Native", [
      {
        text: "Yes",
        onPress: () => alert("Yes pressed"),
      },

      {
        text: "Yes",
        onPress: () => alert("No pressed"),
        style: "cancel",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Button title="simple Alert" onPress={simplealertHandler} s />
      <Button title="Alert with two options" onPress={twoOptionAlertHandler} />
    </View>
  );
};

export default AlertComponet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
