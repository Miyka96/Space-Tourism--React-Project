import "./index.css";

const Veichle = () => {
  return (
    <>
      <div className="section__wrapper animate__animated animate__fadeIn">
      <div className="img_wrapper" id="veichleImg">
          <img
            className="sectionImg"
            src={require("../../../Assets/technology/image-launch-vehicle-portrait.jpg")}
          />
        </div>
        <div className="info_box">
          <h3>THE TERMINOLOGY…</h3>
          <h1>LAUNCH VEHICLE</h1>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
    </>
  );
};

export default Veichle;
