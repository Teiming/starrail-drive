import { Component } from 'react';

// export default class Trailblazer extends Component {
//   render() {
//     const everyElement = { 물리: '파멸', 화염: '보존' };
//     var innerTrailblazer = [];
//     for (const key in everyElement) {
//       if (key === this.props.element) {
//         innerTrailblazer.push(
//           <div id='현재' key={key}>
//             <span>
//               {key} - {everyElement[key]}
//             </span>
//           </div>
//         );
//       } else {
//         innerTrailblazer.push(
//           <div
//             key={key}
//             onClick={function () {
//               if (window.confirm('개척자의 속성을 ' + key + '(으)로 변경합니다.')) {
//                 this.props.onTrailblazer(key);
//               }
//             }.bind(this)}
//           >
//             <span>
//               {key} - {everyElement[key]}
//             </span>
//           </div>
//         );
//       }
//     }
//     return <section id='trailblazer'>{innerTrailblazer}</section>;
//   }
// }
