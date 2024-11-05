import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="abaut_item">
        <h1 className="abaut_item_i">
          About Our <br /> Company
        </h1>
      </div>
      <div className="abaut_item">
        <br />
        <h1 className="abaut_item_commodo">
          Commodo massa diceam est elitum cum diceam.
        </h1>
        <p className="abaut_item_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis
          similique quisquam, aliquid enim incidunt exercitationem fuga sapiente
          pariatur temporibus hic voluptatibus quas sequi deleniti? Veniam enim
          nemo fugit ea.
        </p>
      </div>

      <div className="abaut_item">
        <h1 className="abaut_item_A" id="with">
          A Company With Tradition
          <div className="abaut_item_icon">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/sf-ultralight-filled/25/right.png"
              alt="right"
            />
          </div>
        </h1>

        <hr />
        <h1 className="abaut_item_A">Our Main Mission</h1>
        <hr />
        <h1 className="abaut_item_A">Important Values</h1>
      </div>
      <div className="abaut_item">
        <h1 className="abaut_item_commodo">
          Elitum est un lorem ipsum diceam cum commodo.
        </h1>
        <p className="abaut_item_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis
          similique quisquam, aliquid enim incidunt exercitationem fuga sapiente
          pariatur temporibus hic voluptatibus quas sequi deleniti? Veniam enim
          nemo fugit ea.
        </p>
      </div>
    </div>
  );
}

export default About;
