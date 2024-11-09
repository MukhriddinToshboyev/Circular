import "./About.css";

import ArrowIcon from "../../assets/arrow.svg";

function About() {
  return (
    <div className="about-container">
      <div className="abaut_compony">
        <div className="abaut_items">
          <h1 className="abaut_item_i">
            About Our <br /> Company
          </h1>
        </div>
        <div className="abaut_itemss">
          <div className=" abaut_item_company">
            <h1 className="abaut_item_A" id="with">
              A Company With Tradition
            </h1>
            <img src={ArrowIcon} alt="icon" />
          </div>
          <div className="gorizaltal_line"></div>
          <h1 className="abaut_item_A">Our Main Mission</h1>
          <div className="gorizaltal_line"></div>
          <h1 className="abaut_item_A">Important Values</h1>
        </div>
      </div>
      <div className="abaut_commodo">
        <div className="abaut_item">
          <h1 className="abaut_item_commodo">
            Commodo massa diceam est elitum cum diceam.
          </h1>
          <p className="abaut_item_text">
            Lorem ipsum dolor sit amet cum diceam est un parturient nascetur{" "}
            <br /> cum dolor est un aenean ligula elitum sagitarium est un
            commodo elitum.
          </p>
        </div>
        <div className="abaut_item">
          <h1 className="abaut_item_commodo">
            Elitum est un lorem ipsum diceam cum commodo.
          </h1>
          <p className="abaut_item_text">
            Lorem ipsum dolor sit amet cum diceam est un parturient nascetur cum
            dolor est un aenean ligula elitum sagitarium est un commodo elitum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
