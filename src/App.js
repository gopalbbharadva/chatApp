import './App.css';
import './fbconfig';
import React,{useREf,useEffect,useState} from 'react';
import 'firebase/app'
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Chatroom from './Components/Chatroom';
import Signin  from './Components/Signin';
import Signout from './Components/Signout';


function App() {
  
  const auth=firebase.auth();
  const [user]=useAuthState(auth);

  return (
    <div className="App">
      <header>
        <Signout/>
      </header>
      <section>
         {user?<Chatroom/>:<Signin/>}
      </section> 
    </div>
  );
}
export default App;
