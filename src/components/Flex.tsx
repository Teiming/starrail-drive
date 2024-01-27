import React, { CSSProperties } from 'react';

interface Props {
  children: React.JSX.Element;
  vertical?: true;
  s?: CSSProperties;
}

export default function Flex({ children, vertical, s }: Props) {
  const style: CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  };
  if (vertical) {
    style.flexDirection = 'column';
  }
  return (
    <div style={Object.assign(style, s)} aria-label='Flex'>
      {children}
    </div>
  );
}
