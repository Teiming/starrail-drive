import React, { ReactElement } from 'react';
import CharacterCard from './Card/CharacterCard';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { mode } from 'slice/grobalSlice';
import { EveryElement } from 'types/every';
import {
  Character,
  EveryCharacter,
  everyCharacter,
  everyCharacterDB,
  templateCharacter,
} from 'types/character';
import './CharacterList.css';
import { checkCharacterName } from 'types/typeCheck';

interface Props {
  onDetail(name: string): void;
}

export default function CharacterList(props: Props) {
  const characters = useSelector((state: State) => state.characterSlice);

  let innerCharacter: ReactElement[] = [];
  for (const name in characters) {
    let element: EveryElement = '물리';
    let data: Character = templateCharacter;
    if (checkCharacterName(name)) {
      function nameCheck(name: string): name is EveryCharacter {
        return everyCharacter.includes(name as EveryCharacter);
      }
      if (nameCheck(name)) {
        element = everyCharacterDB[name][0];
        if (Object.keys(characters).includes(name)) {
          const preData = characters[name];
          if (preData) {
            data = preData;
          }
        }
      }
      innerCharacter.push(
        <CharacterCard
          key={name}
          name={name}
          element={element}
          data={data}
          onDetail={(name: string) => {
            props.onDetail(name);
          }}
        />
      );
    } else if (name === '개척자') {
      innerCharacter.push(
        <CharacterCard
          key={name}
          name={name}
          element={characters.개척자.속성}
          data={characters.개척자}
          onDetail={(name: string) => {
            props.onDetail(name);
          }}
        />
      );
    }
  }
  return (
    <section className='characterList'>
      {innerCharacter}
      <div
        className='controler'
        onClick={() => {
          dispatch(mode('추가'));
        }}
      >
        <span>+</span>
      </div>
    </section>
  );
}
