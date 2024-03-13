import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { ms, scale } from 'react-native-size-matters';
import appTheme from '../themes/theme';

const Home = (props :any) => {

    const navigation = props;

    const navigateToLogin = () => {
        // console.log("navigation", navigation.navigation.navigate)
        navigation.navigation.navigate("Login")
    }

  return (
    <View style={styles.container}>
        <View style={{paddingVertical:scale(30)}}>

            
        </View>
        
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
    color: "white",
    fontSize:25,
    padding:20,
    margin:20,
    textAlign: "center"
   }
  
  })