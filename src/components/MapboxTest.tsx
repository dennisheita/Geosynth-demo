import React, { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGVubmlzaGVpdGEiLCJhIjoiY21iOTZlN3pyMGU0MjJqc2Iyb21maWo2NCJ9.BiMFneNIv8OenQL73MaKMg';

const MapboxTest = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: mapRef.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [18.5, -22.5],
      zoom: 5,
    });
    return () => map.remove();
  }, []);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default MapboxTest; 