import { useState } from "react";
import BooksData from "../data/BooksData";
import BookPopup from "./BookPopup";
import "./../styles/publisher.css";

export default function BookList() {
  const [selectedBook, setSelectedBook] = useState(null);


  const homeBooks = [...BooksData]
    .reverse()   // 등록된 순서 역순 (최신이 앞)

  return (
    <section className="booklist-wrap">
      <div className="booklist-container">
        <h2 className="section-title">BEST SELLER</h2>

        <div className="book-grid">
          {homeBooks.map((book) => (
            <div
              className="book-card"
              key={book.id}
              onClick={() => setSelectedBook(book)}
            >
              <img src={book.image} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Home에서도 기존과 동일하게 팝업 작동 */}
      <BookPopup
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />
    </section>
  );
}
