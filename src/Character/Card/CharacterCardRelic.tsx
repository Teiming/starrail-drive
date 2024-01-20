import React from 'react';
import './CharacterCardRelic.css';

interface Props {
  id: number[];
}
export default function CharacterCardRelic(props: Props) {
  return (
    <section className='CharacterCardRelic'>
      <div className='부위 머리'>머리</div>
      <div className='부위 팔'>팔</div>
      <div className='부위 몸통'>몸통</div>
      <div className='부위 다리'>다리</div>
      <div className='부위 구체'>구체</div>
      <div className='부위 매듭'>매듭</div>
    </section>
  );
}
