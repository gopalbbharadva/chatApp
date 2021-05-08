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

  const [flag,setFlag]=useState(false);
  let [setChat, setChatHandler] = useState("");
  const messageRef = firebase.firestore().collection("chats");
  const query = messageRef.orderBy("createdAt").limit(30);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");


  const inputHandler=(e)=>{
      setChat=e.target.value;
      if(setChat)
      {
        setChatHandler(setChat);
        setFlag(true);
      }
      else{
        setFlag(false);
        setChatHandler('');
      }
  }
  const formHandler = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
      await messageRef.add({
        msg: setChat,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });
    setChatHandler("");
    dummy.current.scrollIntoView({ behaviour: "smooth" });
  };

  const fileHandler = (e) => {
    const fileTypes = ["image/png", "image/jpeg"];
    const selectedFile = e.target.files[0];
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError("You can only select png/jpeg file type");
    }
  };

  return (
    <div>
      <main>
        {messages &&
          messages.map((msg, index) => {
            return (
              <Chat
                key={index}
                photoRef={auth.currentUser.photoURL}
                message={msg}
              />
            );
          })}
        <div ref={dummy}></div>
      </main>
      {error && alert(`${error}`)}
      <form onSubmit={formHandler}>
        <label>
          <FontAwesomeIcon
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            className="icon"
            icon={faPaperclip}
          />
          <input type="file" onChange={fileHandler} />
        </label>
        <input
          className="inputChat"
          value={setChat}
          type="text"
          onChange={inputHandler}
          placeholder="Type something..."
        />
        <button disabled={!flag} className="submitBtn"  type="submit">
         <FontAwesomeIcon icon={faPaperPlane} className="sendImage"></FontAwesomeIcon>
        </button>
        {/* <button type="submit" disabled={!flag}>
        </button> */}
      </form>
    </div>
  );
}

export default Chatroom;
