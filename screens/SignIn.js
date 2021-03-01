import React, {useState} from 'react'
import { View, Text, StyleSheet,ScrollView,Image,TextInput,TouchableOpacity } from 'react-native'

const SignIn = (props) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../assets/favicon.png')} style={{ width: 300, height: 100, resizeMode: 'contain', marginBottom: 15, alignSelf: 'center' }} />
                <TextInput value={email} onChangeText={(text) => setemail(text)} placeholder="Email" keyboardType='email-address' placeholderTextColor='grey' style={styles.input} autoFocus={true} />
                <TextInput value={password} onChangeText={(text) => setpassword(text)} placeholder="Password" placeholderTextColor='grey' style={styles.input} secureTextEntry={true} autoFocus={false} />
                <TouchableOpacity onPress={() => props.onSignIn(email, password)} style={styles.btn}>
                    <Text style={styles.paragraph}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginVertical: 10, textAlign: 'center', color: 'grey' }}>OR</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Sign Up')}>
                    <Text style={styles.paragraph}>Sign Up</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        //alignItems: 'center',
        justifyContent: 'center', 
        paddingHorizontal: 30,
        paddingTop: 25
      },
      login: {
          color: '#fff'
      },
      paragraph: {
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
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
          marginTop: 10
      }
});

export default SignIn

