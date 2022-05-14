import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import aviateLogo from "../Images/aviateLogo.png";
import "./Navbar.css";
import { BrowserRouter as Link, Router } from "react-router-dom";
function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      
        <img
          src={aviateLogo}
          alt="Logo"
          className="logo"
          width="20%"
          height="60%"
        />
        <nav ref={navRef}>
          <Link to="/">
            <a href="/">Blockchain</a>
          </Link>
          <a href="bitcoin"><Link to="bitcoin">
            Bitcoin
          </Link></a>
          <Link to="currencycalc">
            <a href="currencycalc">Currency Exchange Calculator</a>
          </Link>
          <Link to="visualize">
            <a href="visualize">Visualizing Transactional Data</a>
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      
    </header>
  );
}

export default Navbar;
