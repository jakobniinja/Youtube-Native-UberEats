import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ViewCart() {
  return (

    <View style={{
        display: "flex",
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: -30,
        zIndex: 99

    }} >  
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
            alignItems: "center",
            padding: 13,
            marginLeft: "61%" ,
            borderRadius: 30,
            width: 250,
            position: "relative",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
