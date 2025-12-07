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
          {/* Details -> Book List */}
          <Link to="/booklist">도서목록</Link>
          {/* News */}
          <a href="#news">뉴스</a>

          {/* Contact */}
          <Link to="/contact">문의</Link>
          {/* About */}
          <Link to="/about">회사소개</Link>
        </nav>

      </div>
    </header>
  );
}
