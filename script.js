const POKEMON_DATA = {
  "Bulbasaur": {
    id: 1,
    types: ["grass", "poison"],
    stage: "basic",
    hp: 45,
    atk: 49,
    def: 49,
    spatk: 65,
    spdef: 65,
    spe: 45,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 16,
      to: "Ivysaur"
    }
  },

  "Ivysaur": {
    id: 2,
    types: ["grass", "poison"],
    stage: "mid",
    hp: 60,
    atk: 62,
    def: 63,
    spatk: 80,
    spdef: 80,
    spe: 60,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 32,
      to: "Venusaur"
    }
  },

  "Venusaur": {
    id: 3,
    types: ["grass", "poison"],
    stage: "final",
    hp: 80,
    atk: 82,
    def: 83,
    spatk: 100,
    spdef: 100,
    spe: 80,
    growth: "medium-slow",
    evolution: null
  },

  "Charmander": {
    id: 4,
    types: ["fire"],
    stage: "basic",
    hp: 39,
    atk: 52,
    def: 43,
    spatk: 60,
    spdef: 50,
    spe: 65,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 16,
      to: "Charmeleon"
    }
  },

  "Charmeleon": {
    id: 5,
    types: ["fire"],
    stage: "mid",
    hp: 58,
    atk: 64,
    def: 58,
    spatk: 80,
    spdef: 65,
    spe: 80,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 36,
      to: "Charizard"
    }
  },

  "Charizard": {
    id: 6,
    types: ["fire", "flying"],
    stage: "final",
    hp: 78,
    atk: 84,
    def: 78,
    spatk: 109,
    spdef: 85,
    spe: 100,
    growth: "medium-slow",
    evolution: null
  },

  "Squirtle": {
    id: 7,
    types: ["water"],
    stage: "basic",
    hp: 44,
    atk: 48,
    def: 65,
    spatk: 50,
    spdef: 64,
    spe: 43,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 16,
      to: "Wartortle"
    }
  },

  "Wartortle": {
    id: 8,
    types: ["water"],
    stage: "mid",
    hp: 59,
    atk: 63,
    def: 80,
    spatk: 65,
    spdef: 80,
    spe: 58,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 36,
      to: "Blastoise"
    }
  },

  "Blastoise": {
    id: 9,
    types: ["water"],
    stage: "final",
    hp: 79,
    atk: 83,
    def: 100,
    spatk: 85,
    spdef: 105,
    spe: 78,
    growth: "medium-slow",
    evolution: null
  },

  "Caterpie": {
    id: 10,
    types: ["bug"],
    stage: "basic",
    hp: 45,
    atk: 30,
    def: 35,
    spatk: 20,
    spdef: 20,
    spe: 45,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 7,
      to: "Metapod"
    }
  },

  "Metapod": {
    id: 11,
    types: ["bug"],
    stage: "mid",
    hp: 50,
    atk: 20,
    def: 55,
    spatk: 25,
    spdef: 25,
    spe: 30,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 10,
      to: "Butterfree"
    }
  },

  "Butterfree": {
    id: 12,
    types: ["bug", "flying"],
    stage: "final",
    hp: 60,
    atk: 45,
    def: 50,
    spatk: 90,
    spdef: 80,
    spe: 70,
    growth: "medium-fast",
    evolution: null
  },

  "Weedle": {
    id: 13,
    types: ["bug", "poison"],
    stage: "basic",
    hp: 40,
    atk: 35,
    def: 30,
    spatk: 20,
    spdef: 20,
    spe: 50,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 7,
      to: "Kakuna"
    }
  },

  "Kakuna": {
    id: 14,
    types: ["bug", "poison"],
    stage: "mid",
    hp: 45,
    atk: 25,
    def: 50,
    spatk: 25,
    spdef: 25,
    spe: 35,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 10,
      to: "Beedrill"
    }
  },

  "Beedrill": {
    id: 15,
    types: ["bug", "poison"],
    stage: "final",
    hp: 65,
    atk: 90,
    def: 40,
    spatk: 45,
    spdef: 80,
    spe: 75,
    growth: "medium-fast",
    evolution: null
  },

  "Pidgey": {
    id: 16,
    types: ["normal", "flying"],
    stage: "basic",
    hp: 40,
    atk: 45,
    def: 40,
    spatk: 35,
    spdef: 35,
    spe: 56,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 18,
      to: "Pidgeotto"
    }
  },

  "Pidgeotto": {
    id: 17,
    types: ["normal", "flying"],
    stage: "mid",
    hp: 63,
    atk: 60,
    def: 55,
    spatk: 50,
    spdef: 50,
    spe: 71,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 36,
      to: "Pidgeot"
    }
  },

  "Pidgeot": {
    id: 18,
    types: ["normal", "flying"],
    stage: "final",
    hp: 83,
    atk: 80,
    def: 75,
    spatk: 70,
    spdef: 70,
    spe: 101,
    growth: "medium-slow",
    evolution: null
  },

  "Rattata": {
    id: 19,
    types: ["normal"],
    stage: "basic",
    hp: 30,
    atk: 56,
    def: 35,
    spatk: 25,
    spdef: 35,
    spe: 72,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 20,
      to: "Raticate"
    }
  },

  "Raticate": {
    id: 20,
    types: ["normal"],
    stage: "final",
    hp: 55,
    atk: 81,
    def: 60,
    spatk: 50,
    spdef: 70,
    spe: 97,
    growth: "medium-fast",
    evolution: null
  },

  "Spearow": {
    id: 21,
    types: ["normal", "flying"],
    stage: "basic",
    hp: 40,
    atk: 60,
    def: 30,
    spatk: 31,
    spdef: 31,
    spe: 70,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 20,
      to: "Fearow"
    }
  },

  "Fearow": {
    id: 22,
    types: ["normal", "flying"],
    stage: "final",
    hp: 65,
    atk: 90,
    def: 65,
    spatk: 61,
    spdef: 61,
    spe: 100,
    growth: "medium-fast",
    evolution: null
  },

  "Ekans": {
    id: 23,
    types: ["poison"],
    stage: "basic",
    hp: 35,
    atk: 60,
    def: 44,
    spatk: 40,
    spdef: 54,
    spe: 55,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 22,
      to: "Arbok"
    }
  },

  "Arbok": {
    id: 24,
    types: ["poison"],
    stage: "final",
    hp: 60,
    atk: 95,
    def: 69,
    spatk: 65,
    spdef: 79,
    spe: 80,
    growth: "medium-fast",
    evolution: null
  },

  "Pikachu": {
    id: 25,
    types: ["electric"],
    stage: "basic",
    hp: 35,
    atk: 55,
    def: 40,
    spatk: 50,
    spdef: 50,
    spe: 90,
    growth: "medium-fast",
    evolution: {
      method: "item",
      item: "Thunder Stone",
      to: "Raichu"
    }
  },

  "Raichu": {
    id: 26,
    types: ["electric"],
    stage: "final",
    hp: 60,
    atk: 90,
    def: 55,
    spatk: 90,
    spdef: 80,
    spe: 110,
    growth: "medium-fast",
    evolution: null
  },

  "Sandshrew": {
    id: 27,
    types: ["ground"],
    stage: "basic",
    hp: 50,
    atk: 75,
    def: 85,
    spatk: 20,
    spdef: 30,
    spe: 40,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 22,
      to: "Sandslash"
    }
  },

  "Sandslash": {
    id: 28,
    types: ["ground"],
    stage: "final",
    hp: 75,
    atk: 100,
    def: 110,
    spatk: 45,
    spdef: 55,
    spe: 65,
    growth: "medium-fast",
    evolution: null
  },

  "Nidoran F": {
    id: 29,
    types: ["poison"],
    stage: "basic",
    hp: 55,
    atk: 47,
    def: 52,
    spatk: 40,
    spdef: 40,
    spe: 41,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 16,
      to: "Nidorina"
    }
  },

  "Nidorina": {
    id: 30,
    types: ["poison"],
    stage: "mid",
    hp: 70,
    atk: 62,
    def: 67,
    spatk: 55,
    spdef: 55,
    spe: 56,
    growth: "medium-slow",
    evolution: {
      method: "item",
      item: "Moon Stone",
      to: "Nidoqueen"
    }
  },

  "Nidoqueen": {
    id: 31,
    types: ["poison", "ground"],
    stage: "final",
    hp: 90,
    atk: 92,
    def: 87,
    spatk: 75,
    spdef: 85,
    spe: 76,
    growth: "medium-slow",
    evolution: null
  },

  "Nidoran M": {
    id: 32,
    types: ["poison"],
    stage: "basic",
    hp: 46,
    atk: 57,
    def: 40,
    spatk: 40,
    spdef: 40,
    spe: 50,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 16,
      to: "Nidorino"
    }
  },

  "Nidorino": {
    id: 33,
    types: ["poison"],
    stage: "mid",
    hp: 61,
    atk: 72,
    def: 57,
    spatk: 55,
    spdef: 55,
    spe: 65,
    growth: "medium-slow",
    evolution: {
      method: "item",
      item: "Moon Stone",
      to: "Nidoking"
    }
  },

  "Nidoking": {
    id: 34,
    types: ["poison", "ground"],
    stage: "final",
    hp: 81,
    atk: 102,
    def: 77,
    spatk: 85,
    spdef: 75,
    spe: 85,
    growth: "medium-slow",
    evolution: null
  },

  "Clefairy": {
    id: 35,
    types: ["fairy"],
    stage: "basic",
    hp: 70,
    atk: 45,
    def: 48,
    spatk: 60,
    spdef: 65,
    spe: 35,
    growth: "fast",
    evolution: {
      method: "item",
      item: "Moon Stone",
      to: "Clefable"
    }
  },

  "Clefable": {
    id: 36,
    types: ["fairy"],
    stage: "final",
    hp: 95,
    atk: 70,
    def: 73,
    spatk: 95,
    spdef: 90,
    spe: 60,
    growth: "fast",
    evolution: null
  },

  "Vulpix": {
    id: 37,
    types: ["fire"],
    stage: "basic",
    hp: 38,
    atk: 41,
    def: 40,
    spatk: 50,
    spdef: 65,
    spe: 65,
    growth: "medium-fast",
    evolution: {
      method: "item",
      item: "Fire Stone",
      to: "Ninetales"
    }
  },

  "Ninetales": {
    id: 38,
    types: ["fire"],
    stage: "final",
    hp: 73,
    atk: 76,
    def: 75,
    spatk: 81,
    spdef: 100,
    spe: 100,
    growth: "medium-fast",
    evolution: null
  },

  "Jigglypuff": {
    id: 39,
    types: ["normal", "fairy"],
    stage: "basic",
    hp: 115,
    atk: 45,
    def: 20,
    spatk: 45,
    spdef: 25,
    spe: 20,
    growth: "fast",
    evolution: {
      method: "item",
      item: "Moon Stone",
      to: "Wigglytuff"
    }
  },

  "Wigglytuff": {
    id: 40,
    types: ["normal", "fairy"],
    stage: "final",
    hp: 140,
    atk: 70,
    def: 45,
    spatk: 85,
    spdef: 50,
    spe: 45,
    growth: "fast",
    evolution: null
  },

  "Zubat": {
    id: 41,
    types: ["poison", "flying"],
    stage: "basic",
    hp: 40,
    atk: 45,
    def: 35,
    spatk: 30,
    spdef: 40,
    spe: 55,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 22,
      to: "Golbat"
    }
  },

  "Golbat": {
    id: 42,
    types: ["poison", "flying"],
    stage: "final",
    hp: 75,
    atk: 80,
    def: 70,
    spatk: 65,
    spdef: 75,
    spe: 90,
    growth: "medium-fast",
    evolution: null
  },

  "Oddish": {
    id: 43,
    types: ["grass", "poison"],
    stage: "basic",
    hp: 45,
    atk: 50,
    def: 55,
    spatk: 75,
    spdef: 65,
    spe: 30,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 21,
      to: "Gloom"
    }
  },

  "Gloom": {
    id: 44,
    types: ["grass", "poison"],
    stage: "mid",
    hp: 60,
    atk: 65,
    def: 70,
    spatk: 85,
    spdef: 75,
    spe: 40,
    growth: "medium-slow",
    evolution: {
      method: "item",
      item: "Leaf Stone",
      to: "Vileplume"
    }
  },

  "Vileplume": {
    id: 45,
    types: ["grass", "poison"],
    stage: "final",
    hp: 75,
    atk: 80,
    def: 85,
    spatk: 110,
    spdef: 90,
    spe: 50,
    growth: "medium-slow",
    evolution: null
  },

  "Paras": {
    id: 46,
    types: ["bug", "grass"],
    stage: "basic",
    hp: 35,
    atk: 70,
    def: 55,
    spatk: 45,
    spdef: 55,
    spe: 25,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 24,
      to: "Parasect"
    }
  },

  "Parasect": {
    id: 47,
    types: ["bug", "grass"],
    stage: "final",
    hp: 60,
    atk: 95,
    def: 80,
    spatk: 60,
    spdef: 80,
    spe: 30,
    growth: "medium-fast",
    evolution: null
  },

  "Venonat": {
    id: 48,
    types: ["bug", "poison"],
    stage: "basic",
    hp: 60,
    atk: 55,
    def: 50,
    spatk: 40,
    spdef: 55,
    spe: 45,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 31,
      to: "Venomoth"
    }
  },

  "Venomoth": {
    id: 49,
    types: ["bug", "poison"],
    stage: "final",
    hp: 70,
    atk: 65,
    def: 60,
    spatk: 90,
    spdef: 75,
    spe: 90,
    growth: "medium-fast",
    evolution: null
  },

  "Diglett": {
    id: 50,
    types: ["ground"],
    stage: "basic",
    hp: 10,
    atk: 55,
    def: 25,
    spatk: 35,
    spdef: 45,
    spe: 95,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 26,
      to: "Dugtrio"
    }
  },

  "Dugtrio": {
    id: 51,
    types: ["ground"],
    stage: "final",
    hp: 35,
    atk: 100,
    def: 50,
    spatk: 50,
    spdef: 70,
    spe: 120,
    growth: "medium-fast",
    evolution: null
  },

  "Meowth": {
    id: 52,
    types: ["normal"],
    stage: "basic",
    hp: 40,
    atk: 45,
    def: 35,
    spatk: 40,
    spdef: 40,
    spe: 90,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 28,
      to: "Persian"
    }
  },

  "Persian": {
    id: 53,
    types: ["normal"],
    stage: "final",
    hp: 65,
    atk: 70,
    def: 60,
    spatk: 65,
    spdef: 65,
    spe: 115,
    growth: "medium-fast",
    evolution: null
  },

  "Psyduck": {
    id: 54,
    types: ["water"],
    stage: "basic",
    hp: 50,
    atk: 52,
    def: 48,
    spatk: 65,
    spdef: 50,
    spe: 55,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 33,
      to: "Golduck"
    }
  },

  "Golduck": {
    id: 55,
    types: ["water"],
    stage: "final",
    hp: 80,
    atk: 82,
    def: 78,
    spatk: 95,
    spdef: 80,
    spe: 85,
    growth: "medium-fast",
    evolution: null
  },

  "Mankey": {
    id: 56,
    types: ["fighting"],
    stage: "basic",
    hp: 40,
    atk: 80,
    def: 35,
    spatk: 35,
    spdef: 45,
    spe: 70,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 28,
      to: "Primeape"
    }
  },

  "Primeape": {
    id: 57,
    types: ["fighting"],
    stage: "final",
    hp: 65,
    atk: 105,
    def: 60,
    spatk: 60,
    spdef: 70,
    spe: 95,
    growth: "medium-fast",
    evolution: null
  },

  "Growlithe": {
    id: 58,
    types: ["fire"],
    stage: "basic",
    hp: 55,
    atk: 70,
    def: 45,
    spatk: 70,
    spdef: 50,
    spe: 60,
    growth: "slow",
    evolution: {
      method: "item",
      item: "Fire Stone",
      to: "Arcanine"
    }
  },

  "Arcanine": {
    id: 59,
    types: ["fire"],
    stage: "final",
    hp: 90,
    atk: 110,
    def: 80,
    spatk: 100,
    spdef: 80,
    spe: 95,
    growth: "slow",
    evolution: null
  },

  "Poliwag": {
    id: 60,
    types: ["water"],
    stage: "basic",
    hp: 40,
    atk: 50,
    def: 40,
    spatk: 40,
    spdef: 40,
    spe: 90,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 25,
      to: "Poliwhirl"
    }
  },

  "Poliwhirl": {
    id: 61,
    types: ["water"],
    stage: "mid",
    hp: 65,
    atk: 65,
    def: 65,
    spatk: 50,
    spdef: 50,
    spe: 90,
    growth: "medium-slow",
    evolution: {
      method: "item",
      item: "Water Stone",
      to: "Poliwrath"
    }
  },

  "Poliwrath": {
    id: 62,
    types: ["water", "fighting"],
    stage: "final",
    hp: 90,
    atk: 95,
    def: 95,
    spatk: 70,
    spdef: 90,
    spe: 70,
    growth: "medium-slow",
    evolution: null
  },

  "Abra": {
    id: 63,
    types: ["psychic"],
    stage: "basic",
    hp: 25,
    atk: 20,
    def: 15,
    spatk: 105,
    spdef: 55,
    spe: 90,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 16,
      to: "Kadabra"
    }
  },

  "Kadabra": {
    id: 64,
    types: ["psychic"],
    stage: "mid",
    hp: 40,
    atk: 35,
    def: 30,
    spatk: 120,
    spdef: 70,
    spe: 105,
    growth: "medium-slow",
    evolution: {
      method: "item",
      item: "Trade Stone",
      to: "Alakazam"
    }
  },

  "Alakazam": {
    id: 65,
    types: ["psychic"],
    stage: "final",
    hp: 55,
    atk: 50,
    def: 45,
    spatk: 135,
    spdef: 95,
    spe: 120,
    growth: "medium-slow",
    evolution: null
  },

  "Machop": {
    id: 66,
    types: ["fighting"],
    stage: "basic",
    hp: 70,
    atk: 80,
    def: 50,
    spatk: 35,
    spdef: 35,
    spe: 35,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 28,
      to: "Machoke"
    }
  },

  "Machoke": {
    id: 67,
    types: ["fighting"],
    stage: "mid",
    hp: 80,
    atk: 100,
    def: 70,
    spatk: 50,
    spdef: 60,
    spe: 45,
    growth: "medium-slow",
    evolution: {
      method: "item",
      item: "Trade Stone",
      to: "Machamp"
    }
  },

  "Machamp": {
    id: 68,
    types: ["fighting"],
    stage: "final",
    hp: 90,
    atk: 130,
    def: 80,
    spatk: 65,
    spdef: 85,
    spe: 55,
    growth: "medium-slow",
    evolution: null
  },

  "Bellsprout": {
    id: 69,
    types: ["grass", "poison"],
    stage: "basic",
    hp: 50,
    atk: 75,
    def: 35,
    spatk: 70,
    spdef: 30,
    spe: 40,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 21,
      to: "Weepinbell"
    }
  },

  "Weepinbell": {
    id: 70,
    types: ["grass", "poison"],
    stage: "mid",
    hp: 65,
    atk: 90,
    def: 50,
    spatk: 85,
    spdef: 45,
    spe: 55,
    growth: "medium-slow",
    evolution: {
      method: "item",
      item: "Leaf Stone",
      to: "Victreebel"
    }
  },

  "Victreebel": {
    id: 71,
    types: ["grass", "poison"],
    stage: "final",
    hp: 80,
    atk: 105,
    def: 65,
    spatk: 100,
    spdef: 60,
    spe: 70,
    growth: "medium-slow",
    evolution: null
  },

  "Tentacool": {
    id: 72,
    types: ["water", "poison"],
    stage: "basic",
    hp: 40,
    atk: 40,
    def: 35,
    spatk: 50,
    spdef: 100,
    spe: 70,
    growth: "slow",
    evolution: {
      method: "level",
      level: 30,
      to: "Tentacruel"
    }
  },

  "Tentacruel": {
    id: 73,
    types: ["water", "poison"],
    stage: "final",
    hp: 80,
    atk: 70,
    def: 65,
    spatk: 80,
    spdef: 120,
    spe: 100,
    growth: "slow",
    evolution: null
  },

  "Geodude": {
    id: 74,
    types: ["rock", "ground"],
    stage: "basic",
    hp: 40,
    atk: 80,
    def: 100,
    spatk: 30,
    spdef: 30,
    spe: 20,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 25,
      to: "Graveler"
    }
  },

  "Graveler": {
    id: 75,
    types: ["rock", "ground"],
    stage: "mid",
    hp: 55,
    atk: 95,
    def: 115,
    spatk: 45,
    spdef: 45,
    spe: 35,
    growth: "medium-slow",
    evolution: {
      method: "item",
      item: "Trade Stone",
      to: "Golem"
    }
  },

  "Golem": {
    id: 76,
    types: ["rock", "ground"],
    stage: "final",
    hp: 80,
    atk: 120,
    def: 130,
    spatk: 55,
    spdef: 65,
    spe: 45,
    growth: "medium-slow",
    evolution: null
  },

  "Ponyta": {
    id: 77,
    types: ["fire"],
    stage: "basic",
    hp: 50,
    atk: 85,
    def: 55,
    spatk: 65,
    spdef: 65,
    spe: 90,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 40,
      to: "Rapidash"
    }
  },

  "Rapidash": {
    id: 78,
    types: ["fire"],
    stage: "final",
    hp: 65,
    atk: 100,
    def: 70,
    spatk: 80,
    spdef: 80,
    spe: 105,
    growth: "medium-fast",
    evolution: null
  },

  "Slowpoke": {
    id: 79,
    types: ["water", "psychic"],
    stage: "basic",
    hp: 90,
    atk: 65,
    def: 65,
    spatk: 40,
    spdef: 40,
    spe: 15,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 37,
      to: "Slowbro"
    }
  },

  "Slowbro": {
    id: 80,
    types: ["water", "psychic"],
    stage: "final",
    hp: 95,
    atk: 75,
    def: 110,
    spatk: 100,
    spdef: 80,
    spe: 30,
    growth: "medium-fast",
    evolution: null
  },

  "Magnemite": {
    id: 81,
    types: ["electric", "steel"],
    stage: "basic",
    hp: 25,
    atk: 35,
    def: 70,
    spatk: 95,
    spdef: 55,
    spe: 45,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 30,
      to: "Magneton"
    }
  },

  "Magneton": {
    id: 82,
    types: ["electric", "steel"],
    stage: "final",
    hp: 50,
    atk: 60,
    def: 95,
    spatk: 120,
    spdef: 70,
    spe: 70,
    growth: "medium-fast",
    evolution: null
  },

  "Farfetch'd": {
    id: 83,
    types: ["normal", "flying"],
    stage: "final",
    hp: 52,
    atk: 65,
    def: 55,
    spatk: 58,
    spdef: 62,
    spe: 60,
    growth: "medium-fast",
    evolution: null
  },

  "Doduo": {
    id: 84,
    types: ["normal", "flying"],
    stage: "basic",
    hp: 35,
    atk: 85,
    def: 45,
    spatk: 35,
    spdef: 35,
    spe: 75,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 31,
      to: "Dodrio"
    }
  },

  "Dodrio": {
    id: 85,
    types: ["normal", "flying"],
    stage: "final",
    hp: 60,
    atk: 110,
    def: 70,
    spatk: 60,
    spdef: 60,
    spe: 100,
    growth: "medium-fast",
    evolution: null
  },

  "Seel": {
    id: 86,
    types: ["water"],
    stage: "basic",
    hp: 65,
    atk: 45,
    def: 55,
    spatk: 45,
    spdef: 70,
    spe: 45,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 34,
      to: "Dewgong"
    }
  },

  "Dewgong": {
    id: 87,
    types: ["water", "ice"],
    stage: "final",
    hp: 90,
    atk: 70,
    def: 80,
    spatk: 70,
    spdef: 95,
    spe: 70,
    growth: "medium-fast",
    evolution: null
  },

  "Grimer": {
    id: 88,
    types: ["poison"],
    stage: "basic",
    hp: 80,
    atk: 80,
    def: 50,
    spatk: 40,
    spdef: 50,
    spe: 25,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 38,
      to: "Muk"
    }
  },

  "Muk": {
    id: 89,
    types: ["poison"],
    stage: "final",
    hp: 105,
    atk: 105,
    def: 75,
    spatk: 65,
    spdef: 100,
    spe: 50,
    growth: "medium-fast",
    evolution: null
  },

  "Shellder": {
    id: 90,
    types: ["water"],
    stage: "basic",
    hp: 30,
    atk: 65,
    def: 100,
    spatk: 45,
    spdef: 25,
    spe: 40,
    growth: "slow",
    evolution: {
      method: "item",
      item: "Water Stone",
      to: "Cloyster"
    }
  },

  "Cloyster": {
    id: 91,
    types: ["water", "ice"],
    stage: "final",
    hp: 50,
    atk: 95,
    def: 180,
    spatk: 85,
    spdef: 45,
    spe: 70,
    growth: "slow",
    evolution: null
  },

  "Gastly": {
    id: 92,
    types: ["ghost", "poison"],
    stage: "basic",
    hp: 30,
    atk: 35,
    def: 30,
    spatk: 100,
    spdef: 35,
    spe: 80,
    growth: "medium-slow",
    evolution: {
      method: "level",
      level: 25,
      to: "Haunter"
    }
  },

  "Haunter": {
    id: 93,
    types: ["ghost", "poison"],
    stage: "mid",
    hp: 45,
    atk: 50,
    def: 45,
    spatk: 115,
    spdef: 55,
    spe: 95,
    growth: "medium-slow",
    evolution: {
      method: "item",
      item: "Trade Stone",
      to: "Gengar"
    }
  },

  "Gengar": {
    id: 94,
    types: ["ghost", "poison"],
    stage: "final",
    hp: 60,
    atk: 65,
    def: 60,
    spatk: 130,
    spdef: 75,
    spe: 110,
    growth: "medium-slow",
    evolution: null
  },

  "Onix": {
    id: 95,
    types: ["rock", "ground"],
    stage: "final",
    hp: 35,
    atk: 45,
    def: 160,
    spatk: 30,
    spdef: 45,
    spe: 70,
    growth: "medium-fast",
    evolution: null
  },

  "Drowzee": {
    id: 96,
    types: ["psychic"],
    stage: "basic",
    hp: 60,
    atk: 48,
    def: 45,
    spatk: 43,
    spdef: 90,
    spe: 42,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 26,
      to: "Hypno"
    }
  },

  "Hypno": {
    id: 97,
    types: ["psychic"],
    stage: "final",
    hp: 85,
    atk: 73,
    def: 70,
    spatk: 73,
    spdef: 115,
    spe: 67,
    growth: "medium-fast",
    evolution: null
  },

  "Krabby": {
    id: 98,
    types: ["water"],
    stage: "basic",
    hp: 30,
    atk: 105,
    def: 90,
    spatk: 25,
    spdef: 25,
    spe: 50,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 28,
      to: "Kingler"
    }
  },

  "Kingler": {
    id: 99,
    types: ["water"],
    stage: "final",
    hp: 55,
    atk: 130,
    def: 115,
    spatk: 50,
    spdef: 50,
    spe: 75,
    growth: "medium-fast",
    evolution: null
  },

  "Voltorb": {
    id: 100,
    types: ["electric"],
    stage: "basic",
    hp: 40,
    atk: 30,
    def: 50,
    spatk: 55,
    spdef: 55,
    spe: 100,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 30,
      to: "Electrode"
    }
  },

  "Electrode": {
    id: 101,
    types: ["electric"],
    stage: "final",
    hp: 60,
    atk: 50,
    def: 70,
    spatk: 80,
    spdef: 80,
    spe: 150,
    growth: "medium-fast",
    evolution: null
  },

  "Exeggcute": {
    id: 102,
    types: ["grass", "psychic"],
    stage: "basic",
    hp: 60,
    atk: 40,
    def: 80,
    spatk: 60,
    spdef: 45,
    spe: 40,
    growth: "slow",
    evolution: {
      method: "item",
      item: "Leaf Stone",
      to: "Exeggutor"
    }
  },

  "Exeggutor": {
    id: 103,
    types: ["grass", "psychic"],
    stage: "final",
    hp: 95,
    atk: 95,
    def: 85,
    spatk: 125,
    spdef: 65,
    spe: 55,
    growth: "slow",
    evolution: null
  },

  "Cubone": {
    id: 104,
    types: ["ground"],
    stage: "basic",
    hp: 50,
    atk: 50,
    def: 95,
    spatk: 40,
    spdef: 50,
    spe: 35,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 28,
      to: "Marowak"
    }
  },

  "Marowak": {
    id: 105,
    types: ["ground"],
    stage: "final",
    hp: 60,
    atk: 80,
    def: 110,
    spatk: 50,
    spdef: 80,
    spe: 45,
    growth: "medium-fast",
    evolution: null
  },

  "Hitmonlee": {
    id: 106,
    types: ["fighting"],
    stage: "final",
    hp: 50,
    atk: 120,
    def: 53,
    spatk: 35,
    spdef: 110,
    spe: 87,
    growth: "medium-fast",
    evolution: null
  },

  "Hitmonchan": {
    id: 107,
    types: ["fighting"],
    stage: "final",
    hp: 50,
    atk: 105,
    def: 79,
    spatk: 35,
    spdef: 110,
    spe: 76,
    growth: "medium-fast",
    evolution: null
  },

  "Lickitung": {
    id: 108,
    types: ["normal"],
    stage: "final",
    hp: 90,
    atk: 55,
    def: 75,
    spatk: 60,
    spdef: 75,
    spe: 30,
    growth: "medium-fast",
    evolution: null
  },

  "Koffing": {
    id: 109,
    types: ["poison"],
    stage: "basic",
    hp: 40,
    atk: 65,
    def: 95,
    spatk: 60,
    spdef: 45,
    spe: 35,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 35,
      to: "Weezing"
    }
  },

  "Weezing": {
    id: 110,
    types: ["poison"],
    stage: "final",
    hp: 65,
    atk: 90,
    def: 120,
    spatk: 85,
    spdef: 70,
    spe: 60,
    growth: "medium-fast",
    evolution: null
  },

  "Rhyhorn": {
    id: 111,
    types: ["ground", "rock"],
    stage: "basic",
    hp: 80,
    atk: 85,
    def: 95,
    spatk: 30,
    spdef: 30,
    spe: 25,
    growth: "slow",
    evolution: {
      method: "level",
      level: 42,
      to: "Rhydon"
    }
  },

  "Rhydon": {
    id: 112,
    types: ["ground", "rock"],
    stage: "final",
    hp: 105,
    atk: 130,
    def: 120,
    spatk: 45,
    spdef: 45,
    spe: 40,
    growth: "slow",
    evolution: null
  },

  "Chansey": {
    id: 113,
    types: ["normal"],
    stage: "final",
    hp: 250,
    atk: 5,
    def: 5,
    spatk: 35,
    spdef: 105,
    spe: 50,
    growth: "fast",
    evolution: null
  },

  "Tangela": {
    id: 114,
    types: ["grass"],
    stage: "final",
    hp: 65,
    atk: 55,
    def: 115,
    spatk: 100,
    spdef: 40,
    spe: 60,
    growth: "medium-fast",
    evolution: null
  },

  "Kangaskhan": {
    id: 115,
    types: ["normal"],
    stage: "final",
    hp: 105,
    atk: 95,
    def: 80,
    spatk: 40,
    spdef: 80,
    spe: 90,
    growth: "medium-fast",
    evolution: null
  },

  "Horsea": {
    id: 116,
    types: ["water"],
    stage: "basic",
    hp: 30,
    atk: 40,
    def: 70,
    spatk: 70,
    spdef: 25,
    spe: 60,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 32,
      to: "Seadra"
    }
  },

  "Seadra": {
    id: 117,
    types: ["water"],
    stage: "final",
    hp: 55,
    atk: 65,
    def: 95,
    spatk: 95,
    spdef: 45,
    spe: 85,
    growth: "medium-fast",
    evolution: null
  },

  "Goldeen": {
    id: 118,
    types: ["water"],
    stage: "basic",
    hp: 45,
    atk: 67,
    def: 60,
    spatk: 35,
    spdef: 50,
    spe: 63,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 33,
      to: "Seaking"
    }
  },

  "Seaking": {
    id: 119,
    types: ["water"],
    stage: "final",
    hp: 80,
    atk: 92,
    def: 65,
    spatk: 65,
    spdef: 80,
    spe: 68,
    growth: "medium-fast",
    evolution: null
  },

  "Staryu": {
    id: 120,
    types: ["water"],
    stage: "basic",
    hp: 30,
    atk: 45,
    def: 55,
    spatk: 70,
    spdef: 55,
    spe: 85,
    growth: "slow",
    evolution: {
      method: "item",
      item: "Water Stone",
      to: "Starmie"
    }
  },

  "Starmie": {
    id: 121,
    types: ["water", "psychic"],
    stage: "final",
    hp: 60,
    atk: 75,
    def: 85,
    spatk: 100,
    spdef: 85,
    spe: 115,
    growth: "slow",
    evolution: null
  },

  "Mr. Mime": {
    id: 122,
    types: ["psychic", "fairy"],
    stage: "final",
    hp: 40,
    atk: 45,
    def: 65,
    spatk: 100,
    spdef: 120,
    spe: 90,
    growth: "medium-fast",
    evolution: null
  },

  "Scyther": {
    id: 123,
    types: ["bug", "flying"],
    stage: "final",
    hp: 70,
    atk: 110,
    def: 80,
    spatk: 55,
    spdef: 80,
    spe: 105,
    growth: "medium-fast",
    evolution: null
  },

  "Jynx": {
    id: 124,
    types: ["ice", "psychic"],
    stage: "final",
    hp: 65,
    atk: 50,
    def: 35,
    spatk: 115,
    spdef: 95,
    spe: 95,
    growth: "medium-fast",
    evolution: null
  },

  "Electabuzz": {
    id: 125,
    types: ["electric"],
    stage: "final",
    hp: 65,
    atk: 83,
    def: 57,
    spatk: 95,
    spdef: 85,
    spe: 105,
    growth: "medium-fast",
    evolution: null
  },

  "Magmar": {
    id: 126,
    types: ["fire"],
    stage: "final",
    hp: 65,
    atk: 95,
    def: 57,
    spatk: 100,
    spdef: 85,
    spe: 93,
    growth: "medium-fast",
    evolution: null
  },

  "Pinsir": {
    id: 127,
    types: ["bug"],
    stage: "final",
    hp: 65,
    atk: 125,
    def: 100,
    spatk: 55,
    spdef: 70,
    spe: 85,
    growth: "slow",
    evolution: null
  },

  "Tauros": {
    id: 128,
    types: ["normal"],
    stage: "final",
    hp: 75,
    atk: 100,
    def: 95,
    spatk: 40,
    spdef: 70,
    spe: 110,
    growth: "slow",
    evolution: null
  },

  "Magikarp": {
    id: 129,
    types: ["water"],
    stage: "basic",
    hp: 20,
    atk: 10,
    def: 55,
    spatk: 15,
    spdef: 20,
    spe: 80,
    growth: "slow",
    evolution: {
      method: "level",
      level: 20,
      to: "Gyarados"
    }
  },

  "Gyarados": {
    id: 130,
    types: ["water", "flying"],
    stage: "final",
    hp: 95,
    atk: 125,
    def: 79,
    spatk: 60,
    spdef: 100,
    spe: 81,
    growth: "slow",
    evolution: null
  },

  "Lapras": {
    id: 131,
    types: ["water", "ice"],
    stage: "final",
    hp: 130,
    atk: 85,
    def: 80,
    spatk: 85,
    spdef: 95,
    spe: 60,
    growth: "slow",
    evolution: null
  },

  "Ditto": {
    id: 132,
    types: ["normal"],
    stage: "final",
    hp: 48,
    atk: 48,
    def: 48,
    spatk: 48,
    spdef: 48,
    spe: 48,
    growth: "medium-fast",
    evolution: null
  },

  "Eevee": {
    id: 133,
    types: ["normal"],
    stage: "basic",
    hp: 55,
    atk: 55,
    def: 50,
    spatk: 45,
    spdef: 65,
    spe: 55,
    growth: "medium-fast",
    evolution: {
      method: "branch",
      options: [
        { method: "item", item: "Water Stone", to: "Vaporeon" },
        { method: "item", item: "Thunder Stone", to: "Jolteon" },
        { method: "item", item: "Fire Stone", to: "Flareon" }
      ]
    }
  },

  "Vaporeon": {
    id: 134,
    types: ["water"],
    stage: "final",
    hp: 130,
    atk: 65,
    def: 60,
    spatk: 110,
    spdef: 95,
    spe: 65,
    growth: "medium-fast",
    evolution: null
  },

  "Jolteon": {
    id: 135,
    types: ["electric"],
    stage: "final",
    hp: 65,
    atk: 65,
    def: 60,
    spatk: 110,
    spdef: 95,
    spe: 130,
    growth: "medium-fast",
    evolution: null
  },

  "Flareon": {
    id: 136,
    types: ["fire"],
    stage: "final",
    hp: 65,
    atk: 130,
    def: 60,
    spatk: 95,
    spdef: 110,
    spe: 65,
    growth: "medium-fast",
    evolution: null
  },

  "Porygon": {
    id: 137,
    types: ["normal"],
    stage: "final",
    hp: 65,
    atk: 60,
    def: 70,
    spatk: 85,
    spdef: 75,
    spe: 40,
    growth: "medium-fast",
    evolution: null
  },

  "Omanyte": {
    id: 138,
    types: ["rock", "water"],
    stage: "basic",
    hp: 35,
    atk: 40,
    def: 100,
    spatk: 90,
    spdef: 55,
    spe: 35,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 40,
      to: "Omastar"
    }
  },

  "Omastar": {
    id: 139,
    types: ["rock", "water"],
    stage: "final",
    hp: 70,
    atk: 60,
    def: 125,
    spatk: 115,
    spdef: 70,
    spe: 55,
    growth: "medium-fast",
    evolution: null
  },

  "Kabuto": {
    id: 140,
    types: ["rock", "water"],
    stage: "basic",
    hp: 30,
    atk: 80,
    def: 90,
    spatk: 55,
    spdef: 45,
    spe: 55,
    growth: "medium-fast",
    evolution: {
      method: "level",
      level: 40,
      to: "Kabutops"
    }
  },

  "Kabutops": {
    id: 141,
    types: ["rock", "water"],
    stage: "final",
    hp: 60,
    atk: 115,
    def: 105,
    spatk: 65,
    spdef: 70,
    spe: 80,
    growth: "medium-fast",
    evolution: null
  },

  "Aerodactyl": {
    id: 142,
    types: ["rock", "flying"],
    stage: "final",
    hp: 80,
    atk: 105,
    def: 65,
    spatk: 60,
    spdef: 75,
    spe: 130,
    growth: "slow",
    evolution: null
  },

  "Snorlax": {
    id: 143,
    types: ["normal"],
    stage: "final",
    hp: 160,
    atk: 110,
    def: 65,
    spatk: 65,
    spdef: 110,
    spe: 30,
    growth: "slow",
    evolution: null
  },

  "Articuno": {
    id: 144,
    types: ["ice", "flying"],
    stage: "final",
    hp: 90,
    atk: 85,
    def: 100,
    spatk: 95,
    spdef: 125,
    spe: 85,
    growth: "slow",
    evolution: null
  },

  "Zapdos": {
    id: 145,
    types: ["electric", "flying"],
    stage: "final",
    hp: 90,
    atk: 90,
    def: 85,
    spatk: 125,
    spdef: 90,
    spe: 100,
    growth: "slow",
    evolution: null
  },

  "Moltres": {
    id: 146,
    types: ["fire", "flying"],
    stage: "final",
    hp: 90,
    atk: 100,
    def: 90,
    spatk: 125,
    spdef: 85,
    spe: 90,
    growth: "slow",
    evolution: null
  },

  "Dratini": {
    id: 147,
    types: ["dragon"],
    stage: "basic",
    hp: 41,
    atk: 64,
    def: 45,
    spatk: 50,
    spdef: 50,
    spe: 50,
    growth: "slow",
    evolution: {
      method: "level",
      level: 30,
      to: "Dragonair"
    }
  },

  "Dragonair": {
    id: 148,
    types: ["dragon"],
    stage: "mid",
    hp: 61,
    atk: 84,
    def: 65,
    spatk: 70,
    spdef: 70,
    spe: 70,
    growth: "slow",
    evolution: {
      method: "level",
      level: 55,
      to: "Dragonite"
    }
  },

  "Dragonite": {
    id: 149,
    types: ["dragon", "flying"],
    stage: "final",
    hp: 91,
    atk: 134,
    def: 95,
    spatk: 100,
    spdef: 100,
    spe: 80,
    growth: "slow",
    evolution: null
  },

  "Mewtwo": {
    id: 150,
    types: ["psychic"],
    stage: "final",
    hp: 106,
    atk: 110,
    def: 90,
    spatk: 154,
    spdef: 90,
    spe: 130,
    growth: "slow",
    evolution: null
  },

  "Mew": {
    id: 151,
    types: ["psychic"],
    stage: "final",
    hp: 100,
    atk: 100,
    def: 100,
    spatk: 100,
    spdef: 100,
    spe: 100,
    growth: "medium-slow",
    evolution: null
  }
};


const TYPE_DROP_TABLES = {
    electric: [
        { item: "Thunder Stone", basic: 20, mid: 30, final: 50 }
    ],
    water: [
        { item: "Water Stone", basic: 20, mid: 30, final: 50 }
    ],
    fire: [
        { item: "Fire Stone", basic: 20, mid: 30, final: 50 }
    ],
    grass: [
        { item: "Leaf Stone", basic: 20, mid: 30, final: 50 }
    ],
    fairy: [
        { item: "Moon Stone", basic: 20, mid: 30, final: 50 }
    ]
};

const POKEMON_DROP_TABLES = {
    // Exemplo de drop específico com chance fixa:
    // "Pikachu": [
    //     { item: "Light Ball", chance: 5 }
    // ]
};

const WORLD_ROUTES = [
    { name: "ROTA 01", encounters: ["Pidgey", 50, "Rattata", 50, "Pikachu", 50, "Psyduck", 50, "Oddish", 50, "Tentacool", 50], defeated: 0 },
    { name: "ROTA 22", encounters: ["Rattata", 45, "Spearow", 45, "Mankey", 5], defeated: 0 },
    { name: "ROTA 02", encounters: ["Pidgey", 30, "Rattata", 40, "Caterpie", 15, "Weedle", 15], defeated: 0 },
    { name: "ROTA 03", encounters: ["Pidgey", 30, "Spearow", 40, "Rattata", 20, "Mankey", 10], defeated: 0 },
    { name: "ROTA 04", encounters: ["Rattata", 30, "Spearow", 30, "Ekans", 15, "Sandshrew", 15, "Mankey", 10], defeated: 0 },
    { name: "ROTA 24", encounters: ["Caterpie", 10, "Metapod", 10, "Weedle", 10, "Kakuna", 10, "Pidgey", 20, "Oddish", 15, "Bellsprout", 15, "Abra", 10], defeated: 0 },
    { name: "ROTA 25", encounters: ["Caterpie", 10, "Metapod", 10, "Weedle", 10, "Kakuna", 10, "Pidgey", 20, "Oddish", 15, "Bellsprout", 15, "Abra", 10], defeated: 0 },
    { name: "ROTA 05", encounters: ["Pidgey", 40, "Pidgeotto", 10, "Meowth", 30, "Oddish", 10, "Bellsprout", 10], defeated: 0 },
    { name: "ROTA 06", encounters: ["Pidgey", 30, "Meowth", 30, "Oddish", 15, "Bellsprout", 15, "Mankey", 10], defeated: 0 },
    { name: "ROTA 11", encounters: ["Spearow", 30, "Ekans", 20, "Sandshrew", 20, "Drowzee", 30], defeated: 0 },
    { name: "ROTA 09", encounters: ["Rattata", 10, "Raticate", 10, "Spearow", 10, "Fearow", 10, "Ekans", 10, "Sandshrew", 10, "Nidoran F", 10, "Nidorina", 10, "Nidoran M", 10, "Nidorino", 10], defeated: 0 },
    { name: "ROTA 10", encounters: ["Rattata", 10, "Raticate", 10, "Spearow", 10, "Ekans", 10, "Sandshrew", 10, "Nidoran F", 10, "Nidoran M", 10, "Machop", 10, "Magnemite", 10, "Voltorb", 10], defeated: 0 },
    { name: "ROTA 08", encounters: ["Pidgey", 10, "Pidgeotto", 10, "Rattata", 10, "Meowth", 10, "Ekans", 10, "Sandshrew", 10, "Vulpix", 10, "Growlithe", 10, "Abra", 10, "Kadabra", 10], defeated: 0 },
    { name: "ROTA 07", encounters: ["Pidgey", 10, "Pidgeotto", 10, "Rattata", 10, "Meowth", 10, "Oddish", 10, "Bellsprout", 10, "Vulpix", 10, "Growlithe", 10, "Abra", 10, "Kadabra", 10], defeated: 0 },
    { name: "ROTA 16", encounters: ["Rattata", 10, "Raticate", 10, "Spearow", 10, "Fearow", 10, "Doduo", 60], defeated: 0 },
    { name: "ROTA 17", encounters: ["Spearow", 10, "Fearow", 20, "Ponyta", 20, "Doduo", 30, "Dodrio", 20], defeated: 0 },
    { name: "ROTA 18", encounters: ["Spearow", 30, "Fearow", 30, "Doduo", 40], defeated: 0 },
    { name: "ROTA 12", encounters: ["Pidgey", 10, "Pidgeotto", 10, "Oddish", 10, "Gloom", 10, "Bellsprout", 10, "Weepinbell", 10, "Venonat", 10, "Venomoth", 10, "Farfetch'd", 20], defeated: 0 },
    { name: "ROTA 13", encounters: ["Pidgey", 10, "Pidgeotto", 10, "Oddish", 10, "Gloom", 10, "Bellsprout", 10, "Weepinbell", 10, "Venonat", 10, "Venomoth", 10, "Ditto", 20], defeated: 0 },
    { name: "ROTA 14", encounters: ["Pidgey", 10, "Pidgeotto", 10, "Oddish", 10, "Gloom", 10, "Bellsprout", 10, "Weepinbell", 10, "Venonat", 10, "Venomoth", 10, "Ditto", 20], defeated: 0 },
    { name: "ROTA 15", encounters: ["Pidgey", 10, "Pidgeotto", 10, "Oddish", 10, "Gloom", 10, "Bellsprout", 10, "Weepinbell", 10, "Venonat", 10, "Venomoth", 10, "Ditto", 20], defeated: 0 },
    { name: "ROTA 19", encounters: ["Tentacool", 80, "Tentacruel", 20], defeated: 0 },
    { name: "ROTA 20", encounters: ["Tentacool", 80, "Tentacruel", 20], defeated: 0 },
    { name: "ROTA 21", encounters: ["Tentacool", 80, "Tentacruel", 20], defeated: 0 },
    { name: "ROTA 23", encounters: ["Spearow", 10, "Fearow", 10, "Ekans", 10, "Arbok", 10, "Sandshrew", 10, "Sandslash", 10, "Nidorina", 10, "Nidorino", 10, "Mankey", 10, "Primeape", 10], defeated: 0 }
];

const SHINY_CHANCE = 50;
const EXP_MULTIPLIER = 20;
const ICONS = {
    dps: "https://raw.githubusercontent.com/dbzkakarotobr/pokeidlebr/main/assets/icons/icon-dps.png",
    gold: "https://raw.githubusercontent.com/dbzkakarotobr/pokeidlebr/main/assets/icons/icon-gold.png",
    shiny: "https://raw.githubusercontent.com/dbzkakarotobr/pokeidlebr/main/assets/icons/icon-shiny.png",
    pokeball: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
    pokes: "https://raw.githubusercontent.com/dbzkakarotobr/pokeidlebr/main/assets/icons/icon-pokes.png",
    mochila: "https://raw.githubusercontent.com/dbzkakarotobr/pokeidlebr/main/assets/icons/icon-mochila.png",
    thunder: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/thunder-stone.png",
    water: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/water-stone.png",
    fire: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png",
    leaf: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leaf-stone.png",
    moon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png",
    trade: "https://raw.githubusercontent.com/dbzkakarotobr/pokeidlebr/main/assets/icons/stones/trade-stone.png",
};

let player = {
    gold: 0,
    team: [],
    totalAtk: 0,
    currentRouteIndex: 0,
    items: {
        "Thunder Stone": 0,
        "Water Stone": 0,
        "Fire Stone": 0,
        "Leaf Stone": 0,
        "Moon Stone": 0,
        "Trade Stone": 0
    }
};
let currentEnemy = null;
let currentSort = { key: 'lvl', order: 'desc' };

const fmt = (n) => Math.floor(n).toLocaleString('pt-BR');

function getExpNeeded(n, growthRate) {
    if (n <= 1) return 0;
    switch (growthRate) {
        case "fast":        return Math.floor(0.8 * Math.pow(n, 3));
        case "medium-fast": return Math.floor(Math.pow(n, 3));
        case "medium-slow": return Math.floor(1.2 * Math.pow(n, 3) - 15 * Math.pow(n, 2) + 100 * n - 140);
        case "slow":        return Math.floor(1.25 * Math.pow(n, 3));
        default:            return Math.floor(Math.pow(n, 3));
    }
}

function calculateAtk(name, lvl, isShiny) {
    const s = POKEMON_DATA[name];
    if (!s) return 0;
    
    const weights = {
       atk: 2,
       spatk: 2,
       spe: 1.5,
       hp: 1.5,
       def: 1,
       spdef: 1
    };

    const baseMedia =
       (s.atk * weights.atk +
        s.spatk * weights.spatk +
        s.spe * weights.spe +
        s.hp * weights.hp +
        s.def * weights.def +
        s.spdef * weights.spdef)
       / 6;

    let multi;
    if (s.stage === "basic") multi = 0.5;
    else if (s.stage === "mid") multi = 1.0;
    else multi = 1.5; // "final"

    let finalAtk = baseMedia + (lvl * multi);
    return Math.floor(isShiny ? finalAtk * 1.1 : finalAtk);
}

function getSpriteUrl(id, isShiny) {
    const base = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
    return isShiny ? `${base}/shiny/${id}.png` : `${base}/${id}.png`;
}



function tryDrops(pokemonName) {
    const data = POKEMON_DATA[pokemonName];
    if (!data) return [];

    const droppedItems = [];

    if (data.types) {
        data.types.forEach(type => {
            const dropTable = TYPE_DROP_TABLES[type];
            if (!dropTable) return;

            dropTable.forEach(drop => {
                const chance = drop[data.stage] ?? 0;

                if (Math.random() * 100 < chance) {
                    droppedItems.push(drop.item);
                }
            });
        });
    }

    const pokemonTable = POKEMON_DROP_TABLES[pokemonName];
    if (pokemonTable) {
        pokemonTable.forEach(drop => {
            const chance = drop.chance ?? 0;

            if (Math.random() * 100 < chance) {
                droppedItems.push(drop.item);
            }
        });
    }

    return droppedItems;
}

function addItemsToInventory(items) {
    items.forEach(itemName => {
        if (!player.items[itemName]) {
            player.items[itemName] = 0;
        }

        player.items[itemName]++;
    });
}

function getPokemonEvolution(name) {
    const data = POKEMON_DATA[name];
    return data ? data.evolution : null;
}

function canAutoEvolveByLevel(pokemon) {
    const evo = getPokemonEvolution(pokemon.name);
    if (!evo) return null;

    if (evo.method === "level" && pokemon.lvl >= evo.level) {
        return evo.to;
    }

    return null;
}

function canEvolveWithItem(pokemon, itemName) {
    const evo = getPokemonEvolution(pokemon.name);
    if (!evo) return null;

    if (evo.method === "item" && evo.item === itemName) {
        return evo.to;
    }

    if (evo.method === "branch") {
        const option = evo.options.find(opt => opt.method === "item" && opt.item === itemName);
        return option ? option.to : null;
    }

    return null;
}

window.closeRouteDex = () => document.getElementById('route-dex-modal').style.display = 'none';

window.chooseStarter = function(name) {
    player.team.push({ name, lvl: 1, exp: 0, isShiny: false });
    document.getElementById('dps-icon').src = ICONS.dps;
    document.getElementById('gold-icon').src = ICONS.gold;
    document.getElementById('pokemon-icon').src = ICONS.pokes;
    document.getElementById('starter-screen').style.display = 'none';
    document.getElementById('battle-panel').style.display = 'flex';
    document.getElementById('side-panels').style.display = 'flex';
    player.totalAtk = player.team.reduce((sum, p) => sum + calculateAtk(p.name, p.lvl, p.isShiny), 0);
    updateUI();
    spawnEnemy();
    setInterval(() => {
        if (currentEnemy && currentEnemy.hp > 0) {
            currentEnemy.hp -= (player.totalAtk / 10);
            if (currentEnemy.hp <= 0) handleVictory();
            updateHPDisplay();
        }
    }, 100);
};

window.changeRoute = function(delta) {
    let newIndex = player.currentRouteIndex + delta;
    if (newIndex >= 0 && newIndex < WORLD_ROUTES.length) {
        player.currentRouteIndex = newIndex;
        spawnEnemy();
    }
};

window.sortTeam = function(key) {
    if (currentSort.key === key) currentSort.order = currentSort.order === 'desc' ? 'asc' : 'desc';
    else { currentSort.key = key; currentSort.order = 'desc'; }
    updateUI();
};

function spawnEnemy() {
    const route = WORLD_ROUTES[player.currentRouteIndex];
    let name = "";
    let randomNum = Math.floor(Math.random() * 100);
    let cumulative = 0;
    for (let i = 0; i < route.encounters.length; i += 2) {
        cumulative += route.encounters[i + 1];
        if (randomNum < cumulative) { name = route.encounters[i]; break; }
    }
    if (!name) name = route.encounters[0];
    const isShiny = Math.random() * 100 < SHINY_CHANCE;
    const stats = POKEMON_DATA[name];
    document.getElementById('current-map').innerText = route.name;
    document.getElementById('route-kill-count').innerText = fmt(route.defeated);

    let enemyLvl = 5 + (player.currentRouteIndex * 2);
let routeMultiplier = 3.0 * Math.pow(1.20, player.currentRouteIndex);
let maxHp = Math.floor((((stats.hp * 2) * enemyLvl / 10) + 20) * routeMultiplier);
    if (isShiny) maxHp = Math.floor(maxHp * 1.5);

    currentEnemy = { name, hp: maxHp, maxHp, lvl: enemyLvl, isShiny };

const nameEl = document.getElementById('enemy-name');

nameEl.innerHTML = isShiny
  ? `<span class="shiny-text"><img src="${ICONS.shiny}" class="icon-inline"> ${name}</span>`
  : name;

nameEl.className = '';

    document.getElementById('enemy-img-container').innerHTML = `<img src="${getSpriteUrl(stats.id, isShiny)}">`;
    updateHPDisplay();
}

function handleVictory() {
    const route = WORLD_ROUTES[player.currentRouteIndex];
    route.defeated++;

    const goldEarned = Math.floor(currentEnemy.maxHp / 2);
    player.gold += goldEarned;
    showGoldAnim(goldEarned);

    const droppedItems = tryDrops(currentEnemy.name);
    addItemsToInventory(droppedItems);

    const teamBefore = player.team.length;

    if (!player.team.some(p => p.name === currentEnemy.name && p.isShiny === currentEnemy.isShiny)) {
        player.team.push({ name: currentEnemy.name, lvl: 1, exp: 0, isShiny: currentEnemy.isShiny });
    }

    let baseExp = Math.floor(currentEnemy.maxHp / 4);
    let exp = baseExp * EXP_MULTIPLIER;

    player.team.slice(0, teamBefore).forEach(p => {
        p.exp += exp;

        let needed = getExpNeeded(p.lvl + 1, POKEMON_DATA[p.name].growth);

        while (p.exp >= needed && p.lvl < 100) {
           p.exp -= needed;
           p.lvl++;
           needed = getExpNeeded(p.lvl + 1, POKEMON_DATA[p.name].growth);
        }
        if (p.lvl >= 100) {
           p.lvl = 100;
           p.exp = 0;
        }
    });

    player.team.forEach(p => {
        const target = canAutoEvolveByLevel(p);
        if (!target) return;

        const alreadyHasEvolution = player.team.some(
            x => x.name === target && x.isShiny === p.isShiny
        );

        if (!alreadyHasEvolution) {
            player.team.push({
                name: target,
                lvl: p.lvl,
                exp: 0,
                isShiny: p.isShiny
            });
        }
    });

    player.totalAtk = player.team.reduce((sum, p) => sum + calculateAtk(p.name, p.lvl, p.isShiny), 0);
    updateUI();
    spawnEnemy();
}

function updateUI() {
    document.getElementById('gold-count').innerText = fmt(player.gold);
    document.getElementById('total-atk').innerText = fmt(player.totalAtk);
    
    const pokemonCountEl = document.getElementById('pokemon-count');
    if (pokemonCountEl) {
        pokemonCountEl.textContent = player.team.length;
    }
    
    const list = document.getElementById('pokemon-list');

    let sorted = [...player.team].sort((a, b) => {
        let vA = (currentSort.key === 'dps') ? calculateAtk(a.name, a.lvl, a.isShiny) : a[currentSort.key];
        let vB = (currentSort.key === 'dps') ? calculateAtk(b.name, b.lvl, b.isShiny) : b[currentSort.key];
        return currentSort.order === 'desc' ? (vB > vA ? 1 : -1) : (vA > vB ? 1 : -1);
    });

    list.innerHTML = sorted.map(p => `
        <div class="team-item">
            <img src="${getSpriteUrl(POKEMON_DATA[p.name].id, p.isShiny)}">
            <span class="team-name ${p.isShiny ? 'shiny-text' : ''}">
                ${p.isShiny ? `<img src="${ICONS.shiny}" class="icon-inline">` : ''}${p.name}
            </span>
            <span>${p.lvl}</span>
            <span class="dps-value">${fmt(calculateAtk(p.name, p.lvl, p.isShiny))}</span>
        </div>`).join('');
}

function updateHPDisplay() {
    const hpBar = document.getElementById('enemy-hp-bar');
    const p = Math.max(0, (currentEnemy.hp / currentEnemy.maxHp) * 100);
    hpBar.style.width = p + "%";

    if (p > 75) hpBar.style.backgroundColor = "#78c850";
    else if (p > 50) hpBar.style.backgroundColor = "#f0d030";
    else if (p > 25) hpBar.style.backgroundColor = "#f08030";
    else hpBar.style.backgroundColor = "#f03030";

    document.getElementById('hp-current').innerText = fmt(currentEnemy.hp);
    document.getElementById('hp-max').innerText = fmt(currentEnemy.maxHp);
}

function showGoldAnim(val) {
    const area = document.getElementById('reward-area');
    const el = document.createElement('div');
    el.className = 'gold-anim';
    el.innerHTML = `+${fmt(val)} <img src="${ICONS.gold}" class="icon-reward">`;
    area.appendChild(el);
    setTimeout(() => el.remove(), 1400);
}

function useEvolutionItemOnPokemon(pokemonIndex, itemName) {
    const pokemon = player.team[pokemonIndex];
    if (!pokemon) return false;

    if (!player.items[itemName] || player.items[itemName] <= 0) return false;

    const target = canEvolveWithItem(pokemon, itemName);
    if (!target) return false;

    const alreadyHasEvolution = player.team.some(
        p => p.name === target && p.isShiny === pokemon.isShiny
    );

    if (alreadyHasEvolution) return false;

    player.items[itemName]--;

    player.team.push({
        name: target,
        lvl: pokemon.lvl,
        exp: 0,
        isShiny: pokemon.isShiny
    });

    player.totalAtk = player.team.reduce(
        (sum, p) => sum + calculateAtk(p.name, p.lvl, p.isShiny),
        0
    );

    updateUI();
    return true;
}

window.openRouteDex = function() {
    const modal = document.getElementById('route-dex-modal');
    const list = document.getElementById('route-dex-list');
    const route = WORLD_ROUTES[player.currentRouteIndex];

    document.getElementById('modal-title').innerText = `Pokemons: ${route.name}`;

    list.innerHTML = "";

    // 🔹 Remove duplicados
    const uniqueNames = new Set();

    for (let i = 0; i < route.encounters.length; i += 2) {
        uniqueNames.add(route.encounters[i]);
    }

    // 🔹 Agora percorre só os únicos
    uniqueNames.forEach(pkName => {
        const stats = POKEMON_DATA[pkName];
        if (!stats) return;

        const hasNormal = player.team.some(p => p.name === pkName && !p.isShiny);
        const hasShiny = player.team.some(p => p.name === pkName && p.isShiny);

        const entry = document.createElement('div');
        entry.className = 'dex-item';

        entry.innerHTML = `
    <span class="${hasShiny ? 'dex-owned' : 'dex-missing'}">
        <img src="${ICONS.shiny}" class="icon-dex-shiny">
    </span>

    <span class="${hasNormal ? 'dex-owned' : 'dex-missing'}">
        <img src="${ICONS.pokeball}" class="icon-dex-ball">
    </span>

    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${stats.id}.png">

    <span class="dex-name">${pkName}</span>
`;

        list.appendChild(entry);
    });

    modal.style.display = 'flex';
};

window.closeBagModal = function() {
    document.getElementById('bag-modal').style.display = 'none';
};

window.openBagModal = function() {
    const modal = document.getElementById('bag-modal');
    const list = document.getElementById('bag-items-list');

    list.innerHTML = "";

    const itemIcons = {
        "Thunder Stone": ICONS.thunder,
        "Water Stone": ICONS.water,
        "Fire Stone": ICONS.fire,
        "Leaf Stone": ICONS.leaf,
        "Moon Stone": ICONS.moon,
        "Trade Stone": ICONS.trade
    };

    const entries = Object.entries(player.items)
        .filter(([name, count]) => count > 0)
        .sort((a, b) => a[0].localeCompare(b[0], 'en', { sensitivity: 'base' }));

    if (entries.length === 0) {
        list.innerHTML = `
            <div class="bag-item">
                <img src="${ICONS.mochila}">
                <span class="bag-item-name">Sem itens</span>
                <span class="bag-item-count">0</span>
            </div>
        `;
    } else {
        entries.forEach(([name, count]) => {
            const row = document.createElement('div');
            row.className = 'bag-item';

            row.innerHTML = `
                <img src="${itemIcons[name] || ICONS.mochila}" alt="${name}">
                <span class="bag-item-name">${name}</span>
                <span class="bag-item-count">x${count}</span>
            `;

            list.appendChild(row);
        });
    }

    modal.style.display = 'flex';
};
