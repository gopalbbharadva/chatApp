import React from "react";
import firebase from "firebase";

function Chat(props) {
  const { uid, photo } = props.message;

  const auth = firebase.auth();
  const messageStatus = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div>
      {/* <img src={photo} alt="sorry"/> */}
      <div className="msg">
        <p >{props.message.msg}</p>
      </div>
    </div>
  );
}

export default Chat;
