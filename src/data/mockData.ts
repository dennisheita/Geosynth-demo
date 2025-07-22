
// Mock data for mineral tracking dashboard
export interface GeologicalData {
  id: string;
  mineral: string;
  region: string;
  hostRock: string;
  surfaceCues: string;
  status: 'ACTIVE' | 'SURVEYED' | 'PENDING' | 'RESTRICTED';
}

export const mockGeologicalData: GeologicalData[] = [
  // Gold deposits
  {
    id: '1',
    mineral: 'gold',
    region: 'Otjikoto Mine (north-central), Navachab Mine (near Karibib)',
    hostRock: 'Hosted in the Damara Orogenic Belt, associated with quartz veins in schists and meta-volcanics, near major shear zones and deformation corridors',
    surfaceCues: 'Quartz float or veins near fold structures, iron oxide staining (reddish/yellow soils), common in areas with sericitization and silicification',
    status: 'ACTIVE'
  },
  {
    id: '2',
    mineral: 'gold',
    region: 'Northern Karibib, Usakos district',
    hostRock: 'Metamorphic aureoles in Damara Belt, granitic intrusions with shear-hosted veins',
    surfaceCues: 'Pyrite cubes weathering to limonite, gossan zones with iron staining, quartz stockworks with gold potential',
    status: 'SURVEYED'
  },
  {
    id: '3',
    mineral: 'gold',
    region: 'Erongo Mountains, Khan district',
    hostRock: 'Pegmatite-granite contacts within Damara Belt, hydrothermal breccias near intrusive contacts',
    surfaceCues: 'Tourmaline alteration halos, silicification zones, sulfide weathering with gossanous caps',
    status: 'PENDING'
  },

  // Uranium deposits
  {
    id: '4',
    mineral: 'uranium',
    region: 'Rossing Mine, Husab Mine (Erongo Region, Namib Desert)',
    hostRock: 'Alaskite-hosted uranium in Damara granite domes, calcrete-hosted uranium (e.g. Langer Heinrich deposit), follows paleochannels and ephemeral rivers',
    surfaceCues: 'Bleached calcrete crusts, high gamma radiation readings, linear paleochannel structures visible from satellite',
    status: 'ACTIVE'
  },
  {
    id: '5',
    mineral: 'uranium',
    region: 'Central Namib, Goanikontes area',
    hostRock: 'Granite-hosted leucogranite bodies with uranium-bearing phases, sheeted pegmatites in late-stage granite',
    surfaceCues: 'Radioactive anomalies in airborne surveys, altered feldspar with uranium minerals, secondary uranium bloom minerals',
    status: 'PENDING'
  },
  {
    id: '6',
    mineral: 'uranium',
    region: 'Erongo region, Valencia district',
    hostRock: 'Alaskite dikes and late-stage granite differentiates with elevated uranium content',
    surfaceCues: 'Secondary uranium minerals (autunite, torbernite), thorium anomalies, elevated radon emanation',
    status: 'SURVEYED'
  },

  // Diamond deposits
  {
    id: '7',
    mineral: 'diamond',
    region: 'Sperrgebiet ("forbidden zone") along the SW coast (Oranjemund)',
    hostRock: 'Derived from offshore kimberlite sources, found in marine terraces, beach gravels, and fluvial fans, alluvial deposits along Orange River',
    surfaceCues: 'Heavy mineral sands with garnet and ilmenite, coastal dunes with deflation hollows, evidence of past water flow and beach terraces',
    status: 'ACTIVE'
  },
  {
    id: '8',
    mineral: 'diamond',
    region: 'Orange River Mouth, Alexander Bay',
    hostRock: 'Alluvial deposits in Cretaceous sedimentary sequences, gravel terraces from ancient river systems',
    surfaceCues: 'Ilmenite concentrates in heavy mineral sands, diamond indicator minerals (garnets, chrome diopside), coarse gravel beds',
    status: 'RESTRICTED'
  },
  {
    id: '9',
    mineral: 'diamond',
    region: 'Inland desert areas, Conception Bay',
    hostRock: 'Aeolian reworked marine deposits, calcrete-cemented gravels from ancient shorelines',
    surfaceCues: 'Kimberlite indicator minerals in sediments, deflation surfaces exposing gravels, heavy lag deposits',
    status: 'SURVEYED'
  },

  // Rare Earth Elements
  {
    id: '10',
    mineral: 'rare-earth',
    region: 'Lofdal Complex (northwestern Namibia, Kunene Region)',
    hostRock: 'Carbonatite-hosted REEs, intrusive alkaline rocks (syenite, phonolite), enriched in heavy REEs like dysprosium and terbium',
    surfaceCues: 'Reddish clays and weathered rock outcrops, radioactive hotspots due to thorium presence, vegetation suppression zones on satellite imagery',
    status: 'ACTIVE'
  },
  {
    id: '11',
    mineral: 'rare-earth',
    region: 'Kalkfeld Alkaline Complex, Otjozondjupa',
    hostRock: 'Nepheline syenite intrusions, carbonatite dikes with REE mineralization, alkaline pegmatites',
    surfaceCues: 'REE-bearing minerals (monazite, bastnaesite), elevated thorium anomalies, distinctive alkaline alteration zones',
    status: 'SURVEYED'
  },
  {
    id: '12',
    mineral: 'rare-earth',
    region: 'Epembe complex, northern Namibia',
    hostRock: 'Carbonatite stocks with REE enrichment, ijolite-nepheline syenite association',
    surfaceCues: 'Monazite placers in drainages, barite veining systems, phosphate mineral associations indicating REE potential',
    status: 'PENDING'
  },

  // Copper deposits
  {
    id: '13',
    mineral: 'copper',
    region: 'Tsumeb Mine, Kombat, Otavi Mountain Land',
    hostRock: 'Carbonate-hosted in the Otavi Group, linked to breccias, karst systems, and fault zones, often polymetallic (Cu-Pb-Zn-Ag)',
    surfaceCues: 'Green (malachite) and blue (azurite) staining, sinkholes or depressions in carbonate rocks, metal-rich soils with orange or green tints',
    status: 'ACTIVE'
  },
  {
    id: '14',
    mineral: 'copper',
    region: 'Otavi Triangle, Grootfontein district',
    hostRock: 'Dolomitic limestone of Otavi Group, fault-controlled hydrothermal systems with copper mineralization',
    surfaceCues: 'Azurite and malachite staining on fractures, developed cave systems, chrysocolla weathering products',
    status: 'PENDING'
  },
  {
    id: '15',
    mineral: 'copper',
    region: 'Windhoek greenstone belt, Khan River',
    hostRock: 'Volcanic-hosted massive sulfides in metabasalt sequences, syngenetic Cu-Zn mineralization',
    surfaceCues: 'Gossanous caps over sulfide bodies, sulfide weathering products, copper bloom minerals on fresh fractures',
    status: 'SURVEYED'
  },

  // Tin deposits
  {
    id: '16',
    mineral: 'tin',
    region: 'Uis Mine (Damaraland), Brandberg area',
    hostRock: 'Hosted in pegmatites within Erongo Granite, cassiterite veins in tourmaline granite, tin also found in alluvial/placer deposits downstream',
    surfaceCues: 'Quartz + tourmaline-rich float, cassiterite grains in riverbeds, hard-rock outcrops near Erongo hills',
    status: 'ACTIVE'
  },
  {
    id: '17',
    mineral: 'tin',
    region: 'Erongo Mountains, Karibib district',
    hostRock: 'Granite pegmatites with tin-bearing phases, aplite veins, greisen-altered granite with cassiterite',
    surfaceCues: 'Muscovite books in pegmatites, tin-bearing alluvials in drainages, topaz-quartz veins indicating tin potential',
    status: 'SURVEYED'
  },
  {
    id: '18',
    mineral: 'tin',
    region: 'Spitzkoppe area, Damaraland',
    hostRock: 'Granite intrusions with late-stage tin mineralization, pegmatite swarms, contact metamorphic zones',
    surfaceCues: 'Cassiterite-bearing placers in stream beds, wolframite associations, beryl crystals indicating pegmatite evolution',
    status: 'PENDING'
  }
];

// Filter geological data by mineral
export const getGeologicalDataByMineral = (mineral: string): GeologicalData[] => {
  return mockGeologicalData.filter(data => data.mineral === mineral);
};

// Get geological data by ID
export const getGeologicalDataById = (id: string): GeologicalData | undefined => {
  return mockGeologicalData.find(data => data.id === id);
};
