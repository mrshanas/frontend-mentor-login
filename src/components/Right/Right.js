import React from "react";

const Right = () => {
  return (
    <div className="app__right">
      <div className="app__button">
        <button>Try it free 7 days then $20/mo thereafter</button>
      </div>
      <div className="app__form">
        <form>
          <input type="text" name="firstname" placeholder="First Name" />
          <br />
          <input type="text" name="lastname" placeholder="Last Name" />
          <br />
          <input type="email" name="email" placeholder="Email Address" />
          <br />
          <input type="password" name="password" placeholder="Password" />
          <br />
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking this button you are agreeing to our{" "}
            <a href="#">Terms and services</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Right;
