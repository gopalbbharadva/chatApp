import React from "react";
import firebase from "firebase";

function Chat(props) {
  const {uid,photo}=props.message;

  const auth = firebase.auth();
  const messageStatus = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message is ${messageStatus}`}>
        <img src={photo} alt="sorry"/>
      <p>{props.message.msg}</p>
    </div>  
  );
}

export default Chat;
