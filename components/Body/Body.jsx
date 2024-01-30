import React from "react";
import { StyleSheet, View } from "react-native";
import TopMenu from "./TopMenu/TopMenu";
import BottomMenu from "./BottomMenu/BottomMenu";

function Body() {
  return (
    <View style={styles.bodyView}>
      <View style={{ gap: 25 }}>
        <TopMenu />
        <BottomMenu />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bodyView: {
    gap: 20,
    marginTop: 30,
    flex: 1,
  },
});

export default Body;
