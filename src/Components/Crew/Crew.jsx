import "./index.css";
import { useState } from "react";
import Section from "../Section/Section";
import Navbar from "../Partials/Navbar/Navbar";
import Commander from "../Crew/Commander/Commander";
import Engineer from "../Crew/Engineer/Engineer";
import Pilot from "../Crew/Pilot/Pilot";
import Specialist from "../Crew/Specialist/Specialist";

const Crew = () => {
  const data = require("../../data.json");
  const crewData = data.crew;
  const crewMenu = crewData.map(el => el.role);
  const [crew, setCrew] = useState("Commander");

  return (
    <Section sectionId={crew}>
      <Navbar
        navList={crewMenu}
        onClick={setCrew}
        liClass="secondMenuLi nav_text"
        ulClass="secondMenuUl"
        currentCrew={crew}
      />

      {(() => {
        switch (crew) {
          case "Commander":
            return <Commander />;
          case "Mission-Specialist":
            return <Specialist />;
          case "Pilot":
            return <Pilot />;
          case "Flight-Engineer":
            return <Engineer />;

          default:
            return <Commander />;
        }
      })()}
    </Section>

  );
};

export default Crew;
