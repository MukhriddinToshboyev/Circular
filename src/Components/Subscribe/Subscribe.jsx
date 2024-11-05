import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe_container">
      <footer className="subscribe_footer">
        <div className="subscribe_footer_life">
          <h2 className="subscribe_start">Start improving your life.</h2>
          <h1 className="subscribe_now">Subscribe now</h1>
        </div>
        <div className="subscribe_adress">
          <input
            className="subscribe_email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter  email address"
            required
          />
          <button className="subscribe">Subscribe</button>
        </div>
      </footer>
    </div>
  );
}

export default Subscribe;
