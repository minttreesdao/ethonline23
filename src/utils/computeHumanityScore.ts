type IdentitySourceData = {
  identity?: {
    neighbor?: {
      sources?: string[];
    }[];
  };
};
  
  export const computeHumanityScore = (data: IdentitySourceData): number => {
    const totalSources = 12;
  
    // Check if the data and its properties exist
    const neighbors = data && data.identity && data.identity.neighbor ? data.identity.neighbor : [];
    
    let verifiedSourcesCount = 0;
  
    // Sum the sources from all neighbors
    for (const neighbor of neighbors) {
      if (neighbor.sources) {
        verifiedSourcesCount += neighbor.sources.length;
      }
    }
  
    const scorePerSource = (verifiedSourcesCount / totalSources) * 100;
    return scorePerSource;
  };
  
  