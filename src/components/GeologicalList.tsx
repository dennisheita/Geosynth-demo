
import React from 'react';
import GeologicalCard from './GeologicalCard';

interface GeologicalData {
  id: string;
  mineral: string;
  region: string;
  hostRock: string;
  surfaceCues: string;
  status: 'ACTIVE' | 'SURVEYED' | 'PENDING' | 'RESTRICTED';
}

interface GeologicalListProps {
  data: GeologicalData[];
  selectedItem: string | null;
  onItemSelect: (itemId: string) => void;
  searchQuery: string;
}

const GeologicalList = ({ data, selectedItem, onItemSelect, searchQuery }: GeologicalListProps) => {
  if (data.length === 0) {
    return (
      <div className="p-6 text-center">
        <div className="text-white/50 text-sm">
          {searchQuery ? 'No results found for your search' : 'No geological data found for this mineral'}
        </div>
      </div>
    );
  }

  // Determine display type based on the index (cycles through the three types)
  return (
    <div className="space-y-3 p-4">
      {data.map((item, index) => {
        const displayTypes: ('region' | 'hostRock' | 'surfaceCues')[] = ['region', 'hostRock', 'surfaceCues'];
        const displayType = displayTypes[index % 3];
        
        return (
          <GeologicalCard
            key={item.id}
            data={item}
            onClick={() => onItemSelect(item.id)}
            isSelected={selectedItem === item.id}
            displayType={displayType}
          />
        );
      })}
    </div>
  );
};

export default GeologicalList;
