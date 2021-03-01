import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as StoreProvider, useSelector, useDispatch } from 'react-redux'
import store from './store'
import SignIn from './screens/SignIn'
import Registration from './screens/Registration'
import Firebase from './Firebase'
import StdDashboard from './screens/StdDashboard'
import ComDashboard from './screens/ComDashboard'
import StdCompany from './screens/StdCompany'
import AddVacancy from './screens/AddVacancy';
import StudentList from './screens/StudentList';
import SearchJob from './screens/searchJob';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [role, setrole] = useState('company')

  useEffect(() => {

    Firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        setIsAuthenticated(true);
        const uid = Firebase.auth().currentUser.uid;
        Firebase.database().ref('Students/').once("value", (datasnap) => {
          const fetch = Object.keys(datasnap.val());
          fetch.forEach((item) => {
            console.warn(item, uid)
            if (item == uid) {
              setrole("student");
            }
          })
        })
        console.log(role);

      }
      else {
        setIsAuthenticated(false)
      }

    })
  }, [])

  const handleSignUp = (user) => {
    //console.log(user)
    Firebase.auth().createUserWithEmailAndPassword(user.Email, user.Password)
      .then((result) => {
        const uid = result.user.uid;
        if (user.role == "company") {
          const data = {
            id: uid,
            Name: user.Name,
            Email: user.Email,
            Phone: user.contactNo,
            Address: user.Address,
            Owner: user.OwnerName,
            Password: user.Password,
            role: user.role
          };
          Firebase.database().ref('Company/' + uid + '/Myprofile').set(data)
            .then(() => {
              alert("User Created Successfully!")
              setIsAuthenticated(true);
            }).catch((error) => {
              alert(error)
            })
        } else {
          const data = {
            id: uid,
            Name: user.Name,
            Email: user.Email,
            Phone: user.contactNo,
            Address: user.Address,
            Password: user.Password,
            role: user.role
          };
          Firebase.database().ref('Students/' + uid + '/Myprofile').set(data)
            .then(() => {
              alert("Student Created Successfully!")
              setIsAuthenticated(true);
            }).catch((error) => {
              alert(error)
            })
        }
      })
      .catch((error) => {
        alert(error)
      });

    setIsAuthenticated(true);
  };

  const handleSignIn = (email, password) => {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        const uid = result.user.uid;
        Firebase.database().ref('Students/').once("value", (datasnap) => {
          const fetch = Object.keys(datasnap.val());
          fetch.forEach((item) => {
            console.warn(item, uid)
            if (item == uid) {
              setrole("student");
            }
          })
        })
        alert("Login Successfuly")
        setIsAuthenticated(true);
      })
      .catch((error) => {
        alert(error)
      });
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setrole("company")
  };
  
return (
  <NavigationContainer>
    <Stack.Navigator>

      {isAuthenticated ? (
        <>
        
          {role == "student" ?
              <>
            <Stack.Screen name="Student Panel" options={{
              headerStyle: {
                backgroundColor: 'red',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerRight: () => (
                <Button onPress={handleSignOut} title="Sign Out" />
              )
            }}>
              {(props) => (
                <StdDashboard {...props}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Job Vacancy" component={SearchJob} />
            <Stack.Screen name="comdetails" component={StdCompany} />
          </>
              : <>
            <Stack.Screen name="Company Panel" options={{
              headerStyle: {
                backgroundColor: 'red',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerRight: () => (
                <Button onPress={handleSignOut} title="Sign Out" />
              )
            }}>
              {(props) => (
                <ComDashboard {...props} onSignOut={handleSignOut} />
              )}
            </Stack.Screen>

            <Stack.Screen name="add vacancy" component={AddVacancy} />
            <Stack.Screen name="student list" component={StudentList} />
            <Stack.Screen name="comdetails" component={StdCompany} />
          </>
              }

            

        </>   
      ) : (
          <>
            <Stack.Screen name="Sign In">
              {(props) => (
                <SignIn {...props} onSignIn={handleSignIn} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Sign Up">
              {(props) => (
                <Registration {...props} onSignUp={handleSignUp} />
              )}
            </Stack.Screen>
          </>
        )}
    </Stack.Navigator>
  </NavigationContainer>
);
}


