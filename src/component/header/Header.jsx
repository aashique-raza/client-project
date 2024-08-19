import "./header.css";
import logo from "../../../public/logo.avif";
import Links from "./links/Links";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import LoginBtn from "./LoginBtn";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLargeFill } from "react-icons/ri";

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
  return (
    <main className="header-container">
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-links">
          <Links />
          <div className="more-links">
            <span>more</span> <IoMdArrowDropdown className="down-arrow inline-block" />
            <ul >
              {moreLinks.map((link) => {
                return (
                  <li  key={link.pathName}><Link to={link.path}>
                  {link.pathName}
                </Link></li>
                );
              })}
            </ul>
          </div>
          <div className="login-button">
            {" "}
            <LoginBtn />
          </div>
        </nav>
        <div className=" mobile-menu">
          <AiOutlineMenu />
          <RiCloseLargeFill />
        </div>
      </header>
    </main>
  );
}

export default Header;
