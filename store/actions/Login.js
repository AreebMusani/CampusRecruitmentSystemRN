import Firebase from '../../Firebase'

const changeUserName = () => {
    console.log("sds")
    alert("working actions")
    //return dispatch => dispatch({type: 'ADD', payload: 'Ali'})
}

const SignupUser = (user) => {
    console.log(user)
    Firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });

    return dispatch => dispatch({type: ActionTypes.SignupUser, payload: user})
}

const SigninUser = (user) => {
    Firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((result) =>{
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });

    return dispatch => dispatch({type: ActionTypes.SigninUser, payload: user})
    
}

const SignOut = () => {
    Firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
    });

    return dispatch => dispatch({type: ActionTypes.SignOut})
    
}

export default {SignupUser, SigninUser, SignOut, changeUserName}