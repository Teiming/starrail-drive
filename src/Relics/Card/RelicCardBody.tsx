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
      return params.toString();
    }
  };
  const getMainValue = (zero: number) => {
    return (level: number) => {
      return (zero * 100000 * (1 + (35 * level) / 100)) / 100000;
    };
  };
  const coeffi = {
    HP: 112.9,
    HP_: 0.06912,
    speed: 4,
    critDMG: 0.10368,
    heal: 0.0553,
    ele: 0.06222,
  } as const;
  let _getMainValue;
  switch (props.main) {
    case 'HP':
      _getMainValue = getMainValue(coeffi.HP);
      break;
    case '공격력':
      _getMainValue = getMainValue(0.5 * coeffi.HP);
      break;
    case 'HP%':
    case '공격력%':
    case '효과 명중':
      _getMainValue = getMainValue(coeffi.HP_);
      break;
    case '방어력%':
      _getMainValue = getMainValue(1.25 * coeffi.HP_);
      break;
    case '치명타 확률':
      _getMainValue = getMainValue(0.5 * coeffi.critDMG);
      break;
    case '치명타 피해':
    case '격파 특수효과':
      _getMainValue = getMainValue(coeffi.critDMG);
      break;
    case '치유량 보너스':
      _getMainValue = getMainValue(coeffi.heal);
      break;
    case '에너지 회복효율':
      _getMainValue = getMainValue(0.5 * coeffi.ele);
      break;
    default:
      _getMainValue = getMainValue(coeffi.ele);
      break;
  }
  return (
    <section className='RelicCardBody'>
      <div className='RelicMain'>
        <span>{props.main}</span>
        <span>{makePercent(_getMainValue(props.level))}</span>
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
