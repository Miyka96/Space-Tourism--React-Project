import { useState } from 'react';
import './App.css';
import Navbar from './Components/Partials/Navbar/Navbar';
import Section from './Components/Section/Section';
function App() {

  const [section, setSection] = useState('Home');

  return (
    <div className="App">
      <Section sectionId={section}>
        <Navbar onClick={setSection}/>
      </Section>
    </div>
  );
}

export default App;
