import { StyleSheet, View } from "react-native";

function WhiteView({ children }) {
  return <View style={styles.viewStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "rgb(253, 245, 246)",
    padding: 20,
    borderRadius: 30,
  },
});
export default WhiteView;
