import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Dimensions } from "react-native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Firebase from '../Firebase'

var width = Dimensions.get('window').width; //full width

const Profile = (props) => {
    const [myprofile, setmyprofile] = useState(props.data);
    console.log(myprofile)
    //const [myprofile, setmyprofile] = useState([])

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Profile-Male-PNG.png')} style={{ width: 200, height: 200, marginVertical: 25 }} />
            <ScrollView>
                <View>

                    <View style={styles.item}>
                        <Text style={styles.field}>UserName:</Text>
                        <Text style={styles.values}>{myprofile.Name}</Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.field}>Email:</Text>
                        <Text style={styles.values}>{myprofile.Email}</Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.field}>Contact No:</Text>
                        <Text style={styles.values}>{myprofile.Phone}</Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.field}>Address:</Text>
                        <Text style={styles.values}>{myprofile.Address}</Text>
                    </View>

                    {myprofile.role == 'company' ? (
                        <View style={styles.item}>
                        <Text style={styles.field}>Owner Name:</Text>
                        <Text style={styles.values}>{myprofile.Owner}</Text>
                        </View>
                    ) : null}
                    <View style={styles.item}>
                        <Text style={styles.field}>Role:</Text>
                        <Text style={styles.values}>{myprofile.role}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        alignItems: 'center',
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
});


export default Profile
