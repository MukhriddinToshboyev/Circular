import "./Team.css";
import TeamImage1 from "../../assets/Team-member1.png";
import TeamImage2 from "../../assets/Team-member2.png";
import TeamImage3 from "../../assets/Team-member3.png";

function Team() {
  return (
    <div className="team_cotainer">
      <div className="team_container_div">
        <header className="team_header">
          <p className="t_header_text">A Team of Professionals</p>
        </header>
        <section className="team_section">
          <div className="t_section_imgs">
            <img className="t_section_img" src={TeamImage1} alt="img" />
            <h1 className="t_section_img_name">David Matthews</h1>
            <p className="t_section_img_text">
              Outpatient Gastrointestinal Dietitian
            </p>
          </div>
          <div className="t_section_imgs">
            <img className="t_section_img" src={TeamImage2} alt="img" />
            <h1 className="t_section_img_name">Kaley Simpson</h1>
            <p className="t_section_img_text">Fitness Dietitian</p>
          </div>
          <div className="t_section_imgs" id="img3">
            <img
              className="t_section_img"
              id="img"
              src={TeamImage3}
              alt="img"
            />
            <h1 className="t_section_img_name">Elaine Richards</h1>
            <p className="t_section_img_text">Functional Dietitian</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Team;
