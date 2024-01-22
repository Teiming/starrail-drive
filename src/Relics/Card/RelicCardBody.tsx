import React from 'react';
import { RelicSubOption } from 'types/relics';
import './RelicCardBody.css';

interface Props {
  main: string;
  level: number;
  sub: RelicSubOption;
}

export default function RelicCardBody(props: Props) {
  const makePercent = (params: number) => {
    if (params < 1) {
      const _number = 100 * Number(params);
      return _number + '%';
    } else {
      return params;
    }
  };
  let mainValue;
  return (
    <section className='RelicCardBody'>
      <div className='RelicMain'>
        <span>{props.main}</span>
        <span>{mainValue}</span>
      </div>
      <dl className='RelicSub'>
        <dt>wndhq</dt>
        <dd>0.0044</dd>
        <dt>wndhq</dt>
        <dd>{makePercent(0.0044)}</dd>
        <dt>wndhq</dt>
        <dd>0.0044</dd>
        <dt>wndhq</dt>
        <dd>0.0044</dd>
      </dl>
    </section>
  );
}
