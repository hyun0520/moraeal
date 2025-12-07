import { useState } from "react";
import booksData from "../../data/BooksData";
import BookPopup from "../../pages/BookPopup";

export default function Details() {
  const [selectedBook, setSelectedBook] = useState(null);

  // 책 5권 데이터
  const homeBooks = [...booksData]
    .reverse()   // 등록된 순서 역순
    .slice(0, 5); // 5권만 표시

  return (
    <>
      <section id="new" className="books-section">
        <h2 className="new-title">NEW</h2>

        <div className="books-grid">
          {homeBooks.map((book) => (
            <div
              key={book.id}
              className="book-card"
              onClick={() => setSelectedBook(book)}
            >
              <div className="book-image">
                <img src={book.image} alt={book.title} />
              </div>

              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pop Up */}
      <BookPopup
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />
    </>
  );
}
