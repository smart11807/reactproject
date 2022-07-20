import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

const Tochable_Examplae = () => {
  const onPress = (msg) => {
    alert("Alert for: " + msg);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <TouchableNativeFeedback
            style={styles.button}
            onPress={() => onPress("TouchableNativeFeedback Pressed")}
          >
            <Text>TouchableNative Feedback Only Android</Text>
          </TouchableNativeFeedback>

          <TouchableHighlight
            style={styles.button}
            onPress={() => onPress("TouchableHighlight Pressed")}
          >
            <Text>TouchableHightlight Only Android</Text>
          </TouchableHighlight>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onPress("TouchableOpacity Pressed")}
          >
            <Text>TouchableOpacity Only Android</Text>
          </TouchableOpacity>

          <TouchableWithoutFeedback
            onPress={() => onPress("TouchableWithoutFeedback Pressed")}
          >
            <View style={styles.button}>
              <Text>TouchableWithoutFeedback Only Android</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tochable_Examplae;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD", //color of button
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
