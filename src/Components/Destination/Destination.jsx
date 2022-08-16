import "./index.css";
import { useState } from "react";
import Section from "../Section/Section";
import Navbar from "../Partials/Navbar/Navbar";
import Moon from "../Destination/Moon/Moon";
import Mars from "../Destination/Mars/Mars";
import Europa from "../Destination/Europa/Europa";
import Titan from "../Destination/Titan/Titan";

const Destination = () => {
  const data = require("../../data.json");
  const destinations = data.destinations;
  const destinationMenu= destinations.map(el => el.name);
  const [destination, setDestination] = useState("Moon");


  return (
    <Section sectionId={destination}>
      <Navbar
        navList={destinationMenu}
        onClick={setDestination}
        liClass="destinationLi"
        ulClass="destinationUl"
      ></Navbar>

      {(() => {
        switch (destination) {
          case "Moon":
            return <Moon />;
          case "Mars":
            return <Mars />;
          case "Europa":
            return <Europa />;
          case "Titan":
            return <Titan />;

          default:
            return <Moon />;
        }
      })()}
    </Section>
  );
};

export default Destination;
