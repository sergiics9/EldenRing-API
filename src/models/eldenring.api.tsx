export type CharacterStructure = {
  id: string;
  name: string;
  image: string;
  description: string;
  region?: string;
  location?: string;
  drops?: [string];
  healthPoints?: string;
  stats: {
    level: string;
    vigor: string;
    mind: string;
    endurance?: string;
    strength: string;
    dexterity?: string;
    intelligence?: string;
    faith?: string;
    arcane?: string;
  };
};

export type ApiResponse = {
  count: number;
  data: CharacterStructure[];
};
