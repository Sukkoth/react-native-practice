import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WhiteView from "../../WhiteView";
import MenuListItem from "../../MenuListItem";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";

function TopMenu() {
  return (
    <WhiteView>
      <View
        style={{
          gap: 10,
        }}
      >
        <MenuListItem to='personal-data'>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Text style={styles.iconHoldingText}>
              <Icon name='person' style={styles.icons} />
            </Text>
            <Text style={styles.menuTitle}>Personal Data</Text>
          </View>
        </MenuListItem>
        <MenuListItem to='settings'>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Text style={styles.iconHoldingText}>
              <Icon name='settings-sharp' style={styles.icons} />
            </Text>
            <Text style={styles.menuTitle}>Settings</Text>
          </View>
        </MenuListItem>
        <MenuListItem to='statement'>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Text style={styles.iconHoldingText}>
              <FontAwesomeIcon name='clipboard-check' style={styles.icons} />
            </Text>
            <Text style={styles.menuTitle}>E-Statement</Text>
          </View>
        </MenuListItem>
        <MenuListItem to='referral'>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Text style={styles.iconHoldingText}>
              <Icon name='heart' style={styles.icons} />
            </Text>
            <Text style={styles.menuTitle}>Referral Code</Text>
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

export default TopMenu;
