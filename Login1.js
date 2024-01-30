import "@expo/metro-runtime";

import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Form from "./components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: 200,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          Welcome👋
        </Text>
        <Text
          style={{
            color: "whitesmoke",
            marginTop: 10,
          }}
        >
          Enter your information below
        </Text>

        <Form />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3548",
    color: "white",
  },
  backgroundDiv: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
  inputItem: {},
});
