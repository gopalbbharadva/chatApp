import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import dummy from "../images/dummy.png";
import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Users = () => {
  let [usr, setUser] = useState([]);

  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const firebaseDb = firebase.firestore();
  // let data = [];

  firebaseDb
      .collection("users")
      .onSnapshot(snap =>{
        setUser(snap.docs.map(item =>{
          return item.data().displayname;
        }))
      })

  return (
    <div>
        {usr.map((usrname,index) => {
          return (
            <div key={index} className="user"> 
              <img className="profileImage" src={dummy} alt="sorry" />
              <p style={{ marginLeft: "1rem", color: "black" }}>{usrname}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Users;
