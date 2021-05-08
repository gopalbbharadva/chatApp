import React from "react";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";

function Signout(props) {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const signOut = () => {
    const _islogOut = window.confirm(
      `Are you sure you want to logout ${user.displayName}`
    );
    if (_islogOut) auth.signOut();
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          className="profileImage"
          src={user.photoURL}
          alt="sorry not available"
        />
        <p style={{ color: "black" }}>{user.displayName}</p>
        {auth.currentUser && (
          <button className="logoutBtn"  onClick={signOut}>
            <FontAwesomeIcon
              style={{ height: "1.5rem", width: "1.5rem", marginRight: "1rem" }}
              icon={faSignOutAlt}
            ></FontAwesomeIcon>
          </button>
        )}
      </div>
    </div>
  );
}

export default Signout;
