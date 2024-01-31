import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WhiteView from "../../WhiteView";

function InfoItem({ label, value }) {
  return (
    <View style={{ gap: 10 }}>
      <Text style={styles.label}>{label}</Text>
      <WhiteView>
        <Text style={styles.value}>{value}</Text>
      </WhiteView>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default InfoItem;
