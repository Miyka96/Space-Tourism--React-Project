import "./index.css";

const Europa = () => {
  return (
    <>
      <div className="section__wrapper animate__animated animate__fadeIn">
        <img
          className="sectionImg"
          src={require("../../../Assets/destination/image-europa.png")}
        />
        <div className="info_box">
          <h1>europa</h1>
          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>

          <div className="line_wrapper">
            <div className="line"></div>
          </div>

          <div className="infoTravel_box">
            <div className="infoTravel">
              <div className="infoTravel_heading">avg. distance</div>
              <div className="infoTravel_text">628 MIL. km</div>
            </div>
            <div className="infoTravel">
              <div className="infoTravel_heading">estimated travel time</div>
              <div className="infoTravel_text">3 years</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Europa;
