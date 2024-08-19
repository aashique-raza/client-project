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
    path: "#",
    pathName: "contact us",
  },
  {
    path: "#",
    pathName: "blog",
  },
  {
    path: "#",
    pathName: "training",
  },
];

function Header() {
  const [isMenuActive, setMenuActive] = useState(false);
  const[ismoreLinks,setMoreLinks]=useState(false)

  const handleMenu = () => {
    setMenuActive(!isMenuActive);
  };
  const handleMoreLinks=()=>{
    console.log('chal rha hai')
    setMoreLinks(!ismoreLinks)
  }

  return (
    <main className={`header-container relative ${isMenuActive ? 'bg': ''}  `}>
      <header className=''>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={`${isMenuActive ? "menuActive" : ""} nav-links`}>
          <Links setMenuActive={setMenuActive} isMenuActive={isMenuActive} />
          <div className="more-links">
            <span>more</span>{" "}
            <IoMdArrowDropdown className="down-arrow inline-block" />
            <ul>
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
        </nav>
        <div className={`mobile-menu ${isMenuActive ? "active" : ""}`}>
          <AiOutlineMenu onClick={handleMenu} className="ham-burger" />
          <RiCloseLargeFill onClick={handleMenu} className="close-icon" />
        </div>
      </header>

      <nav className={`${isMenuActive ? "menuActive" : "links-for-mobile"}  all-mobile-links `}>
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
        </nav>
     
    </main>


  );
}

export default Header;
