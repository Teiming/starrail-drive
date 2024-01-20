import React from 'react';
import 'css/Empty.css';

interface EmptyProps {
  line: 1 | 2;
}

export default function Empty(props: EmptyProps) {
  return <section id='Empty' data-line={props.line}></section>;
}
