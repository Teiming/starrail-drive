import { EverySubOption, everySubOption } from 'types/relics';
import React, { ReactElement, useEffect, useState } from 'react';
import RelicAddSubBody from './RelicAddSubBody';
import './RelicAddSub.css';

interface Props {
  main: string;
  maxLine: number;
  onSub(): void;
}
export default function RelicAddSub(props: Props) {
  const defaultSelect: { [key in EverySubOption]: true | false } = {
    HP: false,
    공격력: false,
    방어력: false,
    'HP%': false,
    '공격력%': false,
    '방어력%': false,
    속도: false,
    '치명타 확률': false,
    '치명타 피해': false,
    '효과 명중': false,
    '효과 저항': false,
    '격파 특수효과': false,
  };
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedSubOption, setSelectedSubOption] = useState(defaultSelect);

  let innerPalette: ReactElement[] = [];
  for (const subOption of everySubOption) {
    let selected;
    if (subOption === props.main) {
      selected = 'disabled';
    } else {
      selected = selectedSubOption[subOption];
    }
    innerPalette.push(
      <div
        key={subOption}
        id={subOption}
        data-selected={selected}
        onClick={(e) => {
          if (e.target instanceof HTMLElement) {
            const id = e.target.id as EverySubOption;
            if (selectedSubOption[id]) {
              setSelectedCount(selectedCount - 1);
              setSelectedSubOption(Object.assign({}, selectedSubOption, { [id]: false }));
            } else {
              if (selectedCount < 4) {
                setSelectedCount(selectedCount + 1);
                setSelectedSubOption(Object.assign({}, selectedSubOption, { [id]: true }));
              }
            }
          }
        }}
      >
        {subOption}
      </div>
    );
  }
  useEffect(() => {
    const mainOpt = props.main;
    switch (mainOpt) {
      case 'HP':
      case '공격력':
      case 'HP%':
      case '공격력%':
      case '방어력%':
      case '속도':
      case '치명타 확률':
      case '치명타 피해':
      case '효과 명중':
      case '격파 특수효과':
        if (selectedSubOption[mainOpt]) {
          setSelectedCount(selectedCount - 1);
          setSelectedSubOption(Object.assign({}, selectedSubOption, { [props.main]: false }));
        }
        break;
      default:
        break;
    }
  }, [props.main, selectedCount, selectedSubOption]);
  return (
    <section className='RelicAddSub'>
      <h3>부 옵션</h3>
      <div className='RelicAddSubContent'>
        <RelicAddSubBody selectedSubOption={selectedSubOption} />
        <div className='RelicAddSubPalette'>{innerPalette}</div>
      </div>
    </section>
  );
}
