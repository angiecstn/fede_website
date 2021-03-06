import React from 'react';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Contatti from './components/Contatti'
import About from './components/About'
import Servizi from './components/Servizi'
import MyMapComponent from './components/MyMapComponent'
import ContactLinks from './components/ContactLinks'
import PartitaIva from './components/PartitaIva';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Body></Body>
      <About></About>
      <br />
      <Servizi></Servizi>
      <br />
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDyPVcpTJOVIuVbFe0W_B4ihYIp1Fk7oUY&callback=initMap"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <Contatti></Contatti>
      <ContactLinks></ContactLinks>
      <PartitaIva></PartitaIva>
    </div>
  );
}

export default App;
