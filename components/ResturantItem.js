import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import CommunityMaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ResturantItem() {
  return (
      <TouchableOpacity activeOpacity={1}  style={{marginBottom: 30}} >
    <View style={{marginTop: 10, padding: 15, backgroundColor: "white"}} >
      <ResturantImage />
     <ResturantInfo/>  
    </View>
      </TouchableOpacity>
        
  );
}

const ResturantImage = () => (
  <>
    <Image
      source={{
        uri: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      }}
      style={{ width: "100%", height: "180px" }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <CommunityMaterialIcons
        name="heart-outline"
        size={25}
        color="#fff"
      ></CommunityMaterialIcons>
    </TouchableOpacity>
  </>
);
const ResturantInfo= () => (
    <View 
    
    style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10  }} 
    >
        

    <View>
        <Text style={{fontSize: 15, fontWeight: "bold"}} > Farmhoues kitchne thiar cuisine </Text>
        <Text style={{fontSize: 13, color:"gray"}} >30-45 min</Text>
        </View>
        <View style={{backgroundColor: "#eee", height: 30, width: 30, alignItems: "center",   borderRadius: 15}} >
        <Text  >3.2</Text>
        </View>

    </View>
    
)
