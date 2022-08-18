import "./index.css";

const Titan = () => {
  return (
    <>
      <div className="section__wrapper animate__animated animate__fadeIn">
        <img
          className="planetImg"
          src={require("../../../Assets/destination/image-titan.png")}
        />
        <div className="info_box">
          <h1>titan</h1>
          <p>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>

          <div className="line_wrapper">
            <div className="line"></div>
          </div>

          <div className="infoTravel_box">
            <div className="infoTravel">
              <div className="infoTravel_heading">avg. distance</div>
              <div className="infoTravel_text">1.6 BIL. km</div>
            </div>
            <div className="infoTravel">
              <div className="infoTravel_heading">estimated travel time</div>
              <div className="infoTravel_text">7 years</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Titan;
