import "./Recipes.css";

function Recipes() {
  return (
    <div className="recipes_container">
      <div className="recipes_icon">
        <div>
          <div className="recipes_icon_1">
            <img
              className="recipes_icon_11"
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/circled.png"
              alt="circled"
            />
          </div>
          <div className="recipes_icon_2">
            <img
              className="recipes_icon_22"
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/circled.png"
              alt="circled"
            />
            <img
              className="recipes_icon_22"
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/circled.png"
              alt="circled"
            />
            <img
              className="recipes_icon_22"
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/circled.png"
              alt="circled"
            />
          </div>
        </div>
        <div>
          <div className="recipes_arrow1">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/android/24/collapse-arrow.png"
              alt="collapse-arrow"
            />
          </div>
          <div className="recipes_arrow2">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/windows/32/expand-arrow--v1.png"
              alt="expand-arrow--v1"
            />
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="recipes_header">
        <div className="recipes_header_text">
          <h1 className="r_header_item_popular">Popular Recipes</h1>
        </div>
        <div className="recipes_header_text">
          <p className="r_header_item_view">
            View All Recipes
            <img
              className="r_header_item_text1"
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/long-arrow-right.png"
              alt="long-arrow-right"
            />
          </p>
        </div>
      </header>
      {/* Main section */}
      <section className="recipes_section_container">
        <div className="recipes_section">
          <div className="recipes_text">
            <p className="recipes_text_recom"> RECOMMENDED FOR LOSING WEIGHT</p>
            <h1 className="recipes_text_scrambled">
              Scrambled eggs with <br /> humus, focaccia and <br />
              garlic.
            </h1>
          </div>
          <div className="recipes_statistics">
            <div className="recipes_statistic">
              <p className="recipes_statistic_number">993</p>
              <p className="recipes_statistic_text">
                Calories
                <span className="recipes_statistic_text1">(kcal)</span>
              </p>
            </div>
            <div className="recipes_statistic">
              <p className="recipes_statistic_number">
                20
                <span className="recipes_statistic_number1">.50</span>
              </p>
              <p className="recipes_statistic_text">
                Protein
                <span className="recipes_statistic_text1">(g)</span>
              </p>
            </div>
            <div className="recipes_statistic">
              <p className="recipes_statistic_number">
                18
                <span className="recipes_statistic_number1">.50</span>
              </p>
              <p className="recipes_statistic_text">
                Carbs
                <span className="recipes_statistic_text1">(g)</span>
              </p>
            </div>
            <div className="recipes_statistic">
              <p className="recipes_statistic_number">
                8<span className="recipes_statistic_number1">.60</span>
              </p>
              <p className="recipes_statistic_text">
                Fat
                <span className="recipes_statistic_text1">(g)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="recipes_img">
          <img
            className="recipes_img_i"
            src="/src/assets/Recipes-image.png"
            alt="img"
          />
        </div>
      </section>
    </div>
  );
}

export default Recipes;
