import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WhiteView from "../../WhiteView";
import MenuListItem from "../../MenuListItem";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

function BottomMenu() {
  return (
    <WhiteView>
      <View
        style={{
          gap: 10,
        }}
      >
        <MenuListItem to='faqs'>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Text style={styles.iconHoldingText}>
              <MaterialIcons
                name='dots-horizontal-circle'
                style={styles.icons}
              />
            </Text>
            <Text style={styles.menuTitle}>FAQs</Text>
          </View>
        </MenuListItem>
        <MenuListItem to='handbook'>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Text style={styles.iconHoldingText}>
              <FontAwesomeIcon name='swatchbook' style={styles.icons} />
            </Text>
            <Text style={styles.menuTitle}>Our HandBook</Text>
          </View>
        </MenuListItem>
        <MenuListItem to='community'>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Text style={styles.iconHoldingText}>
              <Icon name='people' style={styles.icons} />
            </Text>
            <Text style={styles.menuTitle}>Community</Text>
          </View>
        </MenuListItem>
      </View>
    </WhiteView>
  );
}

const styles = StyleSheet.create({
  iconHoldingText: {
    backgroundColor: "#fceced",
    padding: 20,
    borderRadius: 100,
  },
  icons: {
    color: "#0d0534",
    fontSize: 25,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BottomMenu;
