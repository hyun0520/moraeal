import React, { useEffect, useState } from "react";
import logoImg from "../../assets/moraeal-logo.png";
import { Link } from "react-router-dom";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-small" : "header-large"}`}>
      <div className="header-inner">

        {/* Home 로고 */}
        <div className="header-logo">
          <Link to="/">
            <img src={logoImg} alt="도서출판 모래알" className="header-logo-img" />
          </Link>
        </div>

        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/booklist">Details</Link>
          
          <a href="#news">News</a>

          {/* Contact → 독립 페이지 이동 */}
          <Link to="/contact">Contact</Link>

          <Link to="/about">About</Link>
        </nav>

      </div>
    </header>
  );
}
