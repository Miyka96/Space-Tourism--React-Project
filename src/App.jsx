import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Partials/Navbar/Navbar";
import Section from "./Components/Section/Section";
import MenuDecoration from "./Components/Partials/MenuDecoration/MenuDecoration";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination/Destination";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";
import Button from "./Components/Partials/Button/Button";

function App() {
  const mainMenu = ["Home", "Destination", "Crew", "Technology"];
  const [section, setSection] = useState("Home");
  const explore = () => {
    setSection("Destination");
  };
  const [mobileMenu, setMobileMenu] = useState("");
  const mobileActive = () => {
    setMobileMenu("active");
    if (mobileMenu==="active") {
      setMobileMenu("")
    }
  }

  return (
    <div className="App">
      <Section
        className="animate__animated animate__fadeIn"
        sectionId={section}
      >
        <div onClick={mobileActive} class={"hamburger" + " " + mobileMenu }>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>

        <Navbar
          navList={mainMenu}
          onClick={setSection}
          liClass={"mainMenuLi nav_text"}
          ulClass={"mainMenuUl" + " " + mobileMenu}
          currentSect={section}
          mobileMenu={mobileActive}
        >
          <MenuDecoration />
        </Navbar>

        {(() => {
          switch (section) {
            case "Home":
              return (
                <Home>
                  <Button onClick={explore}>Explore</Button>
                </Home>
              );
            case "Destination":
              return <Destination />;
            case "Crew":
              return <Crew />;
            case "Technology":
              return <Technology />;

            default:
              return <Home />;
          }
        })()}
      </Section>
    </div>
  );
}

export default App;
