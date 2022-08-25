import "./index.css";

const Commander = () => {
  return (
    <>
      <div className="section__wrapper animate__animated animate__fadeIn">
        <div className="info_box">
          <h3>Commander</h3>
          <h1>Douglas <br/> Hurley</h1>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <div className="img_wrapper">
          <img
            className="sectionImg"
            src={require("../../../Assets/crew/image-douglas-hurley.png")}
          />
        </div>
      </div>
    </>
  );
};

export default Commander;
