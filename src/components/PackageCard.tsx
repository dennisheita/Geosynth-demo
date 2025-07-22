
import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Package, Eye, Info } from 'lucide-react';

interface PackageData {
  id: string;
  orderId: string;
  from: string;
  to: string;
  status: 'ON THE WAY' | 'DELIVERED' | 'PENDING' | 'DELAYED';
  eta: string;
  mineral: string;
  weight: string;
}

interface PackageCardProps {
  package: PackageData;
  onClick: () => void;
  isSelected?: boolean;
}

const PackageCard = ({ package: pkg, onClick, isSelected = false }: PackageCardProps) => {
  const meteorCanvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const meteorCanvas = meteorCanvasRef.current;
    if (!meteorCanvas) return;

    // Clear existing meteors
    meteorCanvas.innerHTML = '';
    
    const meteorCount = 25;
    
    for (let i = 0; i < meteorCount; i++) {
      const meteor = document.createElement('div');
      meteor.classList.add('meteor');
      
      const delay = Math.random() * 5;
      const duration = Math.random() * 6 + 3;
      const leftPosition = Math.floor(Math.random() * 300) - 300;
      const size = Math.random() * 0.5 + 0.5;
      
      meteor.style.left = `${leftPosition}px`;
      meteor.style.animationDelay = `${delay}s`;
      meteor.style.animationDuration = `${duration}s`;
      meteor.style.animation = `meteor ${duration}s linear ${delay}s infinite`;
      meteor.style.width = `${size}px`;
      meteor.style.height = `${size}px`;
      
      // Keep meteors strictly white/gray only - no color variations
      meteor.style.background = 'rgba(209, 213, 219, 0.8)';
      meteor.style.boxShadow = '0 0 1px rgba(255, 255, 255, 0.1)';
      
      meteorCanvas.appendChild(meteor);
    }
  }, []);

  const getStatusColor = (status: string) => {
    // Using Black (#080808), White (#F2F2F2), and X11 Dark Gray (#AAAAAA)
    switch (status) {
      case 'ON THE WAY': return 'bg-[hsl(0,0%,67%)]/20 text-[hsl(0,0%,67%)]';
      case 'DELIVERED': return 'bg-[hsl(0,0%,95%)]/20 text-[hsl(0,0%,95%)]';
      case 'PENDING': return 'bg-[hsl(0,0%,67%)]/20 text-[hsl(0,0%,67%)]';
      case 'DELAYED': return 'bg-[hsl(0,0%,3%)]/20 text-[hsl(0,0%,67%)]';
      default: return 'bg-[hsl(0,0%,3%)]/20 text-[hsl(0,0%,67%)]';
    }
  };

  const getProgressWidth = (status: string) => {
    switch (status) {
      case 'DELIVERED': return '100%';
      case 'ON THE WAY': return '75%';
      case 'PENDING': return '25%';
      case 'DELAYED': return '10%';
      default: return '0%';
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`max-w-xs w-full bg-[hsl(0,0%,3%)]/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border transition-all duration-300 cursor-pointer ${
        isSelected 
          ? 'border-[hsl(0,0%,95%)]/40 scale-[1.02]' 
          : 'border-[hsl(0,0%,67%)]/50 hover:border-[hsl(0,0%,67%)]/60'
      }`}
    >
      <div className="relative">
        {/* Meteor background */}
        <div 
          ref={meteorCanvasRef}
          className="absolute inset-0 bg-[hsl(0,0%,3%)]/80 overflow-hidden"
        />
        
        {/* Card content */}
        <div className="relative z-10 p-5">
          <div className="mb-4">
            <span className={`px-2 py-1 rounded-full text-xs inline-block ${getStatusColor(pkg.status)}`}>
              {pkg.mineral.toUpperCase()}
            </span>
          </div>
          
          <h2 className="text-xl font-bold text-[hsl(0,0%,95%)] mb-2">Order #{pkg.orderId}</h2>
          <div className="h-1 w-12 bg-[hsl(0,0%,67%)] mb-4 rounded-full"></div>
          
          <p className="text-[hsl(0,0%,67%)] text-sm mb-5 leading-relaxed">
            {pkg.weight} shipment from {pkg.from} to {pkg.to}. Expected delivery: {pkg.eta}
          </p>
          
          <div className="space-y-3 mb-5">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[hsl(0,0%,95%)] text-xs font-medium">STATUS</span>
                <span className="text-[hsl(0,0%,67%)] text-xs">{pkg.status}</span>
              </div>
              <div className="w-full h-1.5 bg-[hsl(0,0%,3%)]/80 rounded-full overflow-hidden">
                <div className="h-full bg-[hsl(0,0%,95%)]/70 rounded-full transition-all duration-300" style={{width: getProgressWidth(pkg.status)}}></div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-[hsl(0,0%,67%)]/50">
            <div className="flex justify-between text-sm space-x-2">
              <button className="px-4 py-2 bg-[hsl(0,0%,3%)]/80 hover:bg-[hsl(0,0%,67%)]/80 text-[hsl(0,0%,95%)] rounded-lg transition flex items-center text-xs">
                <Eye className="h-3 w-3 mr-1" />
                Details
              </button>
              <button className="px-4 py-2 bg-[hsl(0,0%,3%)]/80 hover:bg-[hsl(0,0%,67%)]/80 text-[hsl(0,0%,67%)] rounded-lg transition flex items-center text-xs">
                <Info className="h-3 w-3 mr-1" />
                Track
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
