import { Image, StyleSheet, Text, View } from "react-native";
import avatar from "../assets/avatar.jpg";

function Header() {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View>
        <Text style={styles.nameText}>Jasse Pinkman</Text>
        <Text style={styles.roleText}>Product Designer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  roleText: {
    color: "gray",
  },
});

export default Header;
