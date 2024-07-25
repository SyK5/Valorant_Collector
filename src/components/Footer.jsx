import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="foot foot1">
          <NavLink className={"footA"} to={"about"}>
            About
          </NavLink>
        </div>
        <div className="foot foot2">
          <NavLink className={"footA"} to={"contact"}>
            Contact
          </NavLink>
        </div>

        <form className="FootForm" action="">
          <input
            className="FootForm"
            type="text"
            name="search"
            id=""
            placeholder="SEARCH ..."
          />
        </form>
      </div>
      <div className="zeh">
        © 2024 ValorantCollector.com All rights reserved.
      </div>
    </>
  );
};

export default Footer;
