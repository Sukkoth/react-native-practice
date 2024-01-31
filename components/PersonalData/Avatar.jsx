import React from "react";
import { Image, StyleSheet, View } from "react-native";
import avatar from "../../assets/avatar.jpg";
import Icon from "react-native-vector-icons/FontAwesome5";

function Avatar() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.iconHoldingText}>
          <Icon name='plus' style={styles.icons} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  avatarContainer: {
    position: "relative",
    padding: 10,
  },
  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70,
    resizeMode: "cover",
  },
  iconHoldingText: {
    position: "absolute",
    bottom: 13,
    right: 5,
    backgroundColor: "#9076fe",
    borderRadius: 22,
    height: 43,
    width: 43,
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    color: "white",
    fontSize: 20,
  },
});

export default Avatar;
