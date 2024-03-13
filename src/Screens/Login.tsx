import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ms, mvs } from 'react-native-size-matters'
import { Image } from 'native-base'
import appTheme from '../themes/theme'

const Login = ({navigation}:any) => {

    const [email, setEmail] = useState<any>()
    const [password, setPassword] = useState<any>()

    const navigateToHome = () => {
        navigation.navigate("Home")
    }


    const navigateToRegister = () => {
        navigation.navigate("Register")
    }

    const handleLogin = () => {
        console.log("email and password", email, password)
    }

  return (
    <View style={styles.headerContainer}>
       
       <View style={styles.imageStyle}>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.textStyle}>
      Login
      </Text>

       </View>
       <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        />
         <TextInput 
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        />
         <TouchableOpacity>

<Text style={{color:"black"}}>Forgot Password?</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={navigateToRegister}>

<Text style={{color:"black", paddingTop: 10}}>New User?</Text>
         </TouchableOpacity>
    <TouchableOpacity style={styles.loginButton} onPress={navigateToHome} >
        <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>

{/* <View > */}
<TouchableOpacity>

<Text style={{color:"black", textAlign:"center"}}>Terms and conditions</Text>
</TouchableOpacity>
{/* </View> */}
       </View>



      {/* <TouchableOpacity onPress={navigateToHome}>
       <Text> Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToRegister}>
       <Text> Register</Text>
      </TouchableOpacity> */}


    </View>
  )
}

export default Login


const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:10,
        fontSize:20,
        height:"100%",
        backgroundColor: "white"
    },
  
    imageStyle:{
        marginTop: 50,
        // justifyContent: "space-between",
        alignItems: "center",
    },
    textStyle:{
   
        fontSize: mvs(44),
        color: "black",
        fontWeight: "500",
        lineHeight: mvs(63)
    }
    , 
    inputContainer:{
        width: "80%",
        marginBottom: 20
    },
    input: {
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,

        marginBottom: 20,
        
    },
    loginButton: {
        backgroundColor: appTheme.colors.primaryColor,
        padding: 10,
        borderRadius: 5,
        marginTop:60,
        marginBottom: 10

    }
    ,loginButtonText: {
        color: "white",
        textAlign: "center"
    }

  })