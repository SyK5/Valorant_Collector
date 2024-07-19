import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "../assets/Valorant_Font.ttf";
import Icon from "../assets/Valicon.jpg";
import { useRef, useState } from "react";

const Layout = () => {
  const [pfeilHover, setIpfeilHover] = useState(false);
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
            <div className={isHovered ? "titelHover" : ""}>VALORANT</div>
            <div className={isHovered ? "titelHover" : ""}>COLLECTOR</div>
          </div>
        </NavLink>

        <div className="NavLink">
          <NavLink
            onMouseEnter={() => setIpfeilHover(true)}
            onMouseLeave={() => setIpfeilHover(false)}
            to={"skins"}
          >
            SKINS{" "}
            {
              <IoIosArrowDown
                className={pfeilHover ? "pfeilHover pfeil" : "pfeil"}
              />
            }
          </NavLink>
          <NavLink to={"news"}>NEWS</NavLink>
          <NavLink to={"armory"}>ARMORY</NavLink>
          <NavLink className={"search"} to={"/"}>
            {<FaSearch className="loope" />}
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
