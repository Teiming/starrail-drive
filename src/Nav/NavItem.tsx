import React from 'react';
import { toggleFilter } from 'slice/filterSlice';
import { dispatch } from 'store';
import { EveryMode } from 'types/mode';

interface NavItemProps {
  mode: EveryMode;
  content: string;
  isSelected: boolean;
}

export default function NavItem(props: NavItemProps) {
  return (
    <li
      data-selected={props.isSelected}
      onClick={() => {
        dispatch(
          toggleFilter({ mode: props.mode, target: props.content, isSelected: !props.isSelected })
        );
      }}
    >
      {props.content}
    </li>
  );
}
