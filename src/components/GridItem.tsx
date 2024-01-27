import React, { CSSProperties } from 'react';

interface Props<T> {
  children: React.JSX.Element;
  value: T;
  onClick: (value: T) => void;
}

export default function GridItem<T extends string>({ children, value, onClick }: Props<T>) {
  const style: CSSProperties = {
    borderRadius: '0.75rem',
    padding: '0.5rem',
    backgroundColor: 'var(--primary)',
    scrollSnapAlign: 'start',
  };
  return (
    <div className='grid-item' style={style} onClick={() => onClick(value)}>
      {children}
    </div>
  );
}
