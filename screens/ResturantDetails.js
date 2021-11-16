import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/resturantDetail/About";
import MenuItems from "../components/resturantDetail/MenuItems";

export default function ResturantDetails() {
  return (
    <View>
      <About  >
      </About>
        <Divider width={1.7} style={{ marginVertical: 20 }}/>
        <MenuItems  /> 
    </View>
  );
}
