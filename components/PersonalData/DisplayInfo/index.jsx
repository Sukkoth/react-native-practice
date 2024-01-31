import React from "react";
import { View } from "react-native";
import InfoItem from "./InfoItem";
import Gender from "./Gender";

function DisplayInfo() {
  const info = [
    {
      label: "Your Name",
      value: "Jasse Pinkman",
    },
    {
      label: "Date of Birth",
      value: "28 December 2021",
    },
    {
      label: "Your Job",
      value: "Product Designer",
    },
    {
      label: "Monthly Income",
      value: "$500 - $5000/Year",
    },
  ];
  return (
    <View style={{ gap: 20 }}>
      {info.map((i) => (
        <InfoItem label={i.label} value={i.value} key={i.label} />
      ))}
      <Gender value='male' />
    </View>
  );
}

export default DisplayInfo;
