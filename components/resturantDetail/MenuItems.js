import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-elements";

const styles = StyleSheet.create({
  menuItemStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyles: {
    fontSize: 18,
    fontWeight: "500",
  },
});
export default function MenuItems() {
  const foods = [
    {
      food: "Burger",
      desc: "spicyCado",
      price: "$8.99",
      image:
        "https://usercontent.one/wp/www.burgermansion.se/wp-content/uploads/2021/03/159482620_762093271376811_2602383968656664864_n-768x768.jpg?media=1635072033",
    },
    {
      food: "Burger",
      desc: "Nashvile Chicken ",
      price: "$11.99",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/1c/ff/56/e3/san-dar-burgare-med-pommes.jpg",
    },
    {
      food: "Burger",
      desc: "cheese, limited burger(x-mas deal) ",
      price: "$4.99",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOBhz0sG7TcAlsl7HeWWGw_6Z5nkMRJZ84CQHtv=w768-h768-n-o-v1",
    },
  ];

  return (
      <>
      {foods.map((food, index) => (
    <View key={index} >
      <View style={styles.menuItemStyles}>
        <FoodInfo food={food} />
        <FoodImage  food={food} />
      </View>
      <Divider  width={1.2}  orientation="vertical"  style={{marginHorizontal: 20}} />
    </View>

      ))}

    </>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyles}> {props.food.food} </Text>
    <Text> {props.food.desc} </Text>
    <Text> {props.food.price} </Text>
  </View>
);
const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
