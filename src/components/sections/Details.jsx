import { useState } from "react";
import booksData from "../../data/BooksData";
import BookPopup from "../../pages/BookPopup";


export default function Details() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <section className="books-section">
        <h2 className="new-title">NEW</h2>

        <div className="books-grid">
          {booksData.map((book) => (
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

      {/* ✅ 팝업은 여기서만 띄움 */}
      <BookPopup
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />
    </>
  );
}
