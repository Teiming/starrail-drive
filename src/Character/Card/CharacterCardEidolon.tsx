import React, { ReactElement } from 'react';
import './CharacterCardEidolon.css';

interface Props {
  eidolon: number;
}

export default function CharacterCardEidolon(props: Props) {
  let innerStatus: ReactElement[] = [];
  for (let i = 0; i < props.eidolon; i++) {
    innerStatus.push(<div key={i + 1} className='EidolonItem'></div>);
  }
  return (
    <section className='CharacterCardEidolon'>
      <div className='CharacterCardEidolonTitle'>
        <span>성혼</span>
      </div>
      <div className='CharacterCardEidolonStatus'>{innerStatus}</div>
    </section>
  );
}
