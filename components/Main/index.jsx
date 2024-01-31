import React from "react";
import Header from "../Header";
import Body from "../Body/Body";
import { ScrollView, StatusBar } from "react-native";

function Main() {
  return (
    <ScrollView>
      <Header />
      <Body />
      <StatusBar barStyle='dark-content' backgroundColor='#fceced' />
    </ScrollView>
  );
}

export default Main;
