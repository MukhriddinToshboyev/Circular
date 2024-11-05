import "./Header.css";
import HeaderImage from "/src/assets/header-graphics.png";

function Header() {
  return (
    <>
      <div className="Container">
        <div className="header_container">
          {/* Main header */}
          <div className="header_vertikal_text">
            <p className="vertikal_text">SCROLL DOWN</p>
          </div>
          <header className="header">
            <ul className="header_items">
              <li className="header_circular">circular</li>
              <li className="header_item, home">Home</li>
              <li className="header_item">Abaut</li>
              <li className="header_item">Team</li>
              <li className="header_item">Recipes</li>
              <li className="header_item">Pricing</li>
              <li className="header_item">Subscribe</li>
              <button className="header_buttun">Contact Us</button>
            </ul>
          </header>

          {/* Main section */}
          <section className="section">
            <div className="section_items">
              <h1 className="section_about">
                Personalized <br /> Recipes
              </h1>
              <p className="section_text">
                Some short description should be here about the <br />
                product. It can be super short, two or three rows of text <br />
                should be enough.
              </p>
              <button className="section_button">Book Free Appointment</button>
            </div>
            <aside className="aside">
              <img className="aside_img" src={HeaderImage} alt="img" />
            </aside>
          </section>
        </div>
      </div>
    </>
  );
}

export default Header;
