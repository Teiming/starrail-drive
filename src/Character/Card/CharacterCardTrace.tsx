import type { Trace } from 'types/character';
import React, { ReactElement } from 'react';
import './CharacterCardTrace.css';

interface Props {
  trace: Trace;
}

export default function CharacterCardTrace(props: Props) {
  const traceItemAbbr = ['일반', '스킬', '필살', '특성'];
  const level = props.trace;
  const traceItem = [level['일반공격'], level['전투스킬'], level['필살기'], level['특성']];
  let innerTrace: ReactElement[] = [];
  for (const i in traceItemAbbr) {
    innerTrace.push(
      <div key={traceItemAbbr[i]} className='TraceItem'>
        <span className=''>{traceItemAbbr[i]}</span>
        <span className=''>{traceItem[i]}</span>
      </div>
    );
  }
  return <section className='CharacterCardTrace'>{innerTrace}</section>;
}
