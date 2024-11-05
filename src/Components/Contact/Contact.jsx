import "./Contact.css";

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
          <img
            className="contact__icon"
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/facebook-new.png"
            alt="facebook-new"
          />

          <img
            className="contact__icon"
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/twitter--v1.png"
            alt="twitter--v1"
          />
          <img
            className="contact__icon"
            width="50"
            height="50"
            src="https://img.icons8.com/fluency-systems-filled/50/dribbble.png"
            alt="dribbble"
          />
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
