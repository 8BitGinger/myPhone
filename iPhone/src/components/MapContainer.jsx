import React, { useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places']; // Load the libraries for the Places service

const MapContainer = () => {
  const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = useRef(null);

  const handleMapClick = (event) => {
    setCenter(event.latLng.toJSON());
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div style={{ height: '470px', width: '100%' }} className="map-container">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center}
        zoom={13}
        onClick={handleMapClick}
        mapContainerClassName="map-container"
        ref={mapRef}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapContainer;
