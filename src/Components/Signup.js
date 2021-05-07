import { useState } from "react";
import React from "react";
import firebase from "firebase";
import Chatroom from "./Chatroom";

const Signup = () => {
  let [_isLogin, setLogin] = useState(true);
  let [profileName, setProfileName] = useState("");
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  const signupBtn = async () => {
    await firebase.firestore().collection("users").add({
      displayname: profileName,
      username: userName,
      password: password,
    });
    setProfileName("");
    setUserName("");
    setPassword("");
  };

  const changeHandler = () => {
    _isLogin = !_isLogin;
    setLogin(_isLogin);
  };
  return (
    <div className="entryContainer">
      {_isLogin ? (
        <div className="signupContainer">
          <input
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            className="signupField"
            type="text"
            placeholder="Enter profile name"
          />
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="signupField"
            type="text"
            placeholder="Enter username"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
          />
          <div className="btns">
            <button onClick={signupBtn} className="signUp">
              {_isLogin ? "Sign up" : "Sign in"}
            </button>
            <small>Or</small>
            <small className="toggleSign" onClick={changeHandler}>
              Sign in
            </small>
          </div>
        </div>
      ) : (
        <div className="signupContainer">
          <input
            className="signupField"
            type="text"
            placeholder="Enter username"
          />
          <input type="password" placeholder="Enter password" />
          <div className="btns">
            <button className="signUp">
              {_isLogin ? "Sign up" : "Sign in"}
            </button>
            <small>Or</small>
            <small className="toggleSign" onClick={changeHandler}>
              {_isLogin ? "Sign in" : "Sign up"}
            </small>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
