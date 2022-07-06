import { StyleSheet, View, TextInput , Button} from "react-native";
import React, { useState } from "react";

const UserNamePassword = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPass] = useState("");


    const showAlert = ()=> {
            alert("Email: "+Email+"\nPassword: "+Password)
    }


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Email"
        onChangeText={(val) => setEmail(val)}
        value={Email}
      />

      <TextInput
        style={styles.textInputStyle}
        placeholder="Password"
        onChangeText={(val) => setPass(val)}
        value={Password}
      />

      <View>
        <Button style={styles.buttonstyle}
        onPress={showAlert} title="Submit" />
      </View>
    </View>
  );
};

export default UserNamePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    width: "100%",
    fontSize:40,
    backgroundColor: "white",
    padding: 10,
    width:700,
    textAlign: "center",
    marginBottom: 50,
    paddingVertical: 8,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
    fontSize:20,
  },
  buttonstyle:{
    padding: 10
  }
});