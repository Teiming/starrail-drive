import { EveryElement } from './every';
export { everyCharacter } from './character-name';

export interface Characters {
  [key: string]: Character;
  개척자: CharacterTrailblazer;
}

export interface TraitLevel {
  일반공격: 1 | 2 | 3 | 4 | 5 | 6;
  전투스킬: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  필살기: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  특성: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
export type Eidolon = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type TraitLevelKeys = keyof TraitLevel;
export default interface Character {
  레벨: number;
  특성: TraitLevel;
  성혼: Eidolon;
  속성?: EveryElement;
}

export interface CharacterTrailblazer extends Character {
  속성: EveryElement;
}
