
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
}

const SearchBar = ({ 
  searchQuery, 
  onSearchChange, 
  onFocus, 
  onBlur,
  placeholder = "Search regions, host rocks, or surface cues..." 
}: SearchBarProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-[#1A1A1A]/90 backdrop-blur-sm px-4 py-2 rounded-3xl text-white shadow-xl border border-white/10 w-80">
        <div className="flex items-center space-x-3">
          <Search className="w-4 h-4 text-white/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            className="bg-transparent text-white placeholder-white/50 outline-none flex-1 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
