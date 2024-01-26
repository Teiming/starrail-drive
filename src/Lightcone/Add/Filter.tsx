import React from 'react';

interface Props<T> {
  content: T[];
  selected: (item: T) => void;
}

export default function Filter<T extends string>({ content, selected }: Props<T>) {
  return (
    <div className='filter'>
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
