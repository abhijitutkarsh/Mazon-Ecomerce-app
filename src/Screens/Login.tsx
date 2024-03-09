import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

const Login = ({navigation}:any) => {


    const navigateToHome = () => {
        navigation.navigate("Home")
    }


    const navigateToRegister = () => {
        navigation.navigate("Register")
    }

  return (
    <View>
        <Text style={styles.headerContainer}>
            LOGIN SCREEN
        </Text>
      <TouchableOpacity onPress={navigateToHome}>
       <Text> Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToRegister}>
       <Text> Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login


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