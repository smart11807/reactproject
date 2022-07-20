import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React from "react";

const Separator = () => <View style={styles.separator} />;

const ButtonExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required.It is recommended to set
          accessigilityLabel to thelp make your app usable by everyone.
        </Text>
        <Button
          title="press me"
          onPress={() => alert("Simple Button Pressed")}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required.It is recommended to set
          accessigilityLabel to thelp make your app usable by everyone. The
          title and onPress handler are required.It is recommended to set
          accessigilityLabel to thelp make your app usable by everyone.
        </Text>
        <Button
          marginHorizontal
          color="#ED8BFF"
          title="press me"
          onPress={() => alert("Button With Adjust Color")}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required.
        </Text>
        <Button title="Disable" disabled />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required.
        </Text>
        <View style={styles.fixToText}>
          <Button
            color="#66F026"
            title="left button"
            onPress={() => alert("Left Button")}
          />
          <Button
            color="#FF0000"
            title="right button"
            onPress={() => alert("Right Button")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
    marginBottom: 10,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
