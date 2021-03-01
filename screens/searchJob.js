import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Button, Linking } from 'react-native'
import { FlatList, RotationGestureHandler, TextInput } from 'react-native-gesture-handler';
import Firebase from '../Firebase'

const SearchJob = (props) => {
    const [totalVacancies, settotalVacancies] = useState(0)
    const [donorList, setdonorList] = useState([]);
    const [isDonor, setisDonor] = useState(false);
    const [tempList, settempList] = useState([]);
    const [arrayholder, setarrayholder] = useState([])
    
    useEffect(() => {
        const uid = Firebase.auth().currentUser.uid;
        Firebase.database().ref('vacancy/').on("value",(datasnap)=>{
            const data = datasnap.val();
            settotalVacancies(Object.keys(data).length)
            const fetchdata = Object.values(data);            
            let items = []
            fetchdata.forEach((item) => {
                items.push(item)
            })
            setdonorList(items);
            setisDonor(true);
            settempList(donorList);
            setarrayholder(items);
        })
    },[])

    const ShowList = ({item}) =>{
        var num = 1;
        return(
            <ScrollView>

                <View style={styles.list}>
                    <View style={styles.listicon}>
                        <Text style={styles.ic}>{num++}</Text>
                    </View>
                    <View style={styles.listContent}>
                        <Text style={styles.text}>{item.JobTitle}</Text>
                        <Text style={styles.text}>{item.JobType}</Text>
                        <Text style={styles.text}>{item.Address}</Text>
                        <Text style={styles.text}>Last Date: {item.LastDate}</Text>
                        <Text style={styles.text}>Experience: {item.YearOfExperience}</Text>

                        <Button title="Call Now" onPress={()=>Linking.openURL(`tel:${item.phoneNumber}`)}/>                        
                    </View>
                </View>
            </ScrollView>
        )
    }
    const searchFilterFunction = text => {    
        const newData = arrayholder.filter(item => {      
          const itemData = `${item.JobTitle.toUpperCase()}`;
          
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
                placeholder="Search Job Title"
                onChangeText={(text) => searchFilterFunction(text)}
                />
            </View>
            <View>
                <Text style={styles.text}>Total No of Vancies: {totalVacancies}</Text>
            </View>
            {isDonor ? (
                
                <FlatList 
                data={donorList} 
                keyExtractor={item => item.id}
                renderItem={ShowList} />
                )
             : ( <Text style={styles.text}>No Vacancy's Available Right Now</Text>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36485f',
        height: '100%'
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

export default SearchJob
