import React, { ReactElement, useEffect, useState } from 'react';
import CharacterCard from './Card/CharacterCard';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { subMode } from 'slice/modeSlice';
import './CharacterList.css';

interface Props {
  onDetail(name: string): void;
}

export default function CharacterList(props: Props) {
  const initState: { [k: string]: string[] } = {};
  const [characterDB, setCharacterDB] = useState(initState);
  const characters = useSelector((state: State) => state.characterSlice);

  let innerCharacter: ReactElement[] = [];
  for (const name in characters) {
    if (name === '개척자') {
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
    } else {
      innerCharacter.push(
        <CharacterCard
          key={name}
          name={name}
          data={characters[name]}
          add={characterDB[name]}
          onDetail={(name: string) => {
            props.onDetail(name);
          }}
        />
      );
    }
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
          dispatch(subMode('추가'));
        }}
      >
        <span>+</span>
      </div>
    </section>
  );
}
