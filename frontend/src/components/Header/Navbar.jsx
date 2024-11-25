import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logoVirtual from "../../../public/logo-Virtual.svg";
import "./NavBar.css";

function Navbar() {
  const [showLinks, setShowLinks] = React.useState(false);
  const [showLogo, setShowLogo] = React.useState(false);
  const controlLogo = () => {
    if (window.scrollY > 200) {
      setShowLogo(true);
    } else setShowLogo(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlLogo);
    return () => {
      window.removeEventListener("scroll", controlLogo);
    };
  }, [showLogo]);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav
      className={`navBar ${
        showLinks ? "showNav" : "hideNav"
      } navBar ${showLogo} && 'navBar'`}
    >
      <div className={`${showLogo && "hidden"}`}>
        <Link to="/">
          <img className="logo" src={logoVirtual} alt="logo" />
        </Link>
      </div>
      <ul className="navBarLinks">
        <li className="navBarItem slideInDown-1">
          <Link className="navBarLink" to="/" onClick={handleShowLinks}>
            Home
          </Link>
        </li>
        <li className="navBarItem slideInDown-2">
          <Link className="navBarLink" to="gallery" onClick={handleShowLinks}>
            Gallery
          </Link>
        </li>
        <li className="navBarItem slideInDown-3">
          <Link
            className="navBarLink"
            to="highlights"
            onClick={handleShowLinks}
          >
            Highlights
          </Link>
        </li>
        <li className="navBarItem slideInDown-4">
          <Link className="navBarLink" to="about" onClick={handleShowLinks}>
            About
          </Link>
        </li>
      </ul>
      <button className="navBurger" type="button" onClick={handleShowLinks}>
        {" "}
        <span className="burgerLine" />
      </button>
    </nav>
  );
}

export default Navbar;
