import "./Contact.css";

import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Dribbble from "../../assets/dribbble.svg";

function Contact() {
  return (
    <div className="contact__container">
      <section className="contact__section">
        <div className="contact__section__circular">circular</div>
        <div className="contact__section__home">
          <p className="contact__home_h">Home</p>
          <p className="contact__home_i">Abaut</p>
          <p className="contact__home_i">Team</p>
          <p className="contact__home_i">Recipes</p>
          <p className="contact__home_i">Pricing</p>
          <p className="contact__home_i">Subscribe</p>
        </div>
        <div className="contact__section__icon">
          <img src={Facebook} alt="icon" className="contact__icon" />
          <img src={Twitter} alt="icon" className="contact__icon" />
          <img src={Dribbble} alt="icon" className="contact__icon" />
        </div>
      </section>
      <footer className="contact-footer">
        <p className="contact-footer__text">
          ©Circular Copyright 2019. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Contact;
