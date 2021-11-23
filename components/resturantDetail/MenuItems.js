import React, { useState } from "react";
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
export default function MenuItems({
  resturantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

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
    Boolean(cartItems.find((item) => item.food === food.food));

  return (
    <>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyles}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckBox
                iconStyle={{ borderColor: "black" }}
                fillColor="#8a2be2"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} 
            marginLeft={marginLeft ? marginLeft: 0}
            />
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
const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft
      }}
    />
  </View>
);
