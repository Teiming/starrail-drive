import React, { useEffect, useRef } from 'react';

interface Props<T> {
  content: T[];
  selected: (item: T) => void;
}

export default function Filter<T extends string>({ content, selected }: Props<T>) {
  const defaultSelector = useRef(null);

  useEffect(() => {
    if (defaultSelector.current) {
      const target = defaultSelector.current as HTMLElement;
      const input = target.children[0].children[0] as HTMLInputElement;
      input.checked = true;
    }
  }, []);

  return (
    <div className='filter' ref={defaultSelector}>
      {content.map((value) => {
        return (
          <label key={value} htmlFor={value}>
            <input
              type='radio'
              name={content[0]}
              id={value}
              onChange={(e) => {
                selected(e.target.id as typeof value);
              }}
            />
            <div>{value}</div>
          </label>
        );
      })}
    </div>
  );
}
