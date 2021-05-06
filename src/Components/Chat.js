import React from "react";
import firebase from "firebase";

function Chat(props) {
  const { uid} = props.message;

  const auth = firebase.auth();
  const messageStatus = uid === auth.currentUser.uid ? "sent" : "received";
  const time=props.message.createdAt.toDate();
  let newDate=new Date(time*1000)
  let hours=newDate.getHours();
  let minutes=newDate.getMinutes();
  const finalTime=hours+':'+minutes;

  return (
    <div>
      {/* {console.log(finalTime)} */}
      {/* <img src={photo} alt="sorry"/> */}
      <div className={`message ${messageStatus}`}>
        <div className="msg">
          <p style={{margin:"0",padding:"0.5rem",fontSize:"0.9rem"}}>{props.message.msg}</p>
          <small className="msgTime">
            {finalTime}</small>
        </div>
      </div>
    </div>
  );
}

export default Chat;
