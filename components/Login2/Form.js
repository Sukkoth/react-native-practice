import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Form() {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  return (
    <View
      style={{
        marginTop: 40,
      }}
    >
      <View
        style={{
          gap: 20,
        }}
      >
        <TextInput style={styles.input} placeholder='Email Address' />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TextInput
            style={styles.passwordInput}
            placeholder='Password'
            secureTextEntry={hiddenPassword}
          />
          <Pressable
            style={styles.showPasswordBtn}
            onPress={() => setHiddenPassword((prev) => !prev)}
          >
            <Text>
              {hiddenPassword ? (
                <Icon name='eye' size={25} color={"gray"} />
              ) : (
                <Icon name='eye-with-line' size={25} color={"gray"} />
              )}
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <Text
          style={{
            color: "#168638",
            textAlign: "right",
            marginTop: 30,
          }}
        >
          Forgot Password?
        </Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.signInBtn,
          {
            backgroundColor: pressed ? "#155c2a" : "#168638",
          },
        ]}
      >
        <Text style={styles.signInBtnText}>Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "whitesmoke",
    height: 60,
    fontSize: 18,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  passwordInput: {
    backgroundColor: "whitesmoke",
    height: 60,
    fontSize: 18,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    flex: 1,
  },

  showPasswordBtn: {
    backgroundColor: "whitesmoke",
    height: 60,
    fontSize: 18,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  signInBtn: {
    backgroundColor: "#168638",
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 30,
    elevation: 5,
  },
  signInBtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Form;
