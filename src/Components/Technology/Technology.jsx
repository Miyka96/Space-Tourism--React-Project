import './index.css'
import {useState} from 'react';
import Section from '../Section/Section';
import Navbar from '../Partials/Navbar/Navbar';
import Capsule from '../Technology/Capsule/Capsule';
import Spaceport from '../Technology/Spaceport/Spaceport';
import Veichle from '../Technology/Veichle/Veichle';

const Technology = () => {
    const data= require('../../data.json');
    const technologyData= data.technology
    const technologyMenu = technologyData.map(el=>el.name);
    const [technology, setTechnology] = useState("Launch-vehicle");

    return(
        <Section sectionId={technology}>
        <Navbar
          navList={technologyMenu}
          onClick={setTechnology}
          liClass="secondMenuLi nav_text"
          ulClass="destinationUl"
          currentTechnology={technology}
        />
  
        {(() => {
          switch (technology) {
            case "Space-capsule":
              return <Capsule />;
            case "Spaceport":
              return <Spaceport />;
            case "Launch-vehicle":
              return <Veichle />;
  
            default:
              return <Capsule />;
          }
        })()}
      </Section>
    )
}

export default Technology;