import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

function Gender({ value }) {
  return (
    <View style={{ gap: 10 }}>
      <Text style={styles.label}>Gender</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.display}>
          <Icon
            name='dot-fill'
            style={value === "male" ? styles.iconActive : styles.icon}
          />
          <Text style={styles.value}>Male</Text>
        </View>
        <View style={styles.display}>
          <Icon
            name='dot-fill'
            style={value === "female" ? styles.iconActive : styles.icon}
          />
          <Text style={styles.value}>Female</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  display: {
    backgroundColor: "rgb(253, 245, 246)",
    width: 120,
    padding: 5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 45,
    color: "lightgray",
  },
  iconActive: {
    color: "#0d0534",
    fontSize: 45,
  },
});

export default Gender;
