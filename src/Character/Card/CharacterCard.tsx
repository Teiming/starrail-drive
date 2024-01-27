import type { EveryElement } from 'types/every';
import {
  everyCharacterDB,
  type Character,
  type CharacterTrailblazer,
  EveryCharacterWithTrailblazer,
} from 'types/character';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Lightcone from './Lightcone';
import CharacterCardTrace from './CharacterCardTrace';
import CharacterCardRelic from './CharacterCardRelic';
import Eidolon from './Eidolon';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { switchSubMode } from 'slice/modeSlice';
import './CharacterCard.css';

interface Props {
  name: EveryCharacterWithTrailblazer;
  data: Character | CharacterTrailblazer;
  element: EveryElement;
  onDetail: (name: string) => void;
}

export default function CharacterCard(props: Props) {
  const [name] = useState(props.name);
  const [element, setElement] = useState<EveryElement>('물리');
  const [path, setPath] = useState('파멸');
  const [level] = useState(props.data.레벨);
  const [trace] = useState(props.data.행적);
  const [eidolon] = useState(props.data.성혼);
  const filter = useSelector((state: State) => state.filterSlice.character);
  const isSelected = filter[element];

  useEffect(() => {
    if (props.element) {
      setElement(props.element as EveryElement);
      switch (props.element) {
        case '화염':
          setPath('보존');
          break;
        default:
          setPath('파멸');
          break;
      }
    } else {
      if (name !== '개척자') {
        let everyCharacter = everyCharacterDB[name];
        if (everyCharacter) {
          setElement(everyCharacter[0]);
          setPath(everyCharacter[1]);
        }
      }
    }
  }, [props, name]);
  return (
    <article
      className='CharacterCard'
      data-filter={isSelected}
      onClick={() => {
        props.onDetail(name);
        dispatch(switchSubMode('상세'));
      }}
    >
      <Header name={name} level={level} element={element} path={path} />
      <hr />
      <section className='CharacterCardBody'>
        <Lightcone id='lightconeId' />
        <hr />
        <CharacterCardTrace trace={trace} />
        <CharacterCardRelic id={[1, 2, 3, 4, 5, 6]} />
        <Eidolon eidolon={eidolon} />
      </section>
    </article>
  );
}
