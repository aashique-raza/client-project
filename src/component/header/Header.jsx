import "./header.css";
import logo from "../../../public/logo.avif";
import Links from "./links/Links";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import LoginBtn from "./LoginBtn";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";

const moreLinks = [
  {
    path: "/contact-us",
    pathName: "contact us",
  },
  {
    path: "/blog",
    pathName: "blog",
  },
  {
    path: "/training",
    pathName: "training",
  },
];

function Header() {
  const [isMenuActive, setMenuActive] = useState(false);
  const[ismoreLinks,setMoreLinks]=useState(false)

  const handleMenu = () => {
    setMenuActive(!isMenuActive);
    setMoreLinks(false)
  };
  const handleMoreLinks=()=>{
    // alert('chal rha hai')
    setMoreLinks(!ismoreLinks)
  }

  return (
    <main className={`header-container  ${isMenuActive ? "bg" : ""}  `}>
      <header className="">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={`${isMenuActive ? "menuActive" : " nav-links"} `}>
          <Links setMenuActive={setMenuActive}  />
          <div className="more-links">
            <span onClick={isMenuActive && handleMoreLinks}>more</span>{" "}
            <IoMdArrowDropdown onClick={isMenuActive && handleMoreLinks} className={`  down-arrow inline-block`} />
            <ul className={ismoreLinks ? 'show-drop-down' : ''}>
              {moreLinks.map((link) => {
                return (
                  <li key={link.pathName} onClick={ isMenuActive && handleMenu}>
                    <Link to={link.path}>{link.pathName}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="login-button">
            {" "}
            <LoginBtn />
          </div>
        </nav>
        <div className={`mobile-menu ${isMenuActive ? "active" : ""}`}>
          <AiOutlineMenu onClick={handleMenu} className="ham-burger" />
          <RiCloseLargeFill onClick={handleMenu} className="close-icon" />
        </div>
      </header>
    </main>
  );
}

export default Header;

{
  /* <nav className={`${isMenuActive ? "menuActive" : "links-for-mobile"}  all-mobile-links `}>
<Links setMenuActive={setMenuActive} isMenuActive={isMenuActive} />
<div className="more-links">
  <span onClick={handleMoreLinks}>more</span>{" "}
  <IoMdArrowDropdown onClick={handleMoreLinks} className="down-arrow inline-block" />
  <ul className={`${ismoreLinks ? 'isMoreLinksActive' :''}`}>
    {moreLinks.map((link) => {
      return (
        <li key={link.pathName}>
          <Link to={link.path}>{link.pathName}</Link>
        </li>
      );
    })}
  </ul>
</div>
<div className="login-button">
  {" "}
  <LoginBtn />
</div>
</nav> */
}
