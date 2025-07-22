
import React from 'react';
import { MapPin } from 'lucide-react';

interface SearchSuggestion {
  id: string;
  region: string;
  mineral: string;
  type: 'region' | 'hostRock' | 'surfaceCue';
}

interface SearchSuggestionsProps {
  suggestions: SearchSuggestion[];
  onSuggestionClick: (mineral: string, itemId: string) => void;
  visible: boolean;
}

const SearchSuggestions = ({ suggestions, onSuggestionClick, visible }: SearchSuggestionsProps) => {
  if (!visible || suggestions.length === 0) return null;

  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-80 z-50">
      <div className="bg-[#1A1A1A]/95 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl overflow-hidden">
        {suggestions.slice(0, 5).map((suggestion, index) => (
          <div
            key={suggestion.id}
            onClick={() => onSuggestionClick(suggestion.mineral, suggestion.id)}
            className="px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-b-0"
          >
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-white/60" />
              <div className="flex-1">
                <div className="text-white text-sm font-medium">
                  {suggestion.region}
                </div>
                <div className="text-white/60 text-xs">
                  {suggestion.mineral.replace('-', ' ')} deposit
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;
