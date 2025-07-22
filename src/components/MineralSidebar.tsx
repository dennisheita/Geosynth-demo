
import React from 'react';
import { Mountain, Gem, Zap, Hammer, Shield, Star } from 'lucide-react';

const minerals = [
  { id: 'gold', name: 'Gold', icon: Star, color: '#FFD700' },
  { id: 'copper', name: 'Copper', icon: Zap, color: '#B87333' },
  { id: 'tin', name: 'Tin', icon: Shield, color: '#8C8C8C' },
  { id: 'uranium', name: 'Uranium', icon: Mountain, color: '#4A4A4A' },
  { id: 'diamond', name: 'Diamond', icon: Gem, color: '#B9F2FF' },
  { id: 'rare-earth', name: 'Rare Earth', icon: Hammer, color: '#8B4513' },
];

interface MineralSidebarProps {
  selectedMineral: string;
  onMineralSelect: (mineralId: string) => void;
  isMobile?: boolean;
}

const MineralSidebar = ({ selectedMineral, onMineralSelect, isMobile = false }: MineralSidebarProps) => {
  if (isMobile) {
    // Mobile Header
    return (
      <div className="md:hidden bg-[#0A0A0A] border-b border-[#2A2A2A] p-4">
        <div className="flex space-x-3 overflow-x-auto">
          {minerals.map((mineral) => {
            const IconComponent = mineral.icon;
            const isSelected = selectedMineral === mineral.id;
            
            return (
              <button
                key={mineral.id}
                onClick={() => onMineralSelect(mineral.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 whitespace-nowrap ${
                  isSelected 
                    ? 'bg-white/20 scale-105' 
                    : 'hover:bg-white/10'
                }`}
              >
                <IconComponent className="w-4 h-4 text-white/70" />
                <span className="text-sm text-white/90">{mineral.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Sidebar
  return (
    <div className="hidden md:flex w-20 bg-[#0A0A0A] h-full flex-col items-center py-6 space-y-4 border-r border-[#2A2A2A]">
      {minerals.map((mineral) => {
        const IconComponent = mineral.icon;
        const isSelected = selectedMineral === mineral.id;
        
        return (
          <button
            key={mineral.id}
            onClick={() => onMineralSelect(mineral.id)}
            className={`w-12 h-12 rounded-xl transition-all duration-300 group relative ${
              isSelected 
                ? 'bg-white/20 scale-110' 
                : 'hover:bg-white/10 hover:scale-105'
            }`}
            title={mineral.name}
          >
            <IconComponent 
              className={`w-6 h-6 mx-auto transition-colors duration-300 ${
                isSelected ? 'text-white' : 'text-white/70 group-hover:text-white'
              }`}
            />
            {isSelected && (
              <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-white rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default MineralSidebar;
