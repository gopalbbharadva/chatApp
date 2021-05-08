import React, { useRef, useState } from "react";
import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firestoreRef from "../fbconfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Chat from "./Chat";

function Chatroom() {
  const dummy = useRef();
  const auth = firebase.auth();

  let [setChat, setChatHandler] = useState("");
  const messageRef = firebase.firestore().collection("chats");
  const query = messageRef.orderBy("createdAt").limit(30);
  const [messages] = useCollectionData(query,{idField:'id'});

  const formHandler = async (e) => {
    e.preventDefault();

    const { uid,photoURL } = auth.currentUser;
    await messageRef.add({
      msg: setChat,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });
    setChatHandler('');

    dummy.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div>
      <main>
        {messages &&
          messages.map((msg,index) => {
            return <Chat key={index}  photoRef={auth.currentUser.photoURL} 
            message={msg} />;
          })}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={formHandler}>
          <button className="sendImage">
              <FontAwesomeIcon icon={faPaperclip}
              style={{ height: "1.5rem", width: "1.5rem", color: "#9CA3AF" }} >
              </FontAwesomeIcon>
          </button>
        <input
        className="inputChat"
          value={setChat}
          type="text"
          onChange={(e)=> setChatHandler(e.target.value)}
          placeholder="Type something..."
        />
        <button className="submitBtn" type="submit">
          <FontAwesomeIcon
            style={{ height: "1.5rem", width: "1.5rem", color: "#10B981" }}
            icon={faPaperPlane}
          ></FontAwesomeIcon>
        </button>
        {/* <button type="submit" disabled={!flag}>
        </button> */}
      </form>
    </div>
  );
}

export default Chatroom;
