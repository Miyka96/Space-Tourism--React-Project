import "./index.css";

const Specialist = () => {
  return (
    <>
      <div className="section__wrapper animate__animated animate__fadeIn">
        <div className="info_box">
          <h3>Mission Specialist </h3>
          <h1>MARK SHUTTLEWORTH</h1>
          <p>
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        </div>
        <div className="crew_wrapper">
          <img
            className="sectionImg"
            src={require("../../../Assets/crew/image-mark-shuttleworth.png")}
          />
        </div>
      </div>
    </>
  );
};

export default Specialist;
