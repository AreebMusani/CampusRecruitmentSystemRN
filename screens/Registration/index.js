import React, {useState} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignUpCompany from './SignUpCompany';
import SignUpStudents from './SignUpStudents';

const Tab = createMaterialTopTabNavigator();

const Registration = (props) => {
    const f = props.onSignUp;
    return (
        <Tab.Navigator>
            <Tab.Screen name="Student">
                {(props)=>(
                    <SignUpStudents {...props} onSignUps={f}/>
                )}
            </Tab.Screen>

            <Tab.Screen name="Company">
                {(props)=>(
                    <SignUpCompany {...props} onSignUps={f}/>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default Registration