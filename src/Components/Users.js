import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import pop from "../images/pop.png";
import firebase from 'firebase';
import { useCollectionData } from "react-firebase-hooks/firestore";

const Users = () => {


  const [usr,setUer]=useState([]);
  
  const auth=firebase.auth();
  const [user]=useAuthState(auth);
  const usersRef=firebase.firestore().collection("users");
  const usrs=usersRef.onSnapshot(snap => {
    const names=snap.docs.map(item =>{
      const usernames=item.data();
      return usernames;
    })
  });

  return (
    <div>
      <div className="user">
        <img className="profileImage" src={user.photoURL} alt="sorry" />
        <p style={{marginLeft:"1rem",color:"black"}}>{user.displayName}</p>
      </div>
      <div className="user">
        <img className="profileImage" src={user.photoURL} alt="sorry" />
        <p style={{marginLeft:"1rem",color:"black"}}>{user.displayName}</p>
      </div>
    </div>
  );
};

export default Users;
