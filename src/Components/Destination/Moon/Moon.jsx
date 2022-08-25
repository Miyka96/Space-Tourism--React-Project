import "./index.css";

const Moon = () => {
  return (
    <>
      <div className="section__wrapper animate__animated animate__fadeIn">
        <img
          className="sectionImg"
          src={require("../../../Assets/destination/image-moon.png")}
        />
        <div className="info_box">
          <h1>Moon</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>

          <div className="line_wrapper">
            <div className="line"></div>
          </div>

          <div className="infoTravel_box">
            <div className="infoTravel">
                <div className="infoTravel_heading">avg. distance</div>
                <div className="infoTravel_text">384,400 km</div>
            </div>
            <div className="infoTravel">
                <div className="infoTravel_heading">estimated travel time</div>
                <div className="infoTravel_text">3 days</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moon;
