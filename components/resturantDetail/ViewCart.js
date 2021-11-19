import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const { items } = useSelector((state) => state.cartReducer.selectedItems);

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log(totalUSD);

  const checkoutModalContent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <View
          style={{
            backgroundColor: "#8a2be2",
            padding: 10,
            borderRadius: 30,
            width: 150,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: "white", backgroundColor:"#8a2be2"}}>Checkout 🥐 </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      {total ? (
        <>
          <Modal
          animationType="slide"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
          >
             {checkoutModalContent() } </Modal>
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
                onPress={() => setModalVisible(true)}
              >
                <Text style={{ color: "white", fontSize: 15, marginRight: 30 }}>
                  View Cart
                </Text>
                <Text style={{ color: "white" }}> {totalUSD} </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <></>
      )}
      ;
    </>
  );
}
