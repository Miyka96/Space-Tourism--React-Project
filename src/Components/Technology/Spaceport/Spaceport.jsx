const Spaceport = () => {
  return (
    <>
      <div className="section__wrapper animate__animated animate__fadeIn">
      <div className="img_wrapper" id="spaceportImg">
          <img
            className="sectionImg"
            src={require("../../../Assets/technology/image-spaceport-portrait.jpg")}
          />
        </div>
        <div className="info_box">
          <h3>THE TERMINOLOGY…</h3>
          <h1>SPACEPORT</h1>
          <p>
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </p>
        </div>
      </div>
    </>
  );
};

export default Spaceport;
