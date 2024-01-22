import React, { ReactElement, useState } from 'react';
import RelicAddSubBody from './RelicAddSubBody';
import { EverySubOption, everySubOption } from 'types/relic';
import './RelicAddSub.css';

interface Props {
  main: string;
  maxLine: number;
  onSub(): void;
}
export default function RelicAddSub(props: Props) {
  const defaultSelect: { [key in EverySubOption]: boolean } = {
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
          const target = e.target as HTMLElement;
          const id = target.id;
          if (selectedSubOption[id as EverySubOption]) {
            setSelectedCount(selectedCount - 1);
            setSelectedSubOption(Object.assign({}, selectedSubOption, { [id]: false }));
          } else {
            if (selectedCount < 4) {
              setSelectedCount(selectedCount + 1);
              setSelectedSubOption(Object.assign({}, selectedSubOption, { [id]: true }));
            }
          }
        }}
      >
        {subOption}
      </div>
    );
  }
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

// export default class RelicAddSub extends Component {
//   render() {
//   componentDidUpdate() {
//     if (this.state.subOpt[this.props.main]) {
//       this.setState({ selected: this.state.selected - 1 });
//       this.setState({
//         subOpt: Object.assign({}, this.state.subOpt, {
//           [this.props.main]: false,
//         }),
//       });
//     }
//   }
// }
