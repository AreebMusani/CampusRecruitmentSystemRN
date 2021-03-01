import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Firebase from '../Firebase'

var width = Dimensions.get('window').width; //full width

const StudentList = (props) => {

    const [donorList, setdonorList] = useState([]);
    const [isDonor, setisDonor] = useState(false);
    const [tempList, settempList] = useState([]);
    const [arrayholder, setarrayholder] = useState([])
    
    useEffect(() => {
        const uid = Firebase.auth().currentUser.uid;
        Firebase.database().ref('Students/').on("value",(datasnap)=>{
            const data = datasnap.val();
            const fetchdata = Object.values(data);
            let items = []
            fetchdata.forEach((item) => {
                items.push(item.Myprofile)
            })
            setdonorList(items);
            setisDonor(true);
            settempList(donorList);
            setarrayholder(items);
        })
    },[])

    const ShowList = ({item}) =>{
        return(
            <ScrollView>
                <View style={styles.list} onStartShouldSetResponder={() => {props.navigation.navigate('comdetails', {details: item})}}>
                    <View style={styles.listicon}>
                        <Text style={styles.ic}>{item.Blood}</Text>
                    </View>
                    <View style={styles.listContent}>
                        <Text style={styles.text}>{item.Name}</Text>
                        <Text style={styles.text}>{item.Phone}</Text>
                        <Text style={styles.text}>{item.Address}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }

    const searchFilterFunction = text => {    
        const newData = arrayholder.filter(item => {      
          const itemData = `${item.Name.toUpperCase()}`;
          
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });
        
        setdonorList(newData);  
    };

    return (
        <View style={styles.container}>
            <View style={{paddingHorizontal: 25,paddingTop: 25}}>
                <TextInput 
                style={{fontSize: 18, color: "#fff",backgroundColor: '#FE4747',borderRadius: 15, paddingVertical: 5,opacity: 1, paddingHorizontal: 10}} 
                placeholderTextColor = "#5f4d36" 
                placeholder="Search Students Name"
                onChangeText={(text) => searchFilterFunction(text)}
                />
            </View>
            {isDonor ? (
                
                <FlatList 
                data={donorList} 
                keyExtractor={item => item.id}
                renderItem={ShowList} />
                )
             : ( <Text style={styles.text}>No Students's Available Right Now</Text>)
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36485f',
        height: '100%'
    },

    list: {
        //flex: 1,
        flexDirection: "row",
        marginVertical: 10,
        backgroundColor: '#eb4314',
        opacity: 0.8,
        padding: 10
    },
    ic:{
        backgroundColor: '#000',
        color: '#fff',
        width: 50,
        height: 50,
        borderRadius: 50,
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    listicon: {
        flexBasis: "20%",
        justifyContent: "center"
    },
    listContent: {
        flexBasis: "80%"
    },
    text:{
        fontSize: 18,
        color: '#fff'
    }
})
export default StudentList
