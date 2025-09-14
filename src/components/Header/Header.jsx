import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IMAGES } from "../../images";
import './Header.scss';

export default function Header() {
  const [close, setClose] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setClose(true);
      } else {
        setClose(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function handleLink(path) {
    setClose(false);
    navigate(path);
  }

  return (
    <header className="header">
      <div className="header_inner">
        <button className="menu-btn" onClick={() => setClose(!close)}>
          <img src={IMAGES.menutoggle} alt="menu toggle" />
          <span>
            Menu
          </span>
        </button>
        <div className="logo">
          <Link to="/">
            <img src={IMAGES.logo} alt="Logo" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="right">
          <a className="phone" href="tel:+441234567890">
            <div className="numberdetail">
              <h4>Call Us Now!</h4>
              <h3>
                0208 - 323 - 2668
              </h3>
            </div>
            <div className="icon">
              <img src={IMAGES.mobileicon} alt="mobileicon" />
            </div>
          </a>
          <a className="whatsappheaderlink" href="https://wa.me/441234567890" target="_blank" rel="noreferrer">
            <img src={IMAGES.whatsappicon} alt="whatsappicon" />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`center-nav ${close ? "close" : ""}`}>
        <ul>
          <li><a onClick={() => handleLink("/")}>Home</a></li>
          <li><a onClick={() => handleLink("/holidays")}>Destinations</a></li>
          <li><a onClick={() => handleLink("/holidays")}>Typologies</a></li>
          <li><a onClick={() => handleLink("/holidays")}>Special Offers</a></li>
          <li><a onClick={() => handleLink("/holidays")}>Top Selling Destinations</a></li>
        </ul>
      </nav>
    </header>
  );
}
