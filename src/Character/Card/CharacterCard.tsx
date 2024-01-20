import React, { useState } from 'react';
import CardHeader from './CharacterCardHeader';
import CharacterCardLightcone from './CharacterCardLightcone';
import CharacterCardTrace from './CharacterCardTrace';
import CharacterCardRelic from './CharacterCardRelic';
import CharacterCardEidolon from './CharacterCardEidolon';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { subMode } from 'slice/modeSlice';
import Character, { CharacterTrailblazer } from 'types/character';
import './CharacterCard.css';

interface CharacterCardProps {
  name: string;
  data: Character | CharacterTrailblazer;
  add: string[];
  element?: string;
  onDetail(name: string): void;
}

export default function CharacterCard(props: CharacterCardProps) {
  const [name] = useState(props.name);
  const [element, setElement] = useState('물리');
  const [path] = useState('파멸');
  const [level] = useState(props.data.레벨);
  const [trace] = useState(props.data.특성);
  const [eidolon, setEidolon] = useState(props.data.성혼);
  const filter = useSelector((state: State) => state.filterSlice.character);
  const isSelected = filter[element];

  if (props.element) {
    // setElement(props.element);
    // switch (element) {
    //   case '화염':
    //     setPath('보존');
    //     break;
    //   default:
    //     setPath('파멸');
    //     break;
    // }
  } else {
    let everyCharacter = props.add;
    if (everyCharacter) {
      // setElement(everyCharacter[0]);
      // setPath(everyCharacter[1]);
    }
  }
  return (
    <article
      className='CharacterCard'
      data-filter={isSelected}
      onClick={() => {
        props.onDetail(name);
        dispatch(subMode('상세'));
      }}
    >
      <CardHeader name={name} level={level} element={element} path={path} />
      <hr />
      <section className='CharacterCardBody'>
        <CharacterCardLightcone id='lightconeId' />
        <hr />
        <CharacterCardTrace level={trace} />
        <CharacterCardRelic id={[1, 2, 3, 4, 5, 6]} />
        <CharacterCardEidolon eidolon={eidolon} />
      </section>
    </article>
  );
}
