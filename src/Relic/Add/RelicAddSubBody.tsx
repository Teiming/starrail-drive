import React, { ReactElement } from 'react';
import { everySubOptionList } from 'types/relic';
import './RelicAddSubBody.css';

interface Props {
  selectedSubOption: { [key in (typeof everySubOptionList)[number]]: boolean };
}
export default function RelicAddSubBody(props: Props) {
  const selectedSubOption = props.selectedSubOption;

  let selected: string[] = [''];
  for (const subOption in selectedSubOption) {
    if (selectedSubOption[subOption]) {
      selected.push(subOption);
    }
  }

  let innerBody: ReactElement[] = [];
  [1, 2, 3, 4].forEach((i) => {
    let subOption = '';
    if (selected[i]) {
      subOption = selected[i];
    }
    innerBody.push(
      <div key={'부옵션' + i}>
        <input type='text' name={'sub' + i} value={subOption} readOnly />
        <select name='' id=''></select>
      </div>
    );
  });
  return <section className='RelicAddSubBody'>{innerBody}</section>;
}
