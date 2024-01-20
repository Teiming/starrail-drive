import React from 'react';
import './CharacterCardHeader.css';

interface Props {
  name: string;
  level: number;
  element: string;
  path: string;
}

export default function CharacterCardHeader(props: Props) {
  return (
    <section className='CharacterCardHeader'>
      <div className='CharacterCardThumbnail'>
        <img
          src={process.env.PUBLIC_URL + '/png/character/' + props.name + '.png'}
          alt={props.name + ' 썸네일'}
        />
      </div>
      <div className='캐릭터_요약'>
        <div className='캐릭터_이름'>{props.name}</div>
        <div className='캐릭터_레벨'>Lv. {props.level}</div>
        <div className='캐릭터_정보'>
          {props.element} / {props.path}
        </div>
      </div>
    </section>
  );
}
