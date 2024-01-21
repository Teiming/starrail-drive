import React from 'react';
import 'css/Empty.css';

export default function Empty(props: { line: 1 | 2 }) {
  return <section id='Empty' data-line={props.line}></section>;
}
