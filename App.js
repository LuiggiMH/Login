import React, { Component } from "react";
import {
  Alert,
  Text,
  TextInput,
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "  Usuario..." };
    this.state2 = { text: "  Mail..." };
    this.state3 = { text: "  Contraseña..." };
  }

  render() {
    function mensaje() {
      Alert.alert("Iniciando Sesión", "Espere....");
    }

    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require("./assets/login.png")} />

        <Image style={styles.img2} source={require("./assets/usuario.png")} />

        <TextInput
          style={{
            width: 250,
            height: 40,
            borderColor: "black",
            borderWidth: 2,
          }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          multiline={true}
          numberOfLines={5}
        />

        <Image style={styles.img2} source={require("./assets/mail.png")} />

        <TextInput
          style={{
            width: 250,
            height: 40,
            borderColor: "black",
            borderWidth: 2,
          }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state2.text}
          multiline={true}
          numberOfLines={5}
        />

        <Image style={styles.img2} source={require("./assets/password.png")} />

        <TextInput
          style={{
            width: 250,
            height: 40,
            borderColor: "black",
            borderWidth: 2,
          }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state3.text}
          multiline={true}
          numberOfLines={5}
        />

        <TouchableOpacity style={styles.btn} onPress={mensaje}>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            Iniciar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
  img2: {
    width: 50,
    height: 50,
    marginTop: "5%",
  },

  btn: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: "20%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 20,
  },
});
