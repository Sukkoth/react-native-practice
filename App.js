import "@expo/metro-runtime";

import { ScrollView, StatusBar, StyleSheet, View } from "react-native";

import Header from "./components/Header";
import Body from "./components/Body/Body";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Header />
        <Body />
        <StatusBar barStyle='dark-content' backgroundColor='#fceced' />
      </ScrollView>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "rgb(252, 236, 237)",
    padding: 20,
    flex: 1,
  },
});
