import { useState } from 'react';
import './App.css';
import Navbar from './Components/Partials/Navbar/Navbar';
import Section from './Components/Section/Section';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Crew from './Components/Crew/Crew';
import Technology from './Components/Technology/Technology';
function App() {

  const [section, setSection] = useState('Home');

  return (
    <div className="App">
      <Section sectionId={section}>

        <Navbar onClick={setSection}/>

        {(() => {
        switch (section) {

          case 'Home':
            return <Home/>;
          case 'Destination':
            return <Destination/>;
          case 'Crew':
            return <Crew/>;
          case 'Technology':
            return <Technology/>;

          default: return <Home/>;
        }
      })()}
      
      </Section>
    </div>
  );
}

export default App;
