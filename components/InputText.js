import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";

const InputText = () => {
  const [username, setusername] = useState("");
  return (
    <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>
      <Text>Insert any text in below input</Text>
      <TextInput 
      style={styles.textInput}
      value = {username}
      onChangeText = {(username) => {setusername(username)}}
      placeholder='Please input username'
      
      />
      <text style = {{color:'green', fontSize:20}}>{username}</text>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
    textInput:{
        width:250,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#eaeaea'
    }
});
