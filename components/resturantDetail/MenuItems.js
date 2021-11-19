import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector, Modal } from "react-redux";
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
export default function MenuItems({ resturantName }) {
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
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false)

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        resturantName: resturantName,
        checkboxValue: checkboxValue,
      },
    });
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(
      cartItems.find((item) => 
        item.food === food.food
      )
    );

    

  return (
    <>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyles}>
            <BouncyCheckBox
              iconStyle={{ borderColor: "black" }}
              fillColor="#8a2be2"
              isChecked={isFoodInCart(food, cartItems)}
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={1.2}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
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
