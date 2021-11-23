import React, { useState, useEffect, useRef } from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import lottie from "lottie-web";
import firebase from "../firebase";
import MenuItems from "../components/resturantDetail/MenuItems";

export default function OrderCompleted() {
  const [lastOrder, setlastOrder] = useState({
    items: [
      {
        food: "Lasagna",
        desc: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });
  const container = useRef(null);
  const container2 = useRef(null);
  const container12 = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../assets/animations/purple-tick.json"),
    });

    lottie.loadAnimation({
      container: container2.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../assets/animations/cooking.json"),
    });
        lottie.loadAnimation({
      container: container12.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/animations/gameboy.json"),
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
  useEffect(() => {
    const db = firebase.firestore();
    const unsubcribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setlastOrder(doc.data());
        });
      });
    return () => unsubcribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          ref={container}
          style={{ width: 100, alignSelf: "center" }}
        ></Image>

        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft={8} ></MenuItems>
          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 12 }}>
            {resturantName}, total {totalUSD}
          </Text>
          <Image
            ref={container2}
            style={{ width: "80%", alignSelf: "center" }}
          ></Image>
          {/* cooking animation */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
