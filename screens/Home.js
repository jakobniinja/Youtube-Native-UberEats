import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import ResturantItems from '../components/ResturantItem'
import SearchBar from '../components/SearchBar'
import config from "../config"

const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function Home() {
  const [resturantData, setResturantData] = useState(localRestaurants)
    const [city, setCity] = useState("högdalen");
     const getResturantFromYelp = () => {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions =  {
      headers:{
        Authorization: `Bearer ${config.REACT_APP_YELP_KEY}`,
      },
      mode:"cors"
      };

return fetch(yelpUrl, apiOptions).then(res => res.json()).then(data => setResturantData(data.businesses)).catch(err => console.log(err))
  }
    useEffect(() => {
      getResturantFromYelp();
    }, [])

    return (
        <SafeAreaView  style={{backgroundColor: "#eee", flex:1}} >
            <View  style={{backgroundColor:"white", padding: 15}} >
            <HeaderTabs/>
            <SearchBar  />
            <ScrollView showsVerticalScrollIndicator={false}  > 
            <Categories />
            <ResturantItems resturantData={resturantData} />
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}
