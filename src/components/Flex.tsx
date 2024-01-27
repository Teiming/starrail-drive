import React, { CSSProperties } from 'react';

interface Props {
  children: React.JSX.Element;
  v?: true;
  s?: CSSProperties;
}

export default function Flex({ children, v, s }: Props) {
  const style: CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  };
  if (v) {
    style.flexDirection = 'column';
  }
  return (
    <div style={Object.assign({}, style, s)} aria-label='Flex'>
      {children}
    </div>
  );
}
