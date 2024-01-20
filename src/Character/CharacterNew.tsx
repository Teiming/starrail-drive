import React, { ReactElement } from 'react';
import { dispatch } from 'store';
import { addCharacter } from 'slice/characterSlice';
import { everyCharacter } from 'types/character';
import './CharacterNew.css';

interface Props {
  already: string[];
}

export default function CharacterNew(props: Props) {
  const filter = Object.keys(everyCharacter).filter((name) => !props.already.includes(name));
  let innerAdd: ReactElement[] = [];
  for (const key of filter) {
    innerAdd.push(
      <div key={key} className='캐릭터_신규'>
        <a
          className='썸네일'
          href='/'
          onClick={(e) => {
            e.preventDefault();
            dispatch(addCharacter(key));
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/png/character/' + key + '.png'}
            alt={'썸네일 - ' + key}
          />
        </a>
        <div className='이름'>{key}</div>
      </div>
    );
  }
  return <section id='AddCharacter'>{innerAdd}</section>;
}
