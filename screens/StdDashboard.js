import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './Profile';
import StdHome from './StdHome';
import Firebase from '../Firebase'

const Tab = createMaterialBottomTabNavigator();

const StdDashboard = (props) => {
    const [myprofile, setmyprofile] = useState([])

    useEffect(() => {
        const uid = Firebase.auth().currentUser.uid;
        Firebase.database().ref('Students/' + uid + '/Myprofile').once("value", (datasnap) => {
            const data = datasnap.val();
            setmyprofile(data);
        })

    }, [])
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#fff"
            barStyle={{ backgroundColor: 'red' }}
        >
            <Tab.Screen
                name="Home"
                component={StdHome}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                //component={Profile}
                children={()=>(
                    <Profile data={myprofile}/>
                )}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default StdDashboard
