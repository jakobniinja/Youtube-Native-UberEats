import React from "react";
import { View, Text } from "react-native";

export default function OrderItem({item}) {
    const {food, price} = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColorol: "#999",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 14 }}>  {food}  </Text>
      <Text style={{ opacity: 0.7, fontSize: 14 }}> {price} </Text>
    </View>
  );
}
