import { EveryCharacter, everyCharacter } from './character-name';

export const checkCharacterName = function (name: string): name is EveryCharacter {
  return everyCharacter.includes(name as EveryCharacter);
};
