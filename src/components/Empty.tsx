import React, { CSSProperties } from 'react';

export default function Empty({ line }: { line: 1 | 2 }) {
  const style: CSSProperties = {};
  if (line === 2) {
    style.minHeight = 'calc(5.75rem + max(0.5rem, env(safe-area-inset-bottom)))';
  } else {
    style.minHeight = 'calc(3.5rem + max(0.5rem, env(safe-area-inset-bottom)))';
  }
  return <section id='Empty' style={style}></section>;
}
