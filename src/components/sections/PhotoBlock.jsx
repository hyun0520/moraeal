export default function PhotoBlock() {
  return (
    <section className="publisher-section">
      <div className="publisher-container">

        <div className="publisher-photo-block">
          <div className="publisher-photo-block-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
              alt="classroom"
            />
          </div>

          <div className="publisher-photo-block-text">
            <h2>All voices are welcome here!</h2>
            <p>
              We believe that every student deserves a safe, welcoming space
              to share their ideas.
            </p>
            <p className="publisher-quote">“Debate It. Don’t Hate It.”</p>
          </div>
        </div>

      </div>
    </section>
  );
}
