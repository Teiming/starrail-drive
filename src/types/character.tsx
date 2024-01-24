import { EveryCharacter } from './character-name';
import type { EveryElement } from './every';

export type { EveryCharacter, EveryCharacterWithTrailblazer } from './character-name';
export { everyCharacterDB, everyCharacter } from './character-name';

export type CharactersWithoutTrailblazer = {
  [key in EveryCharacter]: Character;
};
export type Characters = CharactersWithoutTrailblazer & {
  개척자: CharacterTrailblazer;
};

export type TraceMajor = [primary: true | false, secondary: true | false, tertiary: true | false];
export type TraceMinor = Array<true | false>;

export type TraceLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export interface Trace {
  일반공격: Exclude<TraceLevel, 7 | 8 | 9 | 10>;
  전투스킬: TraceLevel;
  필살기: TraceLevel;
  특성: TraceLevel;
  능력: TraceMajor;
  속성: TraceMinor;
}
export type Eidolon = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type TraitLevelKeys = keyof Trace;

export interface Character {
  레벨: number;
  행적: Trace;
  성혼: Eidolon;
}

export const templateCharacter: Character = {
  레벨: 1,
  행적: {
    일반공격: 1,
    전투스킬: 1,
    필살기: 1,
    특성: 1,
    능력: [false, false, false],
    속성: [],
  },
  성혼: 0,
};

export interface CharacterTrailblazer extends Character {
  속성: EveryElement;
}
