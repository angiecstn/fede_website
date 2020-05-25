import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 43.898, lng: 11.106 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 43.898833, lng: 11.106788 }} />}
  </GoogleMap>
))

export default MyMapComponent;