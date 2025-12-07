import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="custom-footer-inner">

        {/* left text*/}
        <div className="custom-footer-text">
          <p className="footer-title">
            도서출판 모래알
          </p>

          <p className="footer-caption">
            주소: 서울특별시 강남구 테헤란로 123, 4층<br />
            전화: 02-1234-5678<br />
            이메일: info@morae-al.com
          </p>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/booklist">도서목록</Link>
            <a href="#news">뉴스</a>
            <Link to="/contact">문의</Link>
            <Link to="/about">회사소개</Link>
          </div>

          <p className="footer-copy">
            Publication Morae-al LLC © 2025 All Rights Reserved
          </p>
        </div>

        {/* right SNS icons */}
        <div className="custom-footer-sns fancy-sns">
          <a href="#" aria-label="facebook" className="sns-btn facebook">
            <svg viewBox="0 0 24 24">
              <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.08 5.66 21.21 10.44 22v-7h-2.9v-2.93h2.9V9.85c0-2.9 1.72-4.5 4.35-4.5 1.26 0 2.58.23 2.58.23v2.84h-1.45c-1.43 0-1.88.9-1.88 1.82v2.19h3.2L16.8 15h-2.8v7C18.34 21.21 22 17.08 22 12.07z"/>
            </svg>
          </a>

          <a href="#" aria-label="instagram" className="sns-btn instagram">
            <svg viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.58 0 4.85.07 1.17.06 1.98.24 2.44.4.6.23 1.03.5 1.48.95.45.45.72.88.95 1.48.16.46.34 1.27.4 2.44.07 1.27.07 1.66.07 4.85s0 3.58-.07 4.85c-.06 1.17-.24 1.98-.4 2.44a3.6 3.6 0 0 1-.95 1.48 3.6 3.6 0 0 1-1.48.95c-.46.16-1.27.34-2.44.4-1.27.07-1.66.07-4.85.07s-3.58 0-4.85-.07c-1.17-.06-1.98-.24-2.44-.4a3.6 3.6 0 0 1-1.48-.95 3.6 3.6 0 0 1-.95-1.48c-.16-.46-.34-1.27-.4-2.44C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.06-1.17.24-1.98.4-2.44.23-.6.5-1.03.95-1.48.45-.45.88-.72 1.48-.95.46-.16 1.27-.34 2.44-.4C8.42 2.2 8.8 2.2 12 2.2zm0 3.55a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
