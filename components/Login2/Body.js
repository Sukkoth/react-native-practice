import React from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import Form from "./Form";
import facebookIcon from "../../assets/facebook.png";
import googleIcon from "../../assets/google.png";

function Body() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "800",
        }}
      >
        Welcome Back!
      </Text>
      <Text
        style={{
          fontSize: 17,
          lineHeight: 25,
          color: "gray",
          marginTop: 5,
        }}
      >
        To keep connected with us please login with your personal info
      </Text>

      <Form />
      <View
        style={{
          flex: 1,
          // justifyContent: "center",
          marginTop: 60,
        }}
      >
        <View style={styles.socialsContainer}>
          <View style={styles.separator} />
          <Text style={{ color: "lightgrey" }}>OR CONTINUE WITH</Text>
          <View style={styles.separator} />
        </View>
        <View
          style={{
            marginTop: 30,
            gap: 20,
          }}
        >
          <Pressable
            style={({ pressed }) => [
              styles.socialBtn,
              {
                backgroundColor: pressed ? "#e6e8e6" : "white",
              },
            ]}
          >
            <Image
              source={facebookIcon}
              style={{
                height: 30,
                width: 30,
              }}
            />
            <Text style={{ fontSize: 18, flex: 1, textAlign: "center" }}>
              Sign in with Facebook
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.socialBtn,
              {
                backgroundColor: pressed ? "#e6e8e6" : "white",
              },
            ]}
          >
            <Image
              source={googleIcon}
              style={{
                height: 30,
                width: 30,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                flex: 1,
                textAlign: "center",
              }}
            >
              Sign in with Google
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  socialsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 20,
  },
  separator: {
    minHeight: 2,
    backgroundColor: "lightgrey",
    flex: 1,
  },
  socialBtn: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "lightgrey",
    height: 60,
    fontSize: 18,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "row",
    gap: 5,
    backgroundColor: "blue",
  },
});

export default Body;
