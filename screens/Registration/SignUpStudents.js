import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, Picker, TouchableOpacity, Image, ScrollView, CheckBox } from 'react-native'
import { FlatList, State } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Firebase from '../../Firebase'

const SignUpStudents = (props) => {
    const [student, setstudent] = useState({
        Name: '',
        Email: '',
        contactNo: '',
        Address: '',
        Password: '',
        role: 'student'
    })

    
    return (

        <View style={styles.container}>
            <View style={styles.register}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.registerHead}>Registeration</Text>
                    <TextInput value={student.Name} returnKeyLabel="Name" onChangeText={(text) => setstudent({...student, Name: text})} placeholder="Name" placeholderTextColor='grey'
                        style={styles.input} autoFocus={true} />    
                    <TextInput value={student.Email} onChangeText={(text) => setstudent({...student, Email: text})} placeholder="Email" keyboardType='email-address'
                        placeholderTextColor='grey' style={styles.input} autoFocus={false} />
                    <TextInput value={student.contactNo} onChangeText={(text) => setstudent({...student, contactNo: text})} placeholder="Phone" placeholderTextColor='grey'
                        style={styles.input} keyboardType='number-pad' autoFocus={false} />
                    <TextInput value={student.Address} onChangeText={(text) => setstudent({...student, Address: text})} multiline={true} numberOfLines={4} placeholder="Address" placeholderTextColor='grey' style={styles.input} />
                    <TextInput value={student.Password} onChangeText={(text) => setstudent({...student, Password: text})} placeholder="Password" placeholderTextColor='grey'
                        style={styles.input} secureTextEntry={true} autoFocus={false} />
                    <TouchableOpacity style={styles.btn} onPress={()=> props.onSignUps(student)}>
                        <Text style={styles.paragraph}>Sign Up</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#36485f',
    },
    register: {
        alignSelf: 'stretch',
        paddingHorizontal: 30
    },
    registerHead: {
        color: '#fff',
        fontSize: 30,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginVertical: 20
    },
    checkboxContainer: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 15
    },
    checkbox: {
        alignSelf: "center"
    },
    label: {
        margin: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    input: {
        padding: 10,
        marginVertical: 10,
        fontSize: 20,
        color: '#fff'
    },
    btn: {
        padding: 15,
        backgroundColor: 'red',
        borderRadius: 8,
        marginTop: 20
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
});

export default SignUpStudents