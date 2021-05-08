import React from "react";
import firebase from "firebase";
import Signup from "./Signup";
import google from "../images/search.png";
import signinImage from "../images/login.png";

function Signin() {
  const auth = firebase.auth();
  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div className="home">
      {/* <button onClick={googleSignIn}></button> */}
      <img
        style={{
          height: "25rem",
          width: "30rem",
          margin: "1rem",
          borderRadius: "1rem",
        }}
        src={signinImage}
      />
      <div onClick={googleSignIn} className="sub-home">
        <img src={google} className="googleIcon" alt="sry" />
        <p>SignIn</p>
      </div>
    </div>
  );
}

export default Signin;
