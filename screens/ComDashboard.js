import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ComHome from './ComHome';
import Profile from './Profile';
import Firebase from '../Firebase'

const Tab = createMaterialBottomTabNavigator();

const ComDashboard = (props) => {
    const [myprofile, setmyprofile] = useState([])

    useEffect(() => {
        const uid = Firebase.auth().currentUser.uid;
        Firebase.database().ref('Company/' + uid + '/Myprofile').once("value", (datasnap) => {
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
                component={ComHome}
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
                    <Profile data = {myprofile}/>
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

export default ComDashboard
