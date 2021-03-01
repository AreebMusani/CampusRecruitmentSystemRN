import React from 'react'
import { View, Text, TouchableOpacity,Dimensions, StyleSheet } from 'react-native'

var width = Dimensions.get('window').width; //full width

const ComHome = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={()=> props.navigation.navigate("add vacancy")}>
                <Text style={styles.paragraph}>Add Vacancy for Students</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=> props.navigation.navigate("student list")}>
                <Text style={styles.paragraph}>See All Students</Text>
            </TouchableOpacity>

            
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,
        height: 100,
        width: width - 100,
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
export default ComHome
