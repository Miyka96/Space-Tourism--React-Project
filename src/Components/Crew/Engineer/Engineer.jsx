import "./index.css";

const Engineer = () => {
  return (
    <>
      <div className="section__wrapper animate__animated animate__fadeIn">
        <div className="info_box">
          <h3>Flight Engineer</h3>
          <h1>Anousheh Ansari</h1>
          <p>
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        </div>
        <div className="img_wrapper">
          <img
            className="sectionImg"
            src={require("../../../Assets/crew/image-anousheh-ansari.png")}
          />
        </div>
      </div>
    </>
  );
};

export default Engineer;
