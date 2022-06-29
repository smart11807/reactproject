import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Logo = () => {
  const textLogo = "Thai-Nichi";
  const isTH = false;
  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
      <Text>{textLogo}</Text>
      {/* {
        isTH && <Text>ภาษาไทย</Text>
      } */}
      {isTH ? <text>ภาษาไทย</text> : <Text>ภาษาอังกฤษ</Text>}
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  TextLogo: {
    color: "red",
    fontSize: 60,
  },
});