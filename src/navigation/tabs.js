import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View } from 'react-native';
import appTheme from '../themes/theme';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
     
         screenOptions={{
            tabBarStyle:{
                position: 'absolute',
                bottom:15,
                left:20,
                right:20,
                backgroundColor: appTheme.colors.navColor,
                height: 55,

                ...styles.shadow
            },
            tabBarLabel: ""

        }}
        
    >
      <Tab.Screen name="Home" component={Home}
        options={{
            tabBarIcon: ({focused}) => {
                return <View style={focused && styles.container}>
                    <View style={focused && styles.circle}>

                    <Icon name="home"  size ={30} color={ focused ? 'white' : "#989898"} />
                    </View>
                </View>


            }
            ,headerShown: false
        }}
      />
      <Tab.Screen name="Login" component={Login}
        options={{
            tabBarIcon: ({focused}) => {
                return <View style={focused && styles.container}>
                    <View style={focused && styles.circle}>

                    <Icon name="favorite"  size ={30} color={ focused ? 'white' : "#989898"} />
                    </View>
                </View>


            }
            ,headerShown: false

        }}
      />
      <Tab.Screen name="Register" component={Register}
        options={{
            tabBarIcon: ({focused}) => {
                return <View style={focused && styles.container}>
                    <View style={focused && styles.circle}>

                    <Icon name="shopping-cart"  size ={30} color={ focused ? 'white' : "#989898"} />
                    </View>
                </View>

            }
            ,headerShown: false

        }}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        transform: [{scale : 1.1}]
    },
    circle:{
        backgroundColor: "#AB792D",
        borderRadius: 50,
        padding:5,
        elevation:5
    },
    shadow: {
        shadowColor: "#AB792D",
        shadowOffset:{
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation:5
    }
})

export default MyTabs