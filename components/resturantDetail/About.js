import React from 'react'
import { View, Text, Image} from 'react-native'

    const yelpResturantInfo  = {
        name: "Burger Mansion",
        image: "https://s3-eu-west-1.amazonaws.com/qopla/5f6b3614060e320a439e4765/shop/Image-1.jpeg",
        price: "$$",
        reviews: "1500",
        rating: 4.5,
        categories: [{title: "Burgers"}, ]
    }
export default function About(props) {

    const {name, image, price,reviews, rating, categories} = props.route.params;
    const formatedCategories = categories.map((cat) => cat.title).join(" • ")
    const description  = `${formatedCategories} ${price ? ' • ' + price : "" }  • 🎟️ • ${rating} ⭐ (${reviews}+) `
    return (
        <View>
<ResturantImage image={image}/>
<ResturantName name={name} />
<ResturantDescription description={description}/>
        </View>
    )
}
const ResturantImage = (props) => (
  <Image  source={{uri : props.image}}  style={{width:"100%", height: 180}} />   
);

const ResturantName = (props) => (
<Text style={{fontSize: 24, fontWeight: "700", marginTop: 10, marginHorizontal: 25 }} > {props.name} </Text>   
);

const ResturantDescription = (props) => 
<Text style={{marginTop: 10, marginHorizontal: 15,fontWeight: "500", fontSize: 15.5}} > {props.description} </Text>
