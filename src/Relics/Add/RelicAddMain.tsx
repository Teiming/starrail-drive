import React, { ReactElement } from 'react';
import { EveryRelicSlot } from 'types/every';
import './RelicAddMain.css';

interface Props {
  slot: EveryRelicSlot;
  level: number;
  onMain(key: string): void;
  onLevel(key: number): void;
}

export default function RelicAddMain(props: Props) {
  let mainOptList: string[] = [];
  switch (props.slot) {
    case '머리':
      mainOptList = ['HP'];
      break;
    case '팔':
      mainOptList = ['공격력'];
      break;
    case '몸통':
      mainOptList = [
        'HP%',
        '공격력%',
        '방어력%',
        '치명타 확률',
        '치명타 피해',
        '효과 명중',
        '치유량 보너스',
      ];
      break;
    case '다리':
      mainOptList = ['HP%', '공격력%', '방어력%', '속도'];
      break;
    case '구체':
      mainOptList = [
        'HP%',
        '공격력%',
        '방어력%',
        '물리 속성 피해 증가',
        '화염 속성 피해 증가',
        '얼음 속성 피해 증가',
        '번개 속성 피해 증가',
        '바람 속성 피해 증가',
        '양자 속성 피해 증가',
        '허수 속성 피해 증가',
      ];
      break;
    case '매듭':
      mainOptList = ['HP%', '공격력%', '방어력%', '에너지 회복효율', '격파 특수효과'];
      break;
    default:
      break;
  }
  let innerOpt: ReactElement[] = [];
  for (const mainOpt of mainOptList) {
    innerOpt.push(
      <option key={mainOpt} value={mainOpt}>
        {mainOpt}
      </option>
    );
  }
  return (
    <section className='RelicAddMain'>
      <div className='RelicAddMainKey'>
        <h3>주 옵션</h3>
        <select
          required
          name='main'
          id=''
          onChange={(e) => {
            props.onMain(e.target.value);
          }}
        >
          {innerOpt}
        </select>
      </div>
      <div className='RelicAddLevel'>
        <h3>레벨</h3>
        <input
          type='number'
          name='level'
          inputMode='numeric'
          id=''
          value={props.level}
          onChange={(e) => {
            let level = Number(e.target.value);
            if (level < 0) {
              props.onLevel(0);
            } else if (level > 15) {
              props.onLevel(15);
            } else {
              props.onLevel(Number(level));
            }
          }}
        />
      </div>
    </section>
  );
}
