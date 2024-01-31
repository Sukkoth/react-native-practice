import "@expo/metro-runtime";

import { StyleSheet, View } from "react-native";

import BottomNav from "./components/BottomNav";
import PersonalData from "./components/PersonalData";
import Main from "./components/Main";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1, paddingBottom: 10 }}>
        {/* <Main /> */}
        <PersonalData />
      </View>

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
