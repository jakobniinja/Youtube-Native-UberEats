import React, { useEffect, useRef } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { useSelector } from "react-redux";
import lottie from "lottie-web";

export default function OrderCompleted() {
  const container = useRef(null);
  const container2 = useRef(null);
  useEffect(() => {
    
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../assets/animations/purple-tick.json")
    });
    
    lottie.loadAnimation({
      container: container2.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../assets/animations/cooking.json")
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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Image ref={container} style={{width:100, alignSelf: "center"}} ></Image>

      <Text>
        your order at {resturantName}, has been placed for {totalUSD}
      </Text>
      <Image ref={container2} style={{width:"80%", alignSelf: "center"}} ></Image>
      {/* cooking animation */}
    </SafeAreaView>
  );
}
