import BooksData from "../data/BooksData";
import "./../styles/publisher.css";

export default function BookList() {
  return (
    <section className="booklist-wrap">
        <div className="booklist-container">
            <h2 className="section-title">BEST SELLER</h2>

            <div className="book-grid">
            {BooksData.map((book) => (
                <div className="book-card" key={book.id}>
                <img src={book.image} alt={book.title} />
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                </div>
            ))}
            </div>
        </div>
    </section>

  );
}
