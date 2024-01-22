import type { EveryElement } from './every';
export { everyCharacter } from './character-name';

export interface Characters {
  [key: string]: Character;
  개척자: CharacterTrailblazer;
}

export type TraceLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export interface Trace {
  일반공격: Exclude<TraceLevel, 7 | 8 | 9 | 10>;
  전투스킬: TraceLevel;
  필살기: TraceLevel;
  특성: TraceLevel;
}
export type Eidolon = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type TraitLevelKeys = keyof Trace;

export interface Character {
  레벨: number;
  행적: Trace;
  성혼: Eidolon;
  속성?: EveryElement;
}

export interface CharacterTrailblazer extends Character {
  속성: EveryElement;
}
