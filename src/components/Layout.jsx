import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../assets/Valorant_Font.ttf";
import Icon from "../assets/Valicon.jpg";
import { useRef, useState } from "react";

const Layout = () => {
  const [isHovered, setIsHovered] = useState(false);
  const titel = useRef();
  return (
    <>
      <div className="topBar">
        <NavLink
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          to={"/"}
          className="titel"
        >
          <img src={Icon} alt="Icon" />
          <div className="valoTitel">
            <div className={isHovered ? "titelHover" : ""}>Valorant</div>
            <div className={isHovered ? "titelHover" : ""}>Collector</div>
          </div>
        </NavLink>

        <div className="NavLink">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
          <NavLink className={"search"} to={"/"}>
            {<FaSearch />}
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
