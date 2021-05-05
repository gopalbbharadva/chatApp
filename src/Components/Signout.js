import React from "react";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Signout() {
  const auth = firebase.auth();
  return (
    auth.currentUser && (
      <button className="logoutBtn" onClick={() => auth.signOut()}>
        <FontAwesomeIcon style={{height: "1.5rem",width: "1.5rem",marginRight:"1rem"}} icon={faSignOutAlt}></FontAwesomeIcon>
      </button>
    )
  );
}

export default Signout;
