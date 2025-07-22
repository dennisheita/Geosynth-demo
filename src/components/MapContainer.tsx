
import React from 'react';

interface MapContainerProps {
  selectedMineral: string;
  selectedPackage: string | null;
}

const MapContainer = ({ selectedMineral, selectedPackage }: MapContainerProps) => {
  return (
    <div className="flex-1 relative bg-black rounded-2xl overflow-hidden">
      {/* Placeholder for Mapbox */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
            <div className="w-8 h-8 border-t-2 border-white/60 rounded-full animate-spin"></div>
          </div>
          <div className="text-white/60 text-lg font-medium mb-2">Map Loading</div>
          <div className="text-white/40 text-sm">
            Tracking {selectedMineral} shipments
            {selectedPackage && ` • Package ${selectedPackage}`}
          </div>
        </div>
      </div>
      
      {/* Map overlay UI elements */}
      <div className="absolute top-4 right-4 bg-[#121212]/90 backdrop-blur-sm rounded-xl p-3 border border-white/10">
        <div className="text-white/70 text-xs uppercase tracking-wide mb-1">Active Filter</div>
        <div className="text-white font-medium capitalize">{selectedMineral}</div>
      </div>
    </div>
  );
};

export default MapContainer;
