import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing_container">
      <div className="pricing_conytainer_div">
        <header className="pricing_header">
          <h1 className="pricing_header_text">Affordable Prices</h1>
        </header>
        <div className="pricing_section_aside">
          <div className="pricing_section_container">
            <section className="pricing_section_items">
              <div className="pricing_section_item">
                <div className="pricing_section_number">
                  <p className="pricing_section_3">3</p>
                </div>
                <h1 className="pricing_monthly">Monthly Recipes</h1>
              </div>
              <div>
                <hr />
              </div>
              <div className="pricing_sum">
                <p className="dollor">$</p>
                <p className="pricing_sum_99">
                  99
                  <span className="pricing_sum_999">.99</span>
                </p>

                <p className="pricing_sum_text">/ Per Month</p>
              </div>
              <div className="pricing_advantage">
                <p className="pricing_check">✔</p>
                <p className="pricing_get">
                  Get tasty, healthy and unique recipes every <br /> month
                </p>
              </div>
              <div className="pricing_advantage">
                <p className="pricing_check">✔</p>
                <p className="pricing_get">
                  Weekly sessions with our nutritionists
                </p>
              </div>
              <div className="pricing_advantage">
                <p className="pricing_check">✔</p>
                <p className="pricing_get">Advanced nutrion plans</p>
              </div>
              <div className="pricing_advantage">
                <p className="pricing_check">✔</p>
                <p className="pricing_get">Paperback nutrition book</p>
              </div>
              <div className="pricing_button">
                <button className="pricing_button_now">Get Started Now</button>
              </div>
            </section>
          </div>
          <div className="pricing_aside_container">
            <aside className="pricing_aside">
              <div className="pricing_aside_imgs">
                <img
                  className="pricing_aside_img"
                  src="/src/assets/Pricing-image1.png"
                  alt="img"
                />
                <h1 className="pricing_aside_text">
                  Are you looking for a <br /> customized plan?
                </h1>
              </div>
              <hr className="hr" />
              <div className="pricing_aside_information">
                <div className="pricing_aside_phone">
                  <p className="pricing_phone">Phone Number</p>
                  <p className="pricing_number">90-011-74-94</p>
                </div>
                <div className="pricing_aside_phone">
                  <p className="pricing_phone">Email Address </p>
                  <p className="pricing_number">atoshboyev331@gmail.com</p>
                </div>
              </div>
              <hr />
              <div className="pricing_aside_request">
                <h1>Request a Quote</h1>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
