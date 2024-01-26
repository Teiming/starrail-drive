import React, { CSSProperties } from 'react';
import './Grid.css';

interface Props {
  card_width: 12 | 20;
  children: React.JSX.Element;
  className?: string;
}

export default function Grid({ card_width, children }: Props) {
  const style: CSSProperties = {
    display: 'grid',
    gap: '0.75rem',
  };
  return (
    <section className='grid' style={style} data-card={card_width}>
      {children}
    </section>
  );
}
