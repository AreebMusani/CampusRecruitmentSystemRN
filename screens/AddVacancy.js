import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Firebase from '../Firebase'
const AddVacancy = (props) => {
    const [book, setbook] = useState({
        id: '',
        JobTitle: '',
        JobType: '',
        YearOfExperience: '',
        NoOfVacancies: null,
        Address: '',
        LastDate: '',
        phoneNumber: 0
    })

    const AddItem = (data) => {
        const myUserId = Firebase.auth().currentUser.uid;
        const newkey = Firebase.database().ref('Company').push().key;
        const vacancy = {
            id: newkey,
            JobTitle: data.JobTitle,
            JobType: data.JobType,
            YearOfExperience: data.YearOfExperience,
            NoOfVacancies: data.NoOfVacancies,
            Address: data.Address,
            phoneNumber: data.phoneNumber,
            LastDate: data.LastDate
        }
        var updates = {};
        updates['/vacancy/' + newkey] = vacancy;
        updates['/Company/' + myUserId + '/myvacancy/' + newkey] = vacancy;
        Firebase.database().ref().update(updates)
            .then(()=>{
                alert("New Vacancy Added Successfully!")
                props.navigation.navigate("Company Panel");
            }).catch((error)=>{
                alert(error)
            })
            
    }
    return (
        <View style={styles.Addbook}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.registerHead}>Add Vacancy</Text>
                <TextInput value={book.JobTitle} onChangeText={(text) => setbook({ ...book, JobTitle: text })} placeholder="Job Title" placeholderTextColor='grey'
                    style={styles.input} autoFocus={true} />
                <TextInput value={book.YearOfExperience} onChangeText={(text) => setbook({ ...book, YearOfExperience: text })} placeholder="Year Of experience"
                    placeholderTextColor='grey' style={styles.input} autoFocus={false} />
                <TextInput value={book.NoOfVacancies} onChangeText={(text) => setbook({ ...book, NoOfVacancies: text })} placeholder="No of Vacancies" placeholderTextColor='grey'
                    style={styles.input} keyboardType='number-pad' autoFocus={false} />
                <TextInput value={book.JobType} onChangeText={(text) => setbook({ ...book, JobType: text })} placeholder="Job Type" placeholderTextColor='grey'
                    style={styles.input} autoFocus={false} />
                <TextInput value={book.Address} onChangeText={(text) => setbook({ ...book, Address: text })} placeholder="Office Address" placeholderTextColor='grey'
                    style={styles.input} autoFocus={false} />
                <TextInput value={book.phoneNumber} onChangeText={(text) => setbook({ ...book, phoneNumber: text })} placeholder="Contact No" placeholderTextColor='grey'
                    style={styles.input} keyboardType='number-pad' autoFocus={false} />
                <TextInput value={book.LastDate} onChangeText={(text) => setbook({ ...book, LastDate: text })} placeholder="Last Date for Apply" placeholderTextColor='grey'
                    style={styles.input} autoFocus={false} />
                <TouchableOpacity style={styles.btn} onPress={() => AddItem(book)}>
                    <Text style={styles.paragraph}>Add Vacancy</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    Addbook: {
        alignSelf: 'stretch',
        padding: 20,
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#36485f',
    },
    registerHead: {
        color: '#fff',
        fontSize: 30,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 20
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
})
export default AddVacancy
