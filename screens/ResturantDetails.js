import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/resturantDetail/About";
import MenuItems from "../components/resturantDetail/MenuItems";
import ViewCart from "../components/resturantDetail/ViewCart";




export default function ResturantDetails( {route, navigation }) {
  const foods = [
    {
      food: "Lasagna",
      desc: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
      food: "Tandoori Chicken",
      desc: "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
      price: "$19.20",
      image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
      food: "Chilaquiles",
      desc: "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
      price: "$14.50",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
      food: "Chicken Caesar Salad",
      desc: "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
      price: "$21.50",
      image:
        "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
      food: "pepparmint te",
      desc: "hot tee with sugar/milk/brown",
      price: "$3.50",
      image:
        "https://media.meds.se/meds/images/maxx-27394300-g-2019-03-08-115604123/455/360/0/yogitea-detox-17-tepasar.jpg",
    },
  ];

  return (
    <View>
      <About  route={route}>
      </About >
        <Divider width={1.7} style={{ marginVertical: 20 }}/>
        <MenuItems  resturantName={route.params.name} foods={foods} /> 
        <ViewCart  navigation={navigation}     />
    </View>
  );
}
