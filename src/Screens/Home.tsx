import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { ms, scale } from 'react-native-size-matters';
import appTheme from '../themes/theme';
import { FlatList, Image, ScrollView } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Carousel from 'react-native-snap-carousel'
const Home = (props :any) => {

    const navigation = props;

    const navigateToLogin = () => {
        // console.log("navigation", navigation.navigation.navigate)
        navigation.navigation.navigate("Login")
    }
    const productData =[
      {id: '1', image: require('../assets/product3.jpeg'), name: 'Shirt', price: 350}, 
      {id: '2', image: require('../assets/product2.jpeg'), name: 'Jeans', price: 950}, 
      {id: '3', image:  require('../assets/product3.jpeg'), name: 'TShirt', price: 250}, 
      {id: '4', image: require('../assets/product4.jpeg'), name: 'Cargo Pant', price: 350}, 
      {id: '5', image: require('../assets/product5.jpeg'), name: 'Anime tshirt', price: 650}, 
      {id: '6', image: require('../assets/product6.jpeg'), name: 'Shirt', price: 450}, 

    ]

    const carousalData =[
      {id: '1', image: require('../assets/slider1.jpeg')},
      {id: '2', image: require('../assets/slider2.jpeg')},
      {id: '3', image: require('../assets/slider3.jpeg')},
      {id: '4', image: require('../assets/slider4.jpeg')}
    ]


  return (
    <View style={styles.container}>
        <View style={styles.topBarContainer}>
          <View style={{flexDirection: "row"}}>

        <TouchableOpacity style={styles.profileContainer}>
        <Image source={require('../assets/profile.jpeg')} style={{width: 40, height: 40}} />
            </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 25}}>

          <Text style={styles.profileName}> Hi Abhijit!</Text>
        </TouchableOpacity>
          </View>
            <TouchableOpacity style={styles.cartIconContainer}>
    <Icon name="notifications" size={20} color={appTheme.colors.primaryColor} />
            </TouchableOpacity>
        </View>
    <ScrollView >
    <Carousel
  data={carousalData}
  renderItem={({ item }) => (
    <View style={{ height: 200 }}>
      <Image source={item.image} style={{ width: "100%", height: "100%" }} />
    </View>
  )}
  sliderWidth={350}
  itemWidth={330}
  layout={'tinder'}
    loop={true}
    autoplay
    autoplayInterval={3000}
/>

        <Text style={styles.headerText}>Featured</Text>
        <FlatList
        horizontal
        data={productData}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
          <View style={styles.productContainer} >
            <TouchableOpacity onPress={()=> navigation.navigate("Product Details", {productId: item.id})}>
              <Image source={item.image} style={styles.productImage} alt={item.name} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>₹ {item.price}</Text>

            </TouchableOpacity>
          </View>
        )} />

<Text style={styles.headerText}>New Arrivals</Text>
        <FlatList
        horizontal
        data={productData}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
          <View style={styles.productContainer} >
            <TouchableOpacity onPress={()=> navigation.navigate("Product Details", {productId: item.id})}>
              <Image source={item.image} style={styles.productImage} alt={item.name} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>₹ {item.price}</Text>

            </TouchableOpacity>
          </View>
        )} />

<Text style={styles.headerText}>Special offers with 50% Discount</Text>
        <FlatList
        horizontal
        data={productData}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
          <View style={styles.productContainer} >
            <TouchableOpacity onPress={()=> navigation.navigate("Product Details", {productId: item.id})}>
              <Image source={item.image} style={styles.productImage} alt={item.name} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>₹ {item.price}</Text>

            </TouchableOpacity>
          </View>
        )} />
    </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
   container: {
    flex:1,
    backgroundColor: "white"
   },
   header: {
    backgroundColor: appTheme.colors.primaryColor,
    alignItems:"center",
    borderBottomWidth: 12,
    borderBottomColor: "#ddd"
   },
   headerText: {
    color: "black",
    fontSize:25,
    padding:20,
    marginLeft: 10
    // margin:20,
    // textAlign: "center"
   },
   profileName: {
    color: "black",
    fontSize:20,
    // padding:20,
    // marginLeft: 10
    // margin:20,
    // textAlign: "center"
   },
   topBarContainer:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
   },

   cartIconContainer:{
    backgroundColor:'#F5F5F5',
    borderRadius: 50,
    padding:10,
    elevation:5
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // height: 40
   }
   ,
   profileContainer:{
    backgroundColor:'#F5F5F5',
    // borderRadius: 50,
    padding:10,
    overflow:"hidden",
    elevation:5
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // height: 40
   },
   productContainer:{
    width: 200,
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius:10,
    overflow: "hidden"
   },
   productImage:{
    width: "100%",
    height: 150,
    resizeMode: "cover"
   },
   productName:{
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5
   },
   productPrice:{
    fontSize:14,
    color: appTheme.colors.primaryColor,
    marginBottom: 5
   }
  
  })