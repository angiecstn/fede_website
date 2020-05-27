import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={20}
    defaultCenter={{ lat: 43.898833, lng: 11.106788 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 43.898795, lng: 11.106878 }} />}
  </GoogleMap>
))

export default MyMapComponent;