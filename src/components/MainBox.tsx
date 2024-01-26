import React, { CSSProperties } from 'react';

interface Props {
  children: React.JSX.Element;
  id: string;
}

export default function MainBox({ children, id }: Props) {
  const style: CSSProperties = {
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  };
  return (
    <main id={id} style={style}>
      {children}
    </main>
  );
}
