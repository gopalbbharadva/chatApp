import React from 'react'
import firebase from 'firebase';


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