import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo, MaterialIcons, FontAwesome } from "react-native-vector-icons";

function BottomNav() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setActiveTab(1)} style={styles.iconHoldingText}>
        <Entypo
          name='home'
          style={activeTab === 1 ? styles.activeIcon : styles.icons}
        />
      </Pressable>
      <Pressable onPress={() => setActiveTab(2)} style={styles.iconHoldingText}>
        <MaterialIcons
          name='local-activity'
          style={activeTab === 2 ? styles.activeIcon : styles.icons}
        />
      </Pressable>
      <Pressable onPress={() => setActiveTab(3)} style={styles.iconHoldingText}>
        <FontAwesome
          name='user'
          style={activeTab === 3 ? styles.activeIcon : styles.icons}
        />
      </Pressable>
      <Pressable onPress={() => setActiveTab(4)} style={styles.iconHoldingText}>
        <MaterialIcons
          name='mail'
          style={activeTab === 4 ? styles.activeIcon : styles.icons}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingHorizontal: 30,
    borderRadius: 50,
    backgroundColor: "rgb(253, 245, 246)",
    width: "100%",
    marginHorizontal: "auto",
  },
  iconHoldingText: {
    padding: 15,
  },
  icons: {
    color: "#d0d2d1",
    fontSize: 28,
  },
  activeIcon: {
    color: "#9076fe",
    fontSize: 28,
  },
});

export default BottomNav;
