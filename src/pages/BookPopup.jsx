import { useState } from "react";

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
            <h2 className="detail-title">| {selectedBook.title}</h2>

            <div className="detail-table">
              <div className="row">
                <span className="label">저자</span>
                <span>{selectedBook.author}</span>
              </div>
              <div className="row">
                <span className="label">출간일</span>
                <span>{selectedBook.publishDate}</span>
              </div>
              <div className="row">
                <span className="label">사양</span>
                <span>{selectedBook.spec}</span>
              </div>
              <div className="row">
                <span className="label">ISBN</span>
                <span>{selectedBook.isbn}</span>
              </div>
              <div className="row">
                <span className="label">정가</span>
                <span className="price">{selectedBook.price}</span>
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

        {/* ✅ 탭 버튼 */}
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
           <>
                {selectedBook.authorHighlight && (
                <p className="highlight author-highlight">
                    {selectedBook.authorHighlight}
                </p>
                )}
                <p>{selectedBook.authorIntro}</p>
           </>
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
