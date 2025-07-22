
import React from 'react';
import { Package, MapPin, Clock, Truck } from 'lucide-react';

interface InfoBarProps {
  selectedPackage: any;
}

const InfoBar = ({ selectedPackage }: InfoBarProps) => {
  if (!selectedPackage) {
    return (
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#1A1A1A]/90 backdrop-blur-sm px-6 py-3 rounded-2xl text-white shadow-xl border border-white/10">
        <div className="flex items-center space-x-3">
          <Package className="w-4 h-4 text-white/60" />
          <span className="text-sm text-white/70">Select a package to view details</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#1A1A1A]/90 backdrop-blur-sm px-8 py-4 rounded-2xl text-white shadow-xl border border-white/10 animate-fade-in">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <Package className="w-4 h-4 text-white/60" />
          <span className="font-semibold">Order #{selectedPackage.orderId}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-white/60" />
          <span className="text-sm text-white/80">
            {selectedPackage.from} → {selectedPackage.to}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-white/60" />
          <span className="text-sm text-white/80">ETA: {selectedPackage.eta}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Truck className="w-4 h-4 text-white/60" />
          <span className="text-sm text-white/80">{selectedPackage.status}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
