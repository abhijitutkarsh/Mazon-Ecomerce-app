import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ms, mvs } from 'react-native-size-matters'
import { Image } from 'native-base'
import appTheme from '../themes/theme'

const Register = ({navigation}:any) => {
    const [email, setEmail] = useState<any>()
    const [password, setPassword] = useState<any>()

    const navigateToHome = () => {
        navigation.navigate("Home")
    }


    const navigateToLogin = () => {
        navigation.navigate("Login")
    }

    const handleLogin = () => {
        console.log("email and password", email, password)
    }

  return (
    <View style={styles.headerContainer}>
       
       <View style={styles.imageStyle}>
        <Image source={require('../assets/logo.png')}
        style={{height: 180,
        width: 250}}
        />
        <Text style={styles.textStyle}>
      Register
      </Text>

       </View>
       <View style={styles.inputContainer}>
       <TextInput 
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setEmail(text)}
        />
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
           <TextInput 
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        />
       
       
         <TouchableOpacity onPress={navigateToLogin}>

<Text style={{color:"black", paddingTop: 10}}>Already a User?</Text>
         </TouchableOpacity>
    <TouchableOpacity style={styles.loginButton} onPress={navigateToHome} >
        <Text style={styles.loginButtonText}>Register</Text>
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

export default Register


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