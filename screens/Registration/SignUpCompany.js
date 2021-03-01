import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,ScrollView,TextInput } from 'react-native'

const SignUpCompany = (props) => {
    const [company, setcompany] = useState({
        Name: '',
        OwnerName: '',
        Email: '',
        contactNo: '',
        Address: '',
        Password: '',
        role: 'company'
    })

    return (
        <View style={styles.container}>
            <View style={styles.register}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.registerHead}>Registeration</Text>
                    <TextInput value={company.Name} returnKeyLabel="Name" onChangeText={(text) => setcompany({...company, Name: text})} placeholder="Company Name" placeholderTextColor='grey'
                        style={styles.input} autoFocus={true} />
                        <TextInput value={company.OwnerName} onChangeText={(text) => setcompany({...company, OwnerName: text})} placeholder="Company Owner Name" keyboardType='email-address'
                        placeholderTextColor='grey' style={styles.input} autoFocus={false} />    
                    <TextInput value={company.Email} onChangeText={(text) => setcompany({...company, Email: text})} placeholder="Company Email" keyboardType='email-address'
                        placeholderTextColor='grey' style={styles.input} autoFocus={false} />
                    <TextInput value={company.contactNo} onChangeText={(text) => setcompany({...company, contactNo: text})} placeholder="Company Contact Number" placeholderTextColor='grey'
                        style={styles.input} keyboardType='number-pad' autoFocus={false} />
                    <TextInput value={company.Address} onChangeText={(text) => setcompany({...company, Address: text})} multiline={true} numberOfLines={4} placeholder="Company Address" placeholderTextColor='grey' style={styles.input} />
                    <TextInput value={company.Password} onChangeText={(text) => setcompany({...company, Password: text})} placeholder="Password" placeholderTextColor='grey'
                        style={styles.input} secureTextEntry={true} autoFocus={false} />
                    <TouchableOpacity style={styles.btn} onPress={()=> props.onSignUps(company)}>
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



export default SignUpCompany
