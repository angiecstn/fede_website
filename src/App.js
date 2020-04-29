import React from 'react';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Contatti from './components/Contatti'
import About from './components/About'
import Servizi from './components/Servizi'
import ContactLinks from './components/ContactLinks'

// import MapContainer from './components/MyMapComponent'



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Body></Body>
      <About></About>
      <br />
      <Servizi></Servizi>
      <br />
      <Contatti></Contatti>
      <ContactLinks></ContactLinks>
    </div>
  );
}

export default App;
