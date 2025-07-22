
import React, { useState, useEffect } from 'react';
import MineralSidebar from '@/components/MineralSidebar';
import GeologicalList from '@/components/GeologicalList';
import MapContainer from '@/components/MapContainer';
import SearchBar from '@/components/SearchBar';
import SearchSuggestions from '@/components/SearchSuggestions';
import { getGeologicalDataByMineral, getGeologicalDataById, mockGeologicalData } from '@/data/mockData';

const Index = () => {
  const [selectedMineral, setSelectedMineral] = useState('gold');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [geologicalData, setGeologicalData] = useState(getGeologicalDataByMineral('gold'));
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<any[]>([]);

  useEffect(() => {
    if (searchQuery.length === 0) {
      // Show filtered data by mineral when no search query
      const filteredData = getGeologicalDataByMineral(selectedMineral);
      setGeologicalData(filteredData);
    } else {
      // Show all matching deposits when searching
      const searchResults = mockGeologicalData.filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
          item.region.toLowerCase().includes(query) ||
          item.hostRock.toLowerCase().includes(query) ||
          item.surfaceCues.toLowerCase().includes(query)
        );
      });
      setGeologicalData(searchResults);
    }
    setSelectedItem(null);
  }, [selectedMineral, searchQuery]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const suggestions = mockGeologicalData
        .filter((item) => {
          const query = searchQuery.toLowerCase();
          return (
            item.region.toLowerCase().includes(query) ||
            item.hostRock.toLowerCase().includes(query) ||
            item.surfaceCues.toLowerCase().includes(query)
          );
        })
        .map((item) => ({
          id: item.id,
          region: item.region.split(',')[0], // Take first region for display
          mineral: item.mineral,
          type: 'region' as const
        }));
      
      setSearchSuggestions(suggestions);
      setShowSuggestions(suggestions.length > 0);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleMineralSelect = (mineralId: string) => {
    setSelectedMineral(mineralId);
  };

  const handleItemSelect = (itemId: string) => {
    setSelectedItem(itemId);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSuggestionClick = (mineral: string, itemId: string) => {
    setSelectedMineral(mineral);
    setSelectedItem(itemId);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleSearchFocus = () => {
    if (searchQuery.length > 0 && searchSuggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleSearchBlur = () => {
    // Delay hiding suggestions to allow clicks
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const selectedItemData = selectedItem ? getGeologicalDataById(selectedItem) : null;

  return (
    <div className="h-screen bg-[#0A0A0A] flex flex-col overflow-hidden">
      {/* Mobile mineral selector */}
      <MineralSidebar 
        selectedMineral={selectedMineral} 
        onMineralSelect={handleMineralSelect}
        isMobile={true}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <MineralSidebar 
          selectedMineral={selectedMineral} 
          onMineralSelect={handleMineralSelect}
          isMobile={false}
        />
        
        {/* Geological data list - hidden on mobile when item is selected */}
        <div className={`w-full md:w-80 bg-[#0F0F0F] border-r border-[#2A2A2A] overflow-y-auto ${
          selectedItem ? 'hidden md:block' : 'block'
        }`}>
          <div className="p-4 border-b border-[#2A2A2A]">
            <h2 className="text-white font-semibold text-lg capitalize">
              {searchQuery ? 'Search Results' : `${selectedMineral.replace('-', ' ')} Deposits`}
            </h2>
            <p className="text-white/60 text-sm mt-1">
              {geologicalData.length} geological sites
            </p>
          </div>
          
          <GeologicalList
            data={geologicalData}
            selectedItem={selectedItem}
            onItemSelect={handleItemSelect}
            searchQuery={searchQuery}
          />
        </div>
        
        {/* Map container */}
        <div className={`flex-1 p-4 overflow-hidden ${selectedItem ? 'block' : 'hidden md:block'}`}>
          <MapContainer 
            selectedMineral={selectedMineral}
            selectedPackage={selectedItem}
          />
          
          {/* Mobile back button */}
          {selectedItem && (
            <button
              onClick={() => setSelectedItem(null)}
              className="md:hidden fixed top-4 left-4 bg-[#1A1A1A]/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl border border-white/10 z-10"
            >
              ← Back
            </button>
          )}
        </div>
      </div>
      
      {/* Search suggestions */}
      <SearchSuggestions
        suggestions={searchSuggestions}
        onSuggestionClick={handleSuggestionClick}
        visible={showSuggestions}
      />
      
      {/* Search bar */}
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
        placeholder="Search regions, host rocks, or surface cues..."
      />
    </div>
  );
};

export default Index;
