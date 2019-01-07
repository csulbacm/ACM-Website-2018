import database, { auth, googleAuthProvider } from '../firebase/firebase'

const login = (uid) => ({
  type: 'LOGIN',
  uid
})

// Used when user does not require sign in, already signed in
export const verifyAndLogin = ({ email, uid } = {}) => {
  return (dispatch) => {
    const dbRef = database.ref('users/emails')

    // Simple verification for login email
    dbRef.once("value", snapshot => {
      let loggedIn = false

      snapshot.forEach((childSnapshot) => {
        // Stop checking
        if(loggedIn === true){ return }
        if(email === childSnapshot.val()) {
          // Verified
          loggedIn = true
          dispatch(login(uid))
        }
      })

      if(!loggedIn) {
        dispatch(startLogout())
      }
    })
  }
}
// Used to open sign in interface for user
export const startLogin = () => {
  return (dispatch) => {
    return auth.signInWithPopup(googleAuthProvider)
      .then((res) => {
        dispatch(verifyAndLogin({
          email: res.additionalUserInfo.profile.email,
          uid: res.user.uid
        }))
      })
      .catch((e) => {
        console.log('Error: ', e)
      })
  }
}

const logout = () => ({
  type: 'LOGOUT'
})
export const startLogout = () => {
  return (dispatch) => {
    return auth.signOut()
      .then(() => {
        dispatch(logout())
      })
      .catch((e) => {
        console.log('Error: ', e);
      })
  }
}
