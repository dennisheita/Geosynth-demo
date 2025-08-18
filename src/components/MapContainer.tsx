
import React, { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

interface MapDetails {
  style: string;
  accessToken: string;
  center?: [number, number];
  zoom?: number;
}

interface MapContainerProps {
  selectedMineral: string;
  selectedPackage: string | null;
  mapDetails: MapDetails;
}

const MapContainer = ({ selectedMineral, selectedPackage, mapDetails }: MapContainerProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = mapDetails.accessToken;
    const map = new mapboxgl.Map({
      container: mapRef.current!,
      style: mapDetails.style,
      center: mapDetails.center || [0, 0],
      zoom: mapDetails.zoom || 4,
    });
    return () => map.remove();
    // Only re-run when style, accessToken, center, or zoom changes
  }, [mapDetails.style, mapDetails.accessToken, mapDetails.center, mapDetails.zoom]);

  return (
    <div className="flex-1 relative bg-black rounded-2xl overflow-hidden h-full">
      {/* Mapbox map */}
      <div ref={mapRef} className="absolute inset-0" style={{ width: '100%', height: '100%' }} />
      {/* Map overlay UI elements */}
      <div className="absolute top-4 right-4 bg-[#121212]/90 backdrop-blur-sm rounded-xl p-3 border border-white/10">
        <div className="text-white/70 text-xs uppercase tracking-wide mb-1">Active Filter</div>
        <div className="text-white font-medium capitalize">{selectedMineral}</div>
      </div>
    </div>
  );
};

export default MapContainer;
