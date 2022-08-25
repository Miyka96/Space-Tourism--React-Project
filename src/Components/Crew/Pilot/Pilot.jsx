import "./index.css";

const Pilot = () => {
  return (
    <>
      <div className="section__wrapper animate__animated animate__fadeIn">
        <div className="info_box">
          <h3>Pilot</h3>
          <h1>Victor <br/> Glover</h1>
          <p>
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </div>
        <div className="crew_wrapper">
          <img
            className="sectionImg"
            src={require("../../../Assets/crew/image-victor-glover.png")}
          />
        </div>
      </div>
    </>
  );
};

export default Pilot;
