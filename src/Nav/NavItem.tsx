import React from 'react';
import { toggleFilter } from 'slice/filterSlice';
import { dispatch } from 'store';
import Mode from 'types/mode';

interface NavItemProps {
  mode: Mode;
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

// export default class NavItem extends Component {
//   render() {
//     return (
//       <li
//       // data-selected={isSelected}
//       // onClick={function () {
//       //   this.props.onUpdateFilter(this.props.mode, content, !isSelected);
//       // }.bind(this)}
//       >
//         {/* <span>{content}</span> */}
//       </li>
//     );
//   }
// }
