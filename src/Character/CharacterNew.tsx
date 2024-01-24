import React, { ReactElement } from 'react';
import { dispatch } from 'store';
import { addCharacter } from 'slice/characterSlice';
import { everyCharacterDB } from 'types/character';
import { checkCharacterName } from 'types/typeCheck';
import './CharacterNew.css';

interface Props {
  already: string[];
}

export default function CharacterNew(props: Props) {
  const filter = Object.keys(everyCharacterDB).filter((name) => !props.already.includes(name));
  let innerAdd: ReactElement[] = [];
  for (const name of filter) {
    innerAdd.push(
      <div key={name} className='캐릭터_신규'>
        <a
          className='썸네일'
          href='/'
          onClick={(e) => {
            e.preventDefault();
            if (checkCharacterName(name)) {
              dispatch(addCharacter(name));
            }
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/png/character/' + name + '.png'}
            alt={'썸네일 - ' + name}
          />
        </a>
        <div className='이름'>{name}</div>
      </div>
    );
  }
  return <section id='AddCharacter'>{innerAdd}</section>;
}
