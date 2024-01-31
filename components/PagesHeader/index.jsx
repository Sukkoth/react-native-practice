import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

function PagesHeader({ leftIcon, rightIcon, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.iconHoldingText}>
        {leftIcon ? (
          leftIcon
        ) : (
          <Icon name='chevron-left' style={styles.icons} />
        )}
      </Text>
      <Text style={styles.title}>{title || "Title "}</Text>
      <Text style={styles.iconHoldingText}>{rightIcon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  iconHoldingText: {
    backgroundColor: "#fceced",
    padding: 20,
    borderRadius: 100,
  },
  icons: {
    color: "#0d0534",
    fontSize: 25,
  },
});

export default PagesHeader;
