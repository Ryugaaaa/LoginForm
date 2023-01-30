import React from "react";
import "./Loginform.css";

const LoginForm = () => {
  return (
    <div className="page">
      <div className="cover">
        <form className="form-container">
          <h1 className="title">Room</h1>
          <div className="inputs">
            {/* <label> */}
            <input className="room-input" type="text" placeholder="rooms" />
            {/* </label> */}
            <button
              onClick={myFunction}
              className="submit-input"
              type="submit"
              value="submit"
            >
              Submit
            </button>
            {/* <div className="Icon"></div> */}
          </div>
        </form>
      </div>
    </div>
  );

  function myFunction() {
    alert("No Rooms Free");
  }
};

export default LoginForm;
