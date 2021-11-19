import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart({  navigation}) {
    const { items} = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

    console.log(totalUSD)

  return (
    <>
    {total ? (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: -30,
        zIndex: 99,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "#8a2be2",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 11,
            marginLeft: "61%",
            borderRadius: 30,
            width: 250,
            position: "relative",
          }}
        >
          <Text style={{ color: "white", fontSize: 15, marginRight: 30 }}>View Cart</Text>
          <Text style={{ color: "white"}} > {totalUSD} </Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : <></>
};
  </>

  );
}

