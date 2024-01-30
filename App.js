import "@expo/metro-runtime";

import { ImageBackground, Text, View } from "react-native";

import image from "./assets/bg-green.jpg";
import Body from "./components/Login2/Body";
export default function App() {
  return (
    <ImageBackground source={image} resizeMode='cover' style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            color: "white",
            paddingLeft: 30,
            fontWeight: "600",
          }}
        >
          Sign In
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          padding: 30,
          backgroundColor: "white",
        }}
      >
        <Body />
      </View>
    </ImageBackground>
  );
}
