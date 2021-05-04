import React, { useRef, useState } from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firestoreRef from '../fbconfig';
import Chat from './Chat';


function Chatroom(){

    const dummy=useRef();
    const auth=firebase.auth();


    let [setChat,setChatHandler]=useState('');
    const messageRef=firebase.firestore().collection("chats");
    const query=messageRef.orderBy('createdAt').limit(20);
    const [messages]=useCollectionData(query);

    const chatHandler=(e)=>{
        setChat=e.target.value;
        setChatHandler(setChat);
    }

    const formHandler=async(e)=>{
        e.preventDefault();

        const {uid}=auth.currentUser;
        await messageRef.add({
            msg:setChat,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            uid,
        })
        setChatHandler('');

        dummy.current.scrollIntoView({behaviour:"smooth"});
    }   
    return (
        <div>
            <main>
                {
                      messages && messages.map(msg => {
                        return <Chat message={msg}/>
                    })
                }
                <div ref={dummy}></div>
            </main>
            <form onSubmit={formHandler}>
                    <input value={setChat} type="text" onChange={chatHandler}
                    placeholder="Type something..."/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chatroom;