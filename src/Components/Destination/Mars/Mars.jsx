import "./index.css";

const Mars = () => {
  return (
    <>
      <div className="section__wrapper animate__animated animate__fadeIn">
        <img
          className="planetImg"
          src={require("../../../Assets/destination/image-mars.png")}
        />
        <div className="info_box">
          <h1>Mars</h1>
          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>

          <div className="line_wrapper">
            <div className="line"></div>
          </div>

          <div className="infoTravel_box">
            <div className="infoTravel">
              <div className="infoTravel_heading">avg. distance</div>
              <div className="infoTravel_text">225 MIL. km</div>
            </div>
            <div className="infoTravel">
              <div className="infoTravel_heading">estimated travel time</div>
              <div className="infoTravel_text">9 months</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mars;
