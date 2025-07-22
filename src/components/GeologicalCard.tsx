import React, { useEffect, useRef } from 'react';
import { MapPin, Mountain, Eye, Info } from 'lucide-react';

interface GeologicalData {
  id: string;
  mineral: string;
  region: string;
  hostRock: string;
  surfaceCues: string;
  status: 'ACTIVE' | 'SURVEYED' | 'PENDING' | 'RESTRICTED';
}

interface GeologicalCardProps {
  data: GeologicalData;
  onClick: () => void;
  isSelected?: boolean;
  displayType: 'region' | 'hostRock' | 'surfaceCues';
}

const GeologicalCard = ({ data, onClick, isSelected = false, displayType }: GeologicalCardProps) => {
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
    switch (status) {
      case 'ACTIVE': return 'bg-white/20 text-white';
      case 'SURVEYED': return 'bg-gray-300/20 text-gray-200';
      case 'PENDING': return 'bg-gray-500/20 text-gray-400';
      case 'RESTRICTED': return 'bg-gray-700/20 text-gray-500';
      default: return 'bg-gray-800/20 text-gray-400';
    }
  };

  const getDisplayContent = () => {
    switch (displayType) {
      case 'region':
        return {
          title: 'Region(s)',
          content: data.region,
          icon: MapPin
        };
      case 'hostRock':
        return {
          title: 'Host Rock / Structure',
          content: data.hostRock,
          icon: Mountain
        };
      case 'surfaceCues':
        return {
          title: 'Surface Cues',
          content: data.surfaceCues,
          icon: Eye
        };
      default:
        return {
          title: 'Region(s)',
          content: data.region,
          icon: MapPin
        };
    }
  };

  const getProgressWidth = (status: string) => {
    switch (status) {
      case 'ACTIVE': return '95%';
      case 'SURVEYED': return '100%';
      case 'PENDING': return '40%';
      case 'RESTRICTED': return '15%';
      default: return '0%';
    }
  };

  const displayInfo = getDisplayContent();
  const IconComponent = displayInfo.icon;

  return (
    <div 
      onClick={onClick}
      className={`max-w-xs w-full bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border transition-all duration-300 cursor-pointer ${
        isSelected 
          ? 'border-white/40 scale-[1.02]' 
          : 'border-gray-700/50 hover:border-gray-600/60'
      }`}
    >
      <div className="relative">
        {/* Meteor background */}
        <div 
          ref={meteorCanvasRef}
          className="absolute inset-0 bg-gray-950/80 overflow-hidden"
        />
        
        {/* Card content */}
        <div className="relative z-10 p-5">
          <div className="mb-4">
            <span className={`px-2 py-1 rounded-full text-xs inline-block ${getStatusColor(data.status)}`}>
              {data.mineral.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          
          <h2 className="text-xl font-bold text-white mb-2">{displayInfo.title}</h2>
          <div className="h-1 w-12 bg-gray-400 mb-4 rounded-full"></div>
          
          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
            {displayInfo.content} - Geological survey data for mineral exploration and extraction planning.
          </p>
          
          <div className="space-y-3 mb-5">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-200 text-xs font-medium">SURVEY</span>
                <span className="text-gray-400 text-xs">{data.status}</span>
              </div>
              <div className="w-full h-1.5 bg-gray-800/80 rounded-full overflow-hidden">
                <div className="h-full bg-white/70 rounded-full transition-all duration-300" style={{width: getProgressWidth(data.status)}}></div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-700/50">
            <div className="flex justify-between text-sm space-x-2">
              <button className="px-4 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-gray-200 rounded-lg transition flex items-center text-xs">
                <Eye className="h-3 w-3 mr-1" />
                Details
              </button>
              <button className="px-4 py-2 bg-black/80 hover:bg-gray-800/80 text-gray-300 rounded-lg transition flex items-center text-xs">
                <Info className="h-3 w-3 mr-1" />
                Survey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeologicalCard;
