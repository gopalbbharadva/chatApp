import React from 'react'
import firebase from 'firebase';


function Signout() {

    const auth=firebase.auth();
    return auth.currentUser && (
            <button onClick={() => auth.signOut()}>Sign out</button>
    )
}

export default Signout;