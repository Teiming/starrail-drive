import React, { CSSProperties } from 'react';

interface Props {
  children: React.JSX.Element;
}

export default function GridItem({ children }: Props) {
  const style: CSSProperties = {
    borderRadius: '0.75rem',
    padding: '0.5rem',
    backgroundColor: 'var(--primary)',
  };
  return (
    <div className='grid-item' style={style}>
      {children}
    </div>
  );
}
