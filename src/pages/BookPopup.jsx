import { useState } from "react";
import "../styles/publisher.css";

export default function BookPopup({ selectedBook, setSelectedBook }) {
  const [activeTab, setActiveTab] = useState("intro");

  if (!selectedBook) return null;

  return (
    <div className="popup-overlay" onClick={() => setSelectedBook(null)}>
      <div className="popup-page" onClick={(e) => e.stopPropagation()}>

        <button className="popup-close" onClick={() => setSelectedBook(null)}>
          ✕
        </button>

        <div className="detail-top">
          <div className="detail-image">
            <img src={selectedBook.image} alt={selectedBook.title} />
          </div>

          <div className="detail-info">
            <h2 className="detail-title-row">
              <span className="main-title">
                {selectedBook.title}
              </span>
              &nbsp;
              {selectedBook.subtitle && (
                <span className="detail-subtitle">
                  {selectedBook.subtitle}
                </span>
              )}
            </h2>

            <div className="detail-table">
            <div className="row">
              <span className="label">저자</span>
              <span className="value">{selectedBook.author}</span>
            </div>

            <div className="row">
              <span className="label">출간일</span>
              <span className="value">{selectedBook.publishDate}</span>
            </div>

            <div className="row">
              <span className="label">사양</span>
              <span className="value">{selectedBook.spec}</span>
            </div>

            <div className="row">
              <span className="label">ISBN</span>
              <span className="value">{selectedBook.isbn}</span>
            </div>

            <div className="row">
              <span className="label">정가</span>
              <span className="value price">{selectedBook.price}</span>
            </div>
          </div>


            <button
                className="detail-buy"
                onClick={() => {
                    if (selectedBook.buyLink) {
                    window.location.href = selectedBook.buyLink;
                    } else {
                    alert("구매 링크가 아직 등록되지 않았습니다.");
                    }
                }}
                >
                구매하기
            </button>
          </div>
        </div>

        {/* 탭 버튼 */}
        <div className="detail-tabs">
          <button
            className={activeTab === "intro" ? "active" : ""}
            onClick={() => setActiveTab("intro")}
          >책 소개</button>

          <button
            className={activeTab === "author" ? "active" : ""}
            onClick={() => setActiveTab("author")}
          >저자 소개</button>

          <button
            className={activeTab === "index" ? "active" : ""}
            onClick={() => setActiveTab("index")}
          >목차</button>
        </div>

        {/* ✅ 탭 내용 */}
        <div className="detail-content">
          {activeTab === "intro" && (
            <>
              <p className="highlight">{selectedBook.highlight}</p>
              <p>{selectedBook.description}</p>
            </>
          )}

          {activeTab === "author" && (
            <div className="author-section">

              {/* 1번 저자 */}
              {selectedBook.authorHighlight && (
                <div className="author-box">
                  <p className="highlight author-highlight">
                    {selectedBook.authorHighlight}
                  </p>
                  <p>{selectedBook.authorIntro}</p>
                </div>
              )}

              {/* 2번 저자(역자) */}
              {selectedBook.translatorHighlight && (
                <div className="author-box">
                  <p className="highlight author-highlight">
                    {selectedBook.translatorHighlight}
                  </p>
                  <p>{selectedBook.translatorIntro}</p>
                </div>
              )}

            </div>
          )}

          {activeTab === "index" && (
            <pre style={{ whiteSpace: "pre-line" }}>
              {selectedBook.index}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
