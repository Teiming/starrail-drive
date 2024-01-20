import React from 'react';
// import Trailblazer from './Trailblazer';
import Level from './Level';
import DetailEidolon from './Eidolon';
import './CharacterDetail.css';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { changeEidolon, changeLevel } from 'slice/characterSlice';
import { Eidolon } from 'types/character';

interface Props {
  name: string;
}
export default function CharacterDetail(props: Props) {
  const name = props.name;
  const data = useSelector((state: State) => state.characterSlice[name]);
  return (
    <main id={name} className='character_detail'>
      <header>
        <img src='' alt='' />
      </header>
      {/* {trailblazer(name)} */}
      <main>{name} 상세보기</main>
      <Level
        level={data.레벨}
        changeLevel={(level: number) => {
          dispatch(changeLevel({ name, level }));
        }}
      />
      <DetailEidolon
        eidolon={data.성혼}
        onChange={(eidolon: Eidolon) => {
          dispatch(changeEidolon({ name, eidolon }));
        }}
      />
    </main>
  );
}

// export default class CharacterDetail extends Component {
//   constructor(props) {
//     super(props);
//     const data = this.props.data;
//     this.state = Object.assign({}, data);
//   }
//   trailblazer(name) {
//     if (name === '개척자') {
//       return (
//         <Trailblazer
//           element={this.state['속성']}
//           onTrailblazer={function (element) {
//             this.setState({ 속성: element });
//           }.bind(this)}
//         />
//       );
//     }
//   }
//   render() {
//     const name = this.props.name;
//   }
//   componentDidUpdate() {
//     const getLocalSet = JSON.parse(localStorage.getItem('캐릭터'));
//     const newTrailblazer = {
//       속성: this.state['속성'],
//       레벨: this.state['레벨'],
//     };
//     let newTotalSet = Object.assign(getLocalSet, {
//       개척자: newTrailblazer,
//     });
//     localStorage.setItem('캐릭터', JSON.stringify(newTotalSet));
//   }
//   componentWillUnmount() {
//     // this.props.onUpdateData();
//   }
// }
