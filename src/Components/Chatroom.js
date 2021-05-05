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
  let [flag, setFlag] = useState(false);
  const messageRef = firebase.firestore().collection("chats");
  const query = messageRef.orderBy("createdAt").limit(20);
  const [messages] = useCollectionData(query);

  const chatHandler = (e) => {
    if (e.target.value) {
      setChat = e.target.value;
      setChatHandler(setChat);
      flag = true;
      setFlag(flag);
    } else {
      flag = false;
      setFlag(flag);
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;
    await messageRef.add({
      msg: setChat,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    });
    setChatHandler(" ");
    setFlag(false);

    dummy.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div>
      <main>
        {messages &&
          messages.map((msg) => {
            return <Chat message={msg} />;
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
          value={setChat}
          type="text"
          onChange={chatHandler}
          placeholder="Type something..."
        />
        <button className="submitBtn" type="submit" disabled={!flag}>
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
