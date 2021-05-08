import "./App.css";
import "./fbconfig";
import React, { useREf, useEffect, useState } from "react";
import "firebase/app";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Chatroom from "./Components/Chatroom";
import Signin from "./Components/Signin";
import Signout from "./Components/Signout";
import Users from "./Components/Users";
import Signup from "./Components/Signup";


function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      {user?
        <div className="App">
          <div className="allUsers">
            <Users />
          </div>
          <div className="userChat">
            <header>
              <Signout currentUser={user}/>
            </header>
            <section>{user ? <Chatroom /> : <Signin />}</section>
          </div>
        </div>:<Signin />
      }
    </div>
  );
}
export default App;
