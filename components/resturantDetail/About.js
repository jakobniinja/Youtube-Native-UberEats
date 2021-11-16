import React from 'react'
import { View, Text, Image} from 'react-native'

export default function About() {
    const yelpResturantInfo  = {
        name: "Burger Mansion",
        image: "https://s3-eu-west-1.amazonaws.com/qopla/5f6b3614060e320a439e4765/shop/Image-1.jpeg",
        price: "$$",
        reveiws: "1500",
        rating: 4.5,
        categories: [{title: "Thai"}, {title: "Comfort Food"}]
    }
    // const {name, image, price, reveiws, rating, categories} = yelpResturantInfo;
    // const formatedCategories = categories.map((cat) => cat.title).join(" • ")

        
    
    const image = "https://s3-eu-west-1.amazonaws.com/qopla/5f6b3614060e320a439e4765/shop/Image-1.jpeg"
    const title  = "Burger Mansion, stockholms smaskigaste burgerare"
    const desc = "Burger • Comfort food • $ •  5 🌟 (174+) "
    return (
        <View>
<ResturantImage image={image}/>
<ResturantTitle text={title} />
<ResturantDescription desc={desc}/>
        </View>
    )
}
const ResturantImage = (props) => (
  <Image  source={{uri : props.image}}  style={{width:"100%", height: 180}} />   
);

const ResturantTitle = (props) => (
    <Text style={{fontSize: 24, fontWeight: "700", marginTop: 10, marginHorizontal: 25 }} > {props.text} </Text>   
);

const ResturantDescription = (props) => 
<Text style={{marginTop: 10, marginHorizontal: 15,fontWeight: "500", fontSize: 15.5}} > {props.desc} </Text>
