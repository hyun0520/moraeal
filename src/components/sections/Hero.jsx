import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="publisher-section">
      <div className="publisher-container">
        <div className="publisher-hero">
          
          <div className="publisher-hero-text">
            <p className="publisher-tagline">작은 이야기의 힘, 모래알 출판사</p>
            <h1>당신의 이야기를 찾고 계신가요?</h1>
            <p className="publisher-hero-body">
              모래알 출판사는 작지만 깊이 있는 이야기, 새로운 시선과 목소리를 담은 책들을 독자 여러분께 전합니다.
              
            </p>
            <Link to="/about">
              <button className="publisher-primary-btn">
                출판사 소개
              </button>
            </Link>
          </div>

          <div className="publisher-hero-image">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="students"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
