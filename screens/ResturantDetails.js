import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/resturantDetail/About";
import MenuItems from "../components/resturantDetail/MenuItems";
import ViewCart from "../components/resturantDetail/ViewCart";



export default function ResturantDetails( {route, navigation }) {

  return (
    <View>
      <About  route={route}>
      </About >
        <Divider width={1.7} style={{ marginVertical: 20 }}/>
        <MenuItems  resturantName={route.params.name} /> 
        <ViewCart  navigation={navigation}   />
    </View>
  );
}
