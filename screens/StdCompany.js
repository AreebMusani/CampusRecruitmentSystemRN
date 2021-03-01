import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

var width = Dimensions.get('window').width; //full width

const StdCompany = (props) => {
    const CompanyStudentProfile = props.route.params?.details;

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.head}>{CompanyStudentProfile.role == 'company' ? "Company's information" : "Student's information"}</Text>

                <Text style={styles.text}>Personal</Text>
                <View style={styles.item}>
                    <Text style={styles.field}>UserName:</Text>
                    <Text style={styles.values}>{CompanyStudentProfile.Name}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.field}>Email:</Text>
                    <Text style={styles.values}>{CompanyStudentProfile.Email}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.field}>Contact No:</Text>
                    <Text style={styles.values}>{CompanyStudentProfile.Phone}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.field}>Address:</Text>
                    <Text style={styles.values}>{CompanyStudentProfile.Address}</Text>
                </View>

                {CompanyStudentProfile.role == 'company' ? (
                    <View style={styles.item}>
                        <Text style={styles.field}>Company Owner:</Text>
                        <Text style={styles.values}>{CompanyStudentProfile.Owner}</Text>
                    </View>
                ) : <Text></Text>}

                <View style={styles.item}>
                    <Text style={styles.field}>Role:</Text>
                    <Text style={styles.values}>{CompanyStudentProfile.role}</Text>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        alignItems: 'center',
        paddingVertical: 10
    },
    head: {
        fontWeight: "bold",
        color: '#fd4602',
        fontSize: 35,
        textAlign: "center",
        marginVertical: 20,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
    },
    text: {
        fontSize: 25,
        color: '#02fd41',
        alignSelf: "flex-start",
        marginLeft: 10,
        fontWeight: "bold",
        borderBottomColor: '#fd02c0',
        borderBottomWidth: 2,
        opacity: 0.5,
        marginTop: 20
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        //paddingVertical: 15,
        //paddingHorizontal:10,
        borderBottomWidth: 2,
        width: width - 20,
        marginTop: 10,
        borderBottomColor: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    field: {
        flexBasis: '30%',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff'
    },
    values: {
        fontWeight: 'bold',
        fontSize: 20,
        flexBasis: '70%',
        flexWrap: 'wrap',
        alignSelf: 'center',
        color: '#f5f5f5',
    }
})

export default StdCompany
