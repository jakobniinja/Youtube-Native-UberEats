import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";

import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import firebase from "../../firebase";
import lottie from "lottie-web";

export default function ViewCart({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const container12 = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container12 .current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/animations/gameboy.json"),
    });
  }, []);

  const { items, resturantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const addOrderToFirbase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        resturantName: resturantName,
        total: totalUSD,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false)
          navigation.navigate("OrderCompleted");
        }, 2500);
      });
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.3)",
    },
    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      width: "100%",
    },
    resturantName: {
      textAlign: "center",
      fontWeight: "600",
      fonsize: 18,
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fonsize: 15,
      marginBottom: 10,
    },
  });

  console.log(totalUSD);

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.resturantName}> {resturantName} </Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item}></OrderItem>
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}> Subtotal </Text>
              <Text> {totalUSD} </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "#8a2be2",
                  alignItems: "center",
                  padding: 17,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  addOrderToFirbase();
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>Process </Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 9,
                    top: 17,
                  }}
                >
                  {" "}
                  {total ? totalUSD : ""}{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
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
            {checkoutModalContent()}{" "}
          </Modal>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              position: "absolute",
              bottom: 130,
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
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.9,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Image
            ref={container12}
            style={{ width: "80%", alignSelf: "center" }}
          ></Image>
          <Text style={{color: "white", backgroundColor:"black"}} >loading ...</Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
