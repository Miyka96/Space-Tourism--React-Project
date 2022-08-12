import './index.css'
import {useState} from 'react';
import Section from '../Section/Section';
import Navbar from '../Partials/Navbar/Navbar';
import Capsule from '../Technology/Capsule/Capsule';
import Spaceport from '../Technology/Spaceport/Spaceport';
import Veichle from '../Technology/Veichle/Veichle';

const Technology = () => {
    const technologyMenu = ["Capsule", "Spaceport", "Veichle"];
    const [technology, setTechnology] = useState("Capsule");

    return(
        <Section sectionId={technology}>
        <Navbar
          navList={technologyMenu}
          onClick={setTechnology}
          liClass="technologyLi"
          ulClass="technologyUl"
        />
  
        {(() => {
          switch (technology) {
            case "Capsule":
              return <Capsule />;
            case "Spaceport":
              return <Spaceport />;
            case "Veichle":
              return <Veichle />;
  
            default:
              return <Capsule />;
          }
        })()}
      </Section>
    )
}

export default Technology;