export default function Announcement() {
  return (
    <section className="publisher-section">
      <div className="publisher-announcement fancy-announcement">
        <div className="publisher-announcement-inner">
          <span className="announce-badge">NEW</span>
          <span className="announce-text">
            도서출판 모래알의 봄 신간이 출간되었습니다!
          </span>
          <a href="#new" className="announce-link">
            지금 확인하기 →
          </a>
        </div>
      </div>
    </section>
  );
}