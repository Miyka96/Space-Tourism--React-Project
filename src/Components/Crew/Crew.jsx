import "./index.css";
import { useState } from "react";
import Section from "../Section/Section";
import Navbar from "../Partials/Navbar/Navbar";
import Commander from "../Crew/Commander/Commander";
import Engineer from "../Crew/Engineer/Engineer";
import Pilot from "../Crew/Pilot/Pilot";
import Specialist from "../Crew/Specialist/Specialist";

const Crew = () => {
  const crewMenu = ["Commander", "Specialist", "Pilot", "Engineer"];
  const [crew, setCrew] = useState("Commander");

  return (
    <Section sectionId={crew}>
      <Navbar
        navList={crewMenu}
        onClick={setCrew}
        liClass="crewLi"
        ulClass="crewUl"
      />

      {(() => {
        switch (crew) {
          case "Commander":
            return <Commander />;
          case "Specialist":
            return <Specialist />;
          case "Pilot":
            return <Pilot />;
          case "Engineer":
            return <Engineer />;

          default:
            return <Commander />;
        }
      })()}
    </Section>
  );
};

export default Crew;
