import React, { ReactElement } from 'react';

interface Props {
  content: Array<string>;
  selected: (item: any) => void;
}

export default function Filter(props: Props) {
  let innerPath: ReactElement[] = [];
  const content = props.content;
  for (const i in content) {
    innerPath.push(
      <label key={content[i]} htmlFor={content[i]}>
        <input
          type='radio'
          name={props.content[0].toString()}
          id={content[i]}
          onChange={(e) => {
            props.selected(e.target.id);
          }}
        />
        <div>{content[i]}</div>
      </label>
    );
  }
  props.content.forEach((item) => {});
  return <div className='filter'>{innerPath}</div>;
}
