import React from "react";
import pop from "../images/pop.png";

const Users = () => {
  return (
    <div>
      <div className="user">
        <img className="profileImage" src={pop} alt="sorry" />
        <p style={{marginLeft:"1rem",color:"black"}}>User 1</p>
      </div>
      <div className="user">
        <img className="profileImage" src={pop} alt="sorry" />
        <p style={{marginLeft:"1rem",color:"black"}}>User 2</p>
      </div>
      <div className="user">
        <img className="profileImage" src={pop} alt="sorry" />
        <p style={{marginLeft:"1rem",color:"black"}}>User 3</p>
      </div>
      <div className="user">
        <img className="profileImage" src={pop} alt="sorry" />
        <p style={{marginLeft:"1rem",color:"black"}}>User 4</p>
      </div>
    </div>
  );
};

export default Users;
