import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "../App.css";


const mapContainerStyle = {
  height: '400px',
  width: '100%'
};

const center = {
  lat: 40.73061, // Default latitude
  lng: -73.935242 // Default longitude
};

const TrackPage = () => {
  return (
    <div className="tracking-page">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <h1>Track Your Order</h1>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default TrackPage;
