import React from "react";
import { ScrollView, Text } from "react-native";
import PagesHeader from "../PagesHeader";
import Avatar from "./Avatar";
import DisplayInfo from "./DisplayInfo";
import { View } from "react-native";

function PersonalData() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <PagesHeader title={"Personal Data"} />
      <Avatar />
      <View style={{ paddingHorizontal: 30, marginTop: 30 }}>
        <DisplayInfo />
      </View>
    </ScrollView>
  );
}

export default PersonalData;
