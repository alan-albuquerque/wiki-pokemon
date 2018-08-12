interface Ability2 {
  name: string;
  url: string;
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: Ability2;
}

interface Form {
  name: string;
  url: string;
}

interface Version {
  name: string;
  url: string;
}

interface GameIndice {
  game_index: number;
  version: Version;
}

interface Item {
  name: string;
  url: string;
}

interface Version2 {
  name: string;
  url: string;
}

interface VersionDetail {
  rarity: number;
  version: Version2;
}

interface HeldItem {
  item: Item;
  version_details: VersionDetail[];
}

interface LocationArea {
  name: string;
  url: string;
}

interface ConditionValue {
  name: string;
  url: string;
}

interface Method {
  name: string;
  url: string;
}

interface EncounterDetail {
  min_level: number;
  max_level: number;
  condition_values: ConditionValue[];
  chance: number;
  method: Method;
}

interface Version3 {
  name: string;
  url: string;
}

interface VersionDetail2 {
  max_chance: number;
  encounter_details: EncounterDetail[];
  version: Version3;
}

interface LocationAreaEncounter {
  location_area: LocationArea;
  version_details: VersionDetail2[];
}

interface Move2 {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface VersionGroupDetail {
  level_learned_at: number;
  version_group: VersionGroup;
  move_learn_method: MoveLearnMethod;
}

interface Move {
  move: Move2;
  version_group_details: VersionGroupDetail[];
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  back_female: string;
  back_shiny_female: string;
  back_default: string;
  front_female: string;
  front_shiny_female: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Stat2 {
  name: string;
  url: string;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

interface Type2 {
  name: string;
  url: string;
}

interface Type {
  slot: number;
  type: Type2;
}

export interface IPokemonDetailResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: GameIndice[];
  held_items: HeldItem[];
  location_area_encounters: LocationAreaEncounter[];
  moves: Move[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}
