import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters';

const Home = (props :any) => {

    const navigation = props;

    const navigateToLogin = () => {
        // console.log("navigation", navigation.navigation.navigate)
        navigation.navigation.navigate("Login")
    }

  return (
    <View>
        <Text style={styles.headerContainer}>
            HOME SCREEN
        </Text>
  
      <TouchableOpacity onPress={navigateToLogin}>
       <Text> Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:10,
        fontSize:20
    },
    analyticsCardContainer: {
        width: 122, paddingHorizontal: 10,
        height:130,
        marginRight: 9, flexGrow: 1,
        shadowOffset: { height: ms(4), width: -ms(4) },
        shadowOpacity: 0.25,
        shadowRadius: ms(4),
        elevation: ms(4),
        borderColor:'black',
        // paddingLeft:20,
        // ,backgroundColor: COLORS.primary,
        borderRadius: 15,
    },
    percStyle: {
        marginTop: 15,
    },
    saparator: {
        backgroundColor: "gray",
        marginTop: 15
    },
    arrowIconStyle:{ 
        position: "absolute", 
        top: 10, 
        right: 10 
    },
    onBoarding:{ 
        marginTop: 20, 
        paddingBottom: 20 
    }
  
  })