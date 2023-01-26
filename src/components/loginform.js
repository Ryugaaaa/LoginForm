import React from "react";
import "./loginform.css";

const LoginForm = () => {
  return (
    <div className="page">
      <div className="cover">
        <form className="form-container">
          <h1 className="title">Room</h1>
          <div className="inputs">
            {/* <label> */}
            <input
              label="beka"
              className="room-input"
              type="text"
              placeholder="rooms"
            />
            {/* </label> */}
            <button className="submit-input" type="submit" value="submit">
              Submit
            </button>
            {/* <div className="Icon"></div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
