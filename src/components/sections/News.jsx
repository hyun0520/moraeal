import React from "react";

export default function News() {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      caption: "새로운 교육 프로그램이 시작되었습니다!",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
      caption: "학생들과 함께한 즐거운 토론 활동",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02",
      caption: "다음 주 행사 일정 공지드립니다.",
    },
  ];

  return (
    <section
      id="news"
      className="publisher-container news-section"
      style={{ marginTop: "80px" }}
    >
      <div className="publisher-section-header">
        <h2>NEWS</h2>
        <p>인스타그램 업데이트, 공지 및 새로운 게시물.</p>
      </div>

      <div className="news-card-grid">
        {posts.map((post) => (
          <div key={post.id} className="news-card">
            <img src={post.image} className="news-card-img" />
            <p className="news-card-caption">{post.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
