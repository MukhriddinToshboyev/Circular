import "./Recipes.css";

import ArrowIcon from "../../assets/arrow.svg";
import SlidersIcon from "../../assets/Reciope-sliders.svg";
import ArrowsIcon from "../../assets/Recipes-arrows.svg";
import RecipesImg from "../../assets/Recipes-image2.png";

function Recipes() {
  return (
    <div className="recipes_container">
      <div className="recipes_icon">
        <div className="recipes_icon_sliders">
          <img src={SlidersIcon} alt="icon" />
        </div>
        <div className="recipes_icon_arrows">
          <img src={ArrowsIcon} alt=" icon" />
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
            <img src={ArrowIcon} alt="icon" className="reicpes_arrow_icon" />
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
          <img src={RecipesImg} alt="img" />
        </div>
      </section>
    </div>
  );
}

export default Recipes;
