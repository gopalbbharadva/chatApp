import React from 'react'
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function Signin(){

    const auth=firebase.auth();
    const googleSignIn=()=>{
        const provider=new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <button onClick={googleSignIn}>  Google signin</button>
        </div>
    )
}

export default Signin;