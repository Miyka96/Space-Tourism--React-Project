import "./index.css";

const Capsule = () => {
  return (
    <>
      <div className="section__wrapper animate__animated animate__fadeIn">
        <div className="info_box">
          <h3>THE TERMINOLOGY…</h3>
          <h1>SPACE CAPSULE</h1>
          <p>
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </div>
        <div className="img_wrapper">
          <img
            className="sectionImg"
            src={require("../../../Assets/technology/image-space-capsule-portrait.jpg")}
          />
        </div>
      </div>
    </>
  );
};

export default Capsule;
