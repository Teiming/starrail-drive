import React, { ReactElement, useEffect, useState } from 'react';
import CharacterCard from './Card/CharacterCard';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { switchSubMode } from 'slice/modeSlice';
import './CharacterList.css';
import { EveryElement, EveryPath } from 'types/every';

interface Props {
  onDetail(name: string): void;
}

export default function CharacterList(props: Props) {
  const initState: { [key: string]: [EveryElement, EveryPath] } = {};
  const [characterDB, setCharacterDB] = useState(initState);
  const characters = useSelector((state: State) => state.characterSlice);

  let innerCharacter: ReactElement[] = [];
  for (const name in characters) {
    innerCharacter.push(
      <CharacterCard
        key={name}
        name={name}
        element={characters[name]['속성']}
        data={characters[name]}
        add={characterDB[name]}
        onDetail={(name: string) => {
          props.onDetail(name);
        }}
      />
    );
  }

  useEffect(() => {
    fetch('raw/everyCharacterData.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'get',
    })
      .then((result) => {
        return result.json();
      })
      .then((json: typeof initState) => {
        setCharacterDB(json);
      });
  }, []);

  return (
    <section className='characterList'>
      {innerCharacter}
      <div
        className='controler'
        onClick={() => {
          dispatch(switchSubMode('추가'));
        }}
      >
        <span>+</span>
      </div>
    </section>
  );
}
