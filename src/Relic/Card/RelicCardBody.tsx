import React from 'react';
import { RelicSubOption } from 'types/relic';
import './RelicCardBody.css';

interface Props {
  main: string;
  level: number;
  sub: RelicSubOption;
}

export default function RelicCardBody(props: Props) {
  const main = props.main;
  let mainZero, mainDiff, mainValue;
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
        <dd>0.0044</dd>
        <dt>wndhq</dt>
        <dd>0.0044</dd>
        <dt>wndhq</dt>
        <dd>0.0044</dd>
      </dl>
    </section>
  );
}
