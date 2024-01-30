import { Pressable, StyleSheet, Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function MenuListItem({ children, to }) {
  return (
    <Pressable style={styles.itemStyle} onPress={() => alert(`Goto ${to}`)}>
      {children}

      <Text style={styles.chevronIconContainer}>
        <EntypoIcon name='chevron-right' style={styles.chevronIcon} />
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chevronIconContainer: {},
  chevronIcon: {
    color: "#0d0534",
    fontSize: 35,
    alignSelf: "flex-end",
  },
});

export default MenuListItem;
