// src/pages/AboutPage.jsx
import React from "react";
import Layout from "../components/Layout";
import "../styles/publisher.css";

export default function AboutPage() {
  return (
    <Layout>
      {/* 🔥 Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-text">
          <h1>도서출판 모래알</h1>
          <p>
            아이들의 상상력과 배움의 기초를 쌓는 출판사,
            <br />
            즐겁고 가치 있는 ‘학습의 세계’를 만들어갑니다.
          </p>
        </div>
      </section>

      {/* 🔥 소개 본문 Section */}
      <section className="about-content">
        <h2>출판사 소개</h2>
        <p>
          지난 1916년부터 역사를 이어온 도서출판 모래알은 교육과 문화를 함께 성장시키는
          출판사로서, 오랜 시간 동안 독자와 함께 호흡하며 다양한 콘텐츠를 제작해 왔습니다.
          창의력과 사고력을 키우는 양질의 책을 제공하며 교육적 가치를 실현하는 데
          앞장서고 있습니다.
        </p>

        <p>
          앞으로도 모래알은 변화하는 시대에 맞춰 새로운 콘텐츠 개발과 교육 환경 개선에
          힘쓰며, 독자에게 더욱 가치 있는 경험을 제공할 수 있도록 성장해 나가겠습니다.
        </p>

        {/* History Section */}
        <div className="about-history">
          <h3>회사 연혁</h3>

          <ul>
            <li>
              <span className="year">2020s</span>
              교육 콘텐츠 확장 및 디지털 학습 시스템 구축
            </li>
            <li>
              <span className="year">2010s</span>
              아이교육 시리즈 출간 및 베스트셀러 다수 배출
            </li>
            <li>
              <span className="year">2000s</span>
              어린이 창작 그림책 분야 진출
            </li>
            <li>
              <span className="year">1990s</span>
              출판사 전문 교육 라인업 정비 및 확대
            </li>
            <li>
              <span className="year">1980s</span>
              어린이 문학·교육 출판부 설립
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
